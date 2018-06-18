import { NativeModules } from 'react-native';
import { makeUFSErrorFromReactError } from '../../../../JSCore';
const FileService = NativeModules.UFSFileServiceBridge;
export const UFSFileType = FileService.FileTypes;
export const UFSPersistentType = FileService.PersistentTypes;
export default class UFSFileService {
    static create(identifier, type) {
        return new Promise((resolve, reject) => {
            FileService.create(identifier, type)
                .then((fileId) => {
                resolve(fileId);
            })
                .catch((error) => {
                reject(makeUFSErrorFromReactError(error));
            });
        });
    }
    static append(identifier, text) {
        return new Promise((resolve, reject) => {
            FileService.append(identifier, text)
                .then(() => {
                resolve();
            })
                .catch((error) => {
                reject(makeUFSErrorFromReactError(error));
            });
        });
    }
    static appendBinary(identifier, content) {
        return new Promise((resolve, reject) => {
            FileService.appendBinary(identifier, content)
                .then(() => {
                resolve();
            })
                .catch((error) => {
                reject(makeUFSErrorFromReactError(error));
            });
        });
    }
    static appendBase64(identifier, content) {
        return new Promise((resolve, reject) => {
            FileService.appendBase64(identifier, content)
                .then(() => {
                resolve();
            })
                .catch((error) => {
                reject(makeUFSErrorFromReactError(error));
            });
        });
    }
    static delete(identifier) {
        return new Promise((resolve, reject) => {
            FileService.delete(identifier)
                .then(() => {
                resolve();
            })
                .catch((error) => {
                reject(makeUFSErrorFromReactError(error));
            });
        });
    }
    static getSize(identifier) {
        return new Promise((resolve, reject) => {
            FileService.getSize(identifier)
                .then((size) => {
                resolve(size);
            })
                .catch((error) => {
                reject(makeUFSErrorFromReactError(error));
            });
        });
    }
    static changePersistency(identifier, persisnatyType) {
        return new Promise((resolve, reject) => {
            FileService.changePersistency(identifier, persisnatyType)
                .then(() => {
                resolve();
            })
                .catch((error) => {
                reject(makeUFSErrorFromReactError(error));
            });
        });
    }
    static getFilePath(identifier) {
        return new Promise((resolve, reject) => {
            FileService.getFilePath(identifier)
                .then((path) => {
                resolve(path);
            })
                .catch((error) => {
                reject(makeUFSErrorFromReactError(error));
            });
        });
    }
}
//# sourceMappingURL=UFSFileService.js.map