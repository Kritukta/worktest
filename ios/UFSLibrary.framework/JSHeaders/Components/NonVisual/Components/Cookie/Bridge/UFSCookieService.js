import { NativeModules } from 'react-native';
const CookieService = NativeModules.UFSCookieServiceBridge;
export default class UFSCookieService {
    static get(callback) {
        return CookieService.getCookie(callback);
    }
}
//# sourceMappingURL=UFSCookieService.js.map