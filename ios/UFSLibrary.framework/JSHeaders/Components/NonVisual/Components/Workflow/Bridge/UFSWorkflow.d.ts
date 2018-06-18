export declare function setStore(applicationStore: any): void;
export declare function setBaseUrl(baseUrl: string): void;
export declare function initFlow(options: {
    url: string;
    flowName: string;
}, data?: any): void;
export declare function sendStateEvent(eventName: string, data?: any): void;
export declare function rollbackState(stateId: string): void;
export declare function exitFlow(): void;
export declare function abortProcess(): void;
export declare function updateStateData(data: any): void;
export declare function submitStateEvent(eventName: string): void;
export declare function updateHintSwitchEnabling(enabling: boolean): void;
export declare function updateHintsVisibility(visible: boolean): void;
