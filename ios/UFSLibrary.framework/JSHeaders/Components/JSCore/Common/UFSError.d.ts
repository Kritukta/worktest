import { WorkflowError } from './UFSInterfaces';
export declare type ReactError = {
    code?: string;
    domain?: string;
    message?: string;
    userInfo?: any;
};
export declare type ErrorUserInfo = {
    UFSModule: string;
    UFSSubmodule: string;
    UFSCode: string;
    UFSMessage: string;
    UFSUnderlyingError?: ErrorUserInfo;
};
export declare type UFSError = {
    module: string;
    submodule: string;
    code: string;
    message: string;
    underlyingError?: UFSError;
};
export declare function makeUFSErrorFromReactError(error: ReactError): UFSError;
export declare function makeUFSErrorFromUserInfo(userInfo: ErrorUserInfo): UFSError;
export declare function makeWorkflowErrorWithReactError(error: ReactError): WorkflowError;
