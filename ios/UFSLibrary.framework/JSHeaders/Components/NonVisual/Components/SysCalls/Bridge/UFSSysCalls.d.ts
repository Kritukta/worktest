/// <reference types="react" />
import React from 'react';
export interface DiskSize {
    totalSize: number;
    freeSize: number;
}
export declare class UFSSysCalls extends React.Component<{}, {}> {
    private subscriptions;
    getDiskSize: (callback: (size: DiskSize) => void) => void;
    openExternalLink: (url: string) => Promise<{}>;
    subscribeOnWillEnterForeground: (callback: () => void) => number;
    subscribeOnWillTerminate: (callback: () => void) => number;
    subscribeOnDidBecomeActive: (callback: () => void) => number;
    subscribeOnDidEnterBackground: (callback: () => void) => number;
    subscribeOnDidReceiveMemoryWarning: (callback: () => void) => number;
    unsubscribe: (id: number) => void;
    _subscribeOnEvent: (event: string, callback: () => void) => number;
}
declare const UFSSysCallsInstance: UFSSysCalls;
export default UFSSysCallsInstance;
