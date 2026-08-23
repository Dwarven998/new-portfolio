// Client-side persistent asset storage for Spider-Man transformation using IndexedDB
const DB_NAME = 'AlgianPortfolioAssets';
const STORE_NAME = 'profile_images';
const DB_VERSION = 1;

export interface AssetMap {
  original: string | null;
  mid: string | null;
  spiderman: string | null;
  webOverlay: string | null;
  energyGlitch: string | null;
}

const openDB = (): Promise<IDBDatabase> => {
  return new Promise((resolve, reject) => {
    if (typeof window === 'undefined' || !window.indexedDB) {
      reject(new Error('IndexedDB not supported'));
      return;
    }
    const request = indexedDB.open(DB_NAME, DB_VERSION);
    request.onupgradeneeded = () => {
      const db = request.result;
      if (!db.objectStoreNames.contains(STORE_NAME)) {
        db.createObjectStore(STORE_NAME);
      }
    };
    request.onsuccess = () => resolve(request.result);
    request.onerror = () => reject(request.error);
  });
};

export const saveAssetToDB = async (key: keyof AssetMap, dataUrl: string): Promise<void> => {
  try {
    const db = await openDB();
    return new Promise((resolve, reject) => {
      const tx = db.transaction(STORE_NAME, 'readwrite');
      const store = tx.objectStore(STORE_NAME);
      store.put(dataUrl, key);
      tx.oncomplete = () => resolve();
      tx.onerror = () => reject(tx.error);
    });
  } catch (err) {
    console.warn('Failed to save asset to IndexedDB:', err);
  }
};

export const getAssetFromDB = async (key: keyof AssetMap): Promise<string | null> => {
  try {
    const db = await openDB();
    return new Promise((resolve, reject) => {
      const tx = db.transaction(STORE_NAME, 'readonly');
      const store = tx.objectStore(STORE_NAME);
      const req = store.get(key);
      req.onsuccess = () => resolve(req.result || null);
      req.onerror = () => reject(req.error);
    });
  } catch {
    return null;
  }
};

export const getAllAssetsFromDB = async (): Promise<Partial<AssetMap>> => {
  const keys: (keyof AssetMap)[] = ['original', 'mid', 'spiderman', 'webOverlay', 'energyGlitch'];
  const result: Partial<AssetMap> = {};
  for (const key of keys) {
    const val = await getAssetFromDB(key);
    if (val) result[key] = val;
  }
  return result;
};

export const clearAllAssetsFromDB = async (): Promise<void> => {
  try {
    const db = await openDB();
    const tx = db.transaction(STORE_NAME, 'readwrite');
    tx.objectStore(STORE_NAME).clear();
  } catch (err) {
    console.warn('Error clearing IndexedDB:', err);
  }
};
