export declare const UFSFileType: any;
export declare const UFSPersistentType: any;
export default class UFSFileService {
    static create(identifier: string, type: number): Promise<string>;
    static append(identifier: string, text: string): Promise<void>;
    static appendBinary(identifier: string, content: string): Promise<void>;
    static appendBase64(identifier: string, content: string): Promise<void>;
    static delete(identifier: string): Promise<void>;
    static getSize(identifier: string): Promise<number>;
    static changePersistency(identifier: string, persisnatyType: number): Promise<void>;
    static getFilePath(identifier: string): Promise<string>;
}
