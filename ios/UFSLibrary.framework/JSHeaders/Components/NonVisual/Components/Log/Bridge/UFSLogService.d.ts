import { UFSError } from '../../../../JSCore';
export declare const UFSLogLevel: any;
export declare type LogSendErrorCallback = (error: UFSError) => void;
export declare type LogSendSuccessCallback = () => void;
export declare type LogSendProgressCallback = (bytesSended: number, totalBytes: number, fileSended: number, totalFiles: number) => void;
export interface LogConfig {
    externalUZSUDIR: string;
    logStoreURL: string;
    logFileTTL?: number;
    logFileMaxSize?: number;
    logUploadTimeout?: number;
}
export default class UFSLogService {
    static configure(config: LogConfig): void;
    static send(onError: LogSendErrorCallback, onSuccess: LogSendSuccessCallback, onProgress: LogSendProgressCallback): any;
    static clean(endDate: String, beginDate?: String): Promise<void>;
}
export declare function log(string: string, logLevel?: number): void;
