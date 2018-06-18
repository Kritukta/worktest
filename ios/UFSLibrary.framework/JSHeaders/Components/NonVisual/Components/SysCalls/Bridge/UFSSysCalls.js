import React from 'react';
import { NativeModules, NativeEventEmitter } from 'react-native';
import { makeUFSErrorFromReactError } from '../../../../JSCore';
const SysCalls = NativeModules.UFSSysCallsBridge;
const AppEventEmitter = new NativeEventEmitter(SysCalls);
const AppEvents = SysCalls.AppEvents;
export class UFSSysCalls extends React.Component {
    constructor() {
        super(...arguments);
        this.subscriptions = [];
        this.getDiskSize = (callback) => {
            SysCalls.getDiskSize({}, callback);
        };
        this.openExternalLink = (url) => {
            return new Promise((resolve, reject) => {
                SysCalls.openExternalLink(url)
                    .then((success) => {
                    resolve(success);
                })
                    .catch((error) => {
                    reject(makeUFSErrorFromReactError(error));
                });
            });
        };
        this.subscribeOnWillEnterForeground = (callback) => {
            return this._subscribeOnEvent(AppEvents.AppWillEnterForeground, callback);
        };
        this.subscribeOnWillTerminate = (callback) => {
            return this._subscribeOnEvent(AppEvents.AppWillTerminate, callback);
        };
        this.subscribeOnDidBecomeActive = (callback) => {
            return this._subscribeOnEvent(AppEvents.AppDidBecomeActive, callback);
        };
        this.subscribeOnDidEnterBackground = (callback) => {
            return this._subscribeOnEvent(AppEvents.AppDidEnterBackground, callback);
        };
        this.subscribeOnDidReceiveMemoryWarning = (callback) => {
            return this._subscribeOnEvent(AppEvents.AppDidReceiveMemoryWarning, callback);
        };
        this.unsubscribe = (id) => {
            const subscription = this.subscriptions[id];
            if (!subscription) {
                return;
            }
            subscription.remove();
            this.subscriptions.splice(id, 1);
        };
        this._subscribeOnEvent = (event, callback) => {
            const id = this.subscriptions.length;
            this.subscriptions.push(AppEventEmitter.addListener(event, callback, null));
            return id;
        };
    }
}
const UFSSysCallsInstance = new UFSSysCalls();
export default UFSSysCallsInstance;
//# sourceMappingURL=UFSSysCalls.js.map