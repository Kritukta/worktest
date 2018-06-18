export default class UFSMRM {
    static onSwitch: (callback?: (bundleName: string) => void) => void;
    static switchRootApp(bundleName: string): Promise<void>;
    static showModalApp(bundleName: string): Promise<void>;
    static dismissModalApp(): Promise<void>;
    static startAuth: (reloadBundle?: boolean) => void;
    static startChangePassword(): void;
}
