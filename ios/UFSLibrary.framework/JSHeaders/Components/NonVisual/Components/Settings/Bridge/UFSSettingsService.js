import { NativeModules } from 'react-native';
import { makeUFSErrorFromReactError } from '../../../../JSCore';
const SettingsService = NativeModules.UFSSettingsServiceBridge;
export default class UFSSettingsService {
    static configure(config) {
        return new Promise((resolve, reject) => {
            SettingsService.configure(config)
                .then(() => {
                resolve();
            })
                .catch((error) => {
                reject(makeUFSErrorFromReactError(error));
            });
        });
    }
    static retrieve(config) {
        if (Array.isArray(config)) {
            return new Promise((resolve, reject) => {
                SettingsService.retrieveWithParamsArray(config)
                    .then((result) => {
                    resolve(result);
                })
                    .catch((error) => {
                    reject(makeUFSErrorFromReactError(error));
                });
            });
        }
        else {
            return new Promise((resolve, reject) => {
                SettingsService.retrieveWithParamsDictionary(config)
                    .then((result) => {
                    resolve(result);
                })
                    .catch((error) => {
                    reject(makeUFSErrorFromReactError(error));
                });
            });
        }
    }
    static get(config) {
        return new Promise((resolve, reject) => {
            SettingsService.getParams(config)
                .then((result) => {
                resolve(result);
            })
                .catch((error) => {
                reject(makeUFSErrorFromReactError(error));
            });
        });
    }
}
//# sourceMappingURL=UFSSettingsService.js.map