export interface ECMCachePolicy {
    type: 'CACHE' | 'DIRECT';
    maxTTL?: number;
}
export interface ECMConfig {
    downloadURL: string;
    statusURL: string;
    fileURL: string;
    cachePolicy?: ECMCachePolicy;
    user?: string;
    maxRetryCount?: number;
    pollingTimeout?: number;
}
export interface ECMGetInfo {
    scenarioId: string;
    fileId: string;
    cachePolicy?: ECMCachePolicy;
    user?: string;
}
export default class UFSECMService {
    static send(fileId: string, info: Object): Promise<void>;
    static get(info: ECMGetInfo): Promise<string>;
    static configure(config: ECMConfig): Promise<void>;
}
