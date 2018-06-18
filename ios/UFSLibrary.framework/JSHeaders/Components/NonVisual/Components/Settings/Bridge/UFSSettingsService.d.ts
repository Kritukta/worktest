export interface SettingsConfig {
    url: string;
    applicationId?: string;
    applicationVersion?: string;
    branchMode?: boolean;
}
export interface SettingsParameters {
    [key: string]: Object;
}
export default class UFSSettingsService {
    static configure(config: SettingsConfig): Promise<void>;
    static retrieve(config: Object | string[]): Promise<SettingsParameters>;
    static get(config: string[]): Promise<SettingsParameters>;
}
