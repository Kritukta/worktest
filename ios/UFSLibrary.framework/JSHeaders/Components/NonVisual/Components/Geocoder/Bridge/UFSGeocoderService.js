import { NativeModules } from 'react-native';
import { makeUFSErrorFromReactError } from '../../../../JSCore';
const GeocoderService = NativeModules.UFSGeocoderServiceBridge;
export default class UFSGeocoderService {
    static flush() {
        GeocoderService.flush();
    }
    static geocode(address) {
        if (address.hasOwnProperty('lng')) {
            return new Promise((resolve, reject) => {
                GeocoderService.geocodeCoordinates(address)
                    .then((location) => {
                    resolve(location);
                })
                    .catch((error) => {
                    reject(makeUFSErrorFromReactError(error));
                });
            });
        }
        else {
            return new Promise((resolve, reject) => {
                GeocoderService.geocodeAddress(address)
                    .then((coordinates) => {
                    resolve(coordinates);
                })
                    .catch((error) => {
                    reject(makeUFSErrorFromReactError(error));
                });
            });
        }
    }
    static configure(config) {
        return new Promise((resolve, reject) => {
            GeocoderService.configure(config)
                .then(() => {
                resolve();
            })
                .catch((error) => {
                reject(makeUFSErrorFromReactError(error));
            });
        });
    }
}
//# sourceMappingURL=UFSGeocoderService.js.map