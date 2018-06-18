import { NativeModules } from 'react-native';
import { makeUFSErrorFromReactError } from '../../../../JSCore';
const LogService = NativeModules.UFSLogServiceBridge;
export const UFSLogLevel = LogService.LogLevels;
export default class UFSLogService {
    static configure(config) {
        LogService.configure(config);
    }
    static send(onError, onSuccess, onProgress) {
        return LogService.send((bytesSended, totalBytes, fileSended, totalFiles) => {
            // TODO: Sherstobitov I.G. 30.01.17 UFSMP-569 - Unable to transfer 3 callbacks
            // Issue Reactnative
            // Emulation call onSuccess
            if (onProgress) {
                onProgress(bytesSended, totalBytes, fileSended, totalFiles);
            }
            if ((bytesSended === totalBytes) && (fileSended === totalFiles) && onSuccess) {
                onSuccess();
            }
        }, (error) => {
            if (onError) {
                onError(makeUFSErrorFromReactError(error));
            }
        });
    }
    static clean(endDate, beginDate) {
        return new Promise((resolve, reject) => {
            LogService.cleanFromDate(beginDate || null, endDate)
                .then(() => {
                resolve();
            })
                .catch((error) => {
                reject(makeUFSErrorFromReactError(error));
            });
        });
    }
}
export function log(string, logLevel) {
    LogService.log(string, logLevel || UFSLogLevel.debug);
}
//# sourceMappingURL=UFSLogService.js.map