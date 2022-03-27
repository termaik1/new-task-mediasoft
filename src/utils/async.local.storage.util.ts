export const asyncLocalStorage = {
  setItem: <T>(key: string, value: T) => {
    return Promise.resolve().then(() => {
      localStorage.setItem(key, JSON.stringify(value));
    });
  },
  getItem: <T>(key: string): Promise<T | null> => {
    return Promise.resolve().then(() => {
      const item = localStorage.getItem(key)

      return !!item ? JSON.parse(item) : null
    });
  },
  removeItem: (key: string) => {
    return Promise.resolve().then(() => {
      return localStorage.removeItem(key);
    });
  },
};
