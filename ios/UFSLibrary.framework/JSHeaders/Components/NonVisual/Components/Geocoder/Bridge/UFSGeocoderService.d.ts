import { Coordinate } from '../../../../JSCore';
export interface GeocoderConfig {
    apiKey: string;
    resultsLimit: number;
}
export default class UFSGeocoderService {
    static flush(): void;
    static geocode(address: string | Coordinate): Promise<any>;
    static configure(config: GeocoderConfig): Promise<void>;
}
