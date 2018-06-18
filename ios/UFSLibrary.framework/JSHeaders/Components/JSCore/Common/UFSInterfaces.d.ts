export declare type Result = "SUCCESS" | "EXTERNAL_ENTER" | "EXTERNAL_RETURN" | "END";
export interface WorkflowOptions {
    url: string;
    flowName?: string;
}
export interface WorkflowData {
    result: number;
    pid?: string;
    flow?: string;
    state?: string;
    output?: Object;
    history?: HistoryItem[];
    url?: string;
    hints?: Hints;
}
export interface Hints {
    boStepCode: string;
    hints: Hint[];
}
export interface Hint {
    elementCode: string;
    hintTexts: HintText[];
}
export interface HintText {
    text: string;
    hintTextType: 'FIELD' | 'FLOAT' | 'RULE';
}
export interface HistoryItem {
    id: string;
    flow: string;
    flowId?: number;
    state: string;
    title: string;
    value?: string;
    status: "ACTIVE" | "HIDDEN" | "DISABLED";
}
export interface Message {
    title: string;
    text: string;
    type: string;
}
export interface WorkflowError {
    /**
     * Error code
     */
    code?: string;
    /**
     * System code
     */
    system?: string;
    /**
     * Error title
     */
    title: string;
    /**
     * Error text
     */
    text: string;
    /**
     * UUID of exception
     */
    uuid?: string;
}
export declare enum WorkflowStatus {
    SUCCESS = 0,
    EXTERNAL_ENTER = 1,
    EXTERNAL_RETURN = 2,
    END = 3,
}
export interface Coordinate {
    lat: number;
    lng: number;
}
export interface Address {
    countryCode?: string;
    postalCode?: string;
    text: string;
    country?: string;
    province?: string[];
    locality?: string;
    street?: string;
    house?: string;
}
export interface Location {
    coordinates: Coordinate;
    address: Address;
}
export interface IPagePayload {
    key: string;
    data?: any;
}
export declare type ISplitPanelChildState = {
    panelId: string;
    id: number;
    pagePayload: IPagePayload;
};
export declare type ISplitPanelChildStateList = ISplitPanelChildState[];
