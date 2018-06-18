import { NativeModules } from 'react-native';
const SystemInfoService = NativeModules.UFSSystemInfoServiceBridge;
export default class UFSSystemInfoService {
    static applicationVersion(callback) {
        return SystemInfoService.applicationVersion(callback);
    }
    static applicationId(callback) {
        return SystemInfoService.applicationId(callback);
    }
}
//# sourceMappingURL=UFSSystemInfoService.js.map