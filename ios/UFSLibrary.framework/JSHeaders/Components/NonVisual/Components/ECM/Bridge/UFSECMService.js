import { NativeModules } from 'react-native';
import { makeUFSErrorFromReactError } from '../../../../JSCore';
const ECMService = NativeModules.UFSECMServiceBridge;
export default class UFSECMService {
    static send(fileId, info) {
        return new Promise((resolve, reject) => {
            ECMService.send(fileId, info)
                .then(() => {
                resolve();
            })
                .catch((error) => {
                reject(makeUFSErrorFromReactError(error));
            });
        });
    }
    static get(info) {
        return new Promise((resolve, reject) => {
            ECMService.get(info)
                .then((fileId) => {
                resolve(fileId);
            })
                .catch((error) => {
                reject(makeUFSErrorFromReactError(error));
            });
        });
    }
    static configure(config) {
        return new Promise((resolve, reject) => {
            ECMService.configure(config)
                .then(() => {
                resolve();
            })
                .catch((error) => {
                reject(makeUFSErrorFromReactError(error));
            });
        });
    }
}
//# sourceMappingURL=UFSECMService.js.map