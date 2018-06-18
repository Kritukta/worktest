import { NativeModules } from 'react-native';
import { makeUFSErrorFromReactError } from '../../../../JSCore';
const NetworkService = NativeModules.UFSNetworkServiceBridge;
export function download(url, config) {
    return new Promise((resolve, reject) => {
        NetworkService.downloadFile(url, config)
            .then((fileId) => {
            resolve(fileId);
        })
            .catch((error) => {
            reject(makeUFSErrorFromReactError(error));
        });
    });
}
export function upload(url, fileID, config) {
    return new Promise((resolve, reject) => {
        NetworkService.uploadFile(url, fileID, config)
            .then(() => {
            resolve();
        })
            .catch((error) => {
            reject(makeUFSErrorFromReactError(error));
        });
    });
}
export function get(url, config) {
    return new Promise((resolve, reject) => {
        NetworkService.get(url, config)
            .then((data) => {
            resolve(data);
        })
            .catch((error) => {
            reject(makeUFSErrorFromReactError(error));
        });
    });
}
export function post(url, data, config) {
    return new Promise((resolve, reject) => {
        NetworkService.post(url, data, config)
            .then((data) => {
            resolve(data);
        })
            .catch((error) => {
            reject(makeUFSErrorFromReactError(error));
        });
    });
}
export function put(url, data, config) {
    return new Promise((resolve, reject) => {
        NetworkService.put(url, data, config)
            .then((data) => {
            resolve(data);
        })
            .catch((error) => {
            reject(makeUFSErrorFromReactError(error));
        });
    });
}
export function syncGet(url, config) {
    return new Promise((resolve, reject) => {
        NetworkService.syncGet(url, config)
            .then((data) => {
            resolve(data);
        })
            .catch((error) => {
            reject(makeUFSErrorFromReactError(error));
        });
    });
}
export function syncPost(url, data, config) {
    return new Promise((resolve, reject) => {
        NetworkService.syncPost(url, data, config)
            .then((data) => {
            resolve(data);
        })
            .catch((error) => {
            reject(makeUFSErrorFromReactError(error));
        });
    });
}
export function syncPut(url, data, config) {
    return new Promise((resolve, reject) => {
        NetworkService.syncPut(url, data, config)
            .then((data) => {
            resolve(data);
        })
            .catch((error) => {
            reject(makeUFSErrorFromReactError(error));
        });
    });
}
//# sourceMappingURL=UFSNetworkService.js.map