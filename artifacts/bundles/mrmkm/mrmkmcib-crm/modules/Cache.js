import { Enums } from "../Enums";
import { AsyncStorage } from 'react-native'; // FIXME Use UFS modules to persist data
const CACHE_ASYNC_STORAGE_PREFIX = 'SESSION_CACHE_mrmkmcibCRM_';
let currentUser = '';
let currentCacheSession = { user: currentUser, store: [] };
let cacheTTL = 1000 * 60 * 60 * 24;
export const setCacheTTL = (value) => {
    cacheTTL = value;
};
export const responsePersist = (url, data, header) => {
    if (url.tagList) {
        for (let i = 0; i < url.tagList.length; i++) {
            if (url.tagList[i].tag == Enums.CachePolicy.Disabled) {
                return;
            }
        }
    }
    if (__DEV__)
        console.log('Response persisted to cache.', url, header, data);
    currentCacheSession.store.push({
        url: url.url,
        header: JSON.stringify(header),
        data: JSON.stringify(data),
        cacheDate: new Date(),
        tagList: url.tagList
    });
    AsyncStorage.setItem(CACHE_ASYNC_STORAGE_PREFIX + currentUser, JSON.stringify(currentCacheSession));
};
export const responseRecover = (url, header) => {
    if (url.tagList) {
        for (let i = 0; i < url.tagList.length; i++) {
            if (url.tagList[i].tag == Enums.CachePolicy.Disabled) {
                return null;
            }
        }
    }
    sessionResetTag({ tag: '' });
    let data = currentCacheSession.store.find((cacheRequest) => {
        return (cacheRequest.url == url.url && cacheRequest.header == JSON.stringify(header));
    });
    if (data && __DEV__)
        console.log('Response recovered from cache.', url, JSON.parse(data.data));
    return data ? { data: JSON.parse(data.data),
        cachedDate: data.cacheDate || new Date() }
        : null;
};
const isCacheValid = (cacheRequest, tag) => {
    // Remove cache with CachePolicy Disabled tag.
    if (tag == Enums.CachePolicy.Disabled) {
        return false;
    }
    // Remove cache with CachePolicy Default tag and expired cache.
    if (tag == Enums.CachePolicy.Default && (new Date().getTime() > new Date(cacheRequest.cacheDate).getTime() + cacheTTL)) {
        if (__DEV__)
            console.log('Cache removed for request ' + cacheRequest.url + '.', currentCacheSession);
        return false;
    }
    return true;
};
export const sessionResetTag = (findTag) => {
    currentCacheSession.store = currentCacheSession.store.filter((cacheRequest) => {
        if (cacheRequest.tagList.find((tag) => {
            return (tag.tag == findTag.tag && tag.contextId == findTag.contextId) || !isCacheValid(cacheRequest, tag.tag);
        })) {
            if (__DEV__)
                console.log('Cache removed for request ' + cacheRequest.url + '.', currentCacheSession);
            return false;
        }
        else {
            return true;
        }
    });
};
export const sessionResetUrl = (url) => {
    currentCacheSession.store = currentCacheSession.store.filter((cacheRequest) => {
        if (cacheRequest.url == url.url ||
            cacheRequest.tagList.find((tag) => {
                return !isCacheValid(cacheRequest, tag.tag);
            })) {
            if (__DEV__)
                console.log('Cache removed for request ' + cacheRequest.url + '.', currentCacheSession);
            return false;
        }
        else {
            return true;
        }
    });
};
export const sessionResetTagList = (findTagList) => {
    currentCacheSession.store = currentCacheSession.store.filter((cacheRequest) => {
        let tagListFound = false;
        findTagList.map((findTag) => {
            if (cacheRequest.tagList.find((tag) => {
                return (tag.tag == findTag.tag && tag.contextId == findTag.contextId);
            })) {
                if (__DEV__)
                    console.log('Cache removed for request ' + cacheRequest.url + '.', currentCacheSession);
                tagListFound = true;
            }
        });
        return !tagListFound;
    });
};
export const sessionStart = (user, onSuccess) => {
    currentUser = user;
    currentCacheSession = { user: currentUser, store: [] };
    AsyncStorage.getItem(CACHE_ASYNC_STORAGE_PREFIX + user).then((data) => {
        if (data != null) {
            currentCacheSession = JSON.parse(data);
            if (__DEV__)
                console.log('Cache restored.', currentCacheSession);
        }
        onSuccess();
    });
};
export const sessionReset = (user) => {
    currentCacheSession = { user: currentUser, store: [] };
    AsyncStorage.removeItem(CACHE_ASYNC_STORAGE_PREFIX + user);
};
//# sourceMappingURL=Cache.js.map