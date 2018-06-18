export declare const UFSDataBusMessageType: any;
export interface UFSDataBusMessage {
    fromAppId: string;
    fromBundleName: string;
    toAppId: string;
    toBundleName: string;
    time: Date;
    payload: any;
}
export interface DataBusRegisterResult {
    appId: string;
    bundleName: string;
}
export default class UFSDataBus {
    static register: (callback: (messages: [UFSDataBusMessage]) => void) => Promise<DataBusRegisterResult>;
    static sendMessage: (payload: any, toBundleName?: string, toAppId?: string, messageType?: number) => Promise<void>;
    static subscribeOnRecieveMessage: (callback: (messages: UFSDataBusMessage[]) => void) => void;
}
