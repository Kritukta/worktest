export interface NetworkHeaders {
    [key: string]: string;
}
export interface NetworkConfig {
    timeout?: number;
    headers?: NetworkHeaders;
}
export declare function download(url: string, config?: NetworkConfig): Promise<string>;
export declare function upload(url: string, fileID: string, config?: NetworkConfig): Promise<void>;
export declare function get(url: string, config?: NetworkConfig): Promise<Object>;
export declare function post(url: string, data?: Object, config?: NetworkConfig): Promise<Object>;
export declare function put(url: string, data?: Object, config?: NetworkConfig): Promise<Object>;
export declare function syncGet(url: string, config?: NetworkConfig): Promise<Object>;
export declare function syncPost(url: string, data?: Object, config?: NetworkConfig): Promise<Object>;
export declare function syncPut(url: string, data?: Object, config?: NetworkConfig): Promise<Object>;
