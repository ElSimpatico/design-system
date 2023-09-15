type StorageType = 'local' | 'session';

interface IStorageService {
    get<T>(key: string): T;
    set<T>(key: string, value: T): void;
}

class StorageService implements IStorageService {
    private storage: Storage;
    constructor(type: StorageType) {
        this.storage = type === 'local' ? localStorage : sessionStorage;
    }

    get<T>(key: string): T {
        const item = this.storage.getItem(key);
        return item ? JSON.parse(item) : null;
    }

    set<T>(key: string, value: T): void {
        if (key) {
            this.storage.setItem(key, JSON.stringify(value));
        }
    }
}

export class LocalStorageSingleton {
    private static instance: StorageService;

    static getInstance(): StorageService {
        if (!this.instance) {
            this.instance = new StorageService('local');
        }
        return this.instance;
    }
}
