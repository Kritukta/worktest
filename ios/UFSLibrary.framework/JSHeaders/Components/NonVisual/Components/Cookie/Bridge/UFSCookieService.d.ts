export interface CookieData {
    domain?: string;
    path?: string;
    value?: string;
    expiresDate?: string;
}
export default class UFSCookieService {
    static get(callback: (cookie: CookieData[]) => void): any;
}
