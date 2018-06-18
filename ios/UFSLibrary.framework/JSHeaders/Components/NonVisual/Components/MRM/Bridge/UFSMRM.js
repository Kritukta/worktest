import { NativeModules, NativeEventEmitter } from 'react-native';
import { makeUFSErrorFromReactError } from '../../../../JSCore/';
const MRM = NativeModules.UFSMRMBridge;
const MRMEventEmitter = new NativeEventEmitter(MRM);
const MRMEvents = MRM.MRMEvents;
export default class UFSMRM {
    static switchRootApp(bundleName) {
        return new Promise((resolve, reject) => {
            MRM.switchRootApp(bundleName)
                .then(() => {
                resolve();
            })
                .catch((error) => {
                reject(makeUFSErrorFromReactError(error));
            });
        });
    }
    static showModalApp(bundleName) {
        return new Promise((resolve, reject) => {
            MRM.showModalApp(bundleName)
                .then(() => {
                resolve();
            })
                .catch((error) => {
                reject(makeUFSErrorFromReactError(error));
            });
        });
    }
    static dismissModalApp() {
        return new Promise((resolve, reject) => {
            MRM.dismissModalApp()
                .then(() => {
                resolve();
            })
                .catch((error) => {
                reject(makeUFSErrorFromReactError(error));
            });
        });
    }
    static startChangePassword() {
        MRM.startChangePassword();
    }
}
UFSMRM.onSwitch = (callback) => {
    MRMEventEmitter.removeAllListeners(MRMEvents.onSwitch);
    if (callback != null) {
        MRMEventEmitter.addListener(MRMEvents.onSwitch, (data) => {
            callback(data.bundleName);
        }, undefined);
    }
};
UFSMRM.startAuth = (reloadBundle) => {
    MRM.startAuth((reloadBundle === undefined || reloadBundle === null) ? true : reloadBundle);
};
//# sourceMappingURL=UFSMRM.js.map