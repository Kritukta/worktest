import { Models } from "mrmkmcib-dashboard";
export declare const setCacheTTL: (value: number) => void;
export declare const responsePersist: (url: Models.Url, data: any, header?: string | undefined) => void;
export declare const responseRecover: (url: Models.Url, header?: any) => any;
export declare const sessionResetTag: (findTag: Models.CacheTag) => void;
export declare const sessionResetTagList: (findTagList: Models.CacheTag[]) => void;
export declare const sessionStart: (user: string, onSuccess: Function) => void;
export declare const sessionReset: (user: string) => void;
