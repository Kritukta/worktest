import { NativeModules, NativeEventEmitter } from 'react-native';
import { makeUFSErrorFromReactError } from '../../../../JSCore';
const DataBus = NativeModules.UFSDataBusBridge;
const DataBusEventEmitter = new NativeEventEmitter(DataBus);
const DataBusEvents = DataBus.DataBusEvents;
export const UFSDataBusMessageType = DataBus.MessageType;
export default class UFSDataBus {
}
UFSDataBus.register = (callback) => {
    return new Promise((resolve, reject) => {
        DataBus.registerApplication()
            .then((result) => {
            UFSDataBus.subscribeOnRecieveMessage(callback);
            DataBus.checkMessageQueue();
            resolve(result);
        })
            .catch((error) => {
            reject(makeUFSErrorFromReactError(error));
        });
    });
};
UFSDataBus.sendMessage = (payload, toBundleName, toAppId, messageType = UFSDataBusMessageType.ONLINE) => {
    return new Promise((resolve, reject) => {
        DataBus.sendMessage(payload, toBundleName, toAppId, messageType)
            .then(() => {
            resolve();
        })
            .catch((error) => {
            reject(makeUFSErrorFromReactError(error));
        });
    });
};
UFSDataBus.subscribeOnRecieveMessage = (callback) => {
    let mappedCallback = (nativeResponse) => {
        var mappedMessages = nativeResponse.map(function (nativeMessage) {
            let object = Object.assign({}, nativeMessage, {
                time: new Date(nativeMessage.timestamp * 1000)
            });
            delete object.timestamp;
            return object;
        });
        callback(mappedMessages);
    };
    DataBusEventEmitter.addListener(DataBusEvents.didRecieveMessage, mappedCallback, undefined);
};
//# sourceMappingURL=UFSDataBus.js.map