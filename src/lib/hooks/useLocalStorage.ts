import { useConfig } from '@usedapp/core';
import { useEffect, useState } from 'react';

export default class LocalStorage {
  private data: { [key: string]: string } = {};
  length = 0;

  clear() {
    this.data = {};
    this.length = 0;
  }

  getItem(key: string): string | null {
    const item: any = this.data[key];
    return item || null;
  }

  key(index: number): string | null {
    const keys = Object.keys(this.data);
    return keys[index] || null;
  }

  removeItem(key: string): void {
    if (this.data[key]) {
      delete this.data[key];
      this.length--;
    }
  }

  setItem(key: string, value: string): void {
    if (!this.data[key]) {
      this.length++;
    }
    this.data[key] = value;
  }
}

function getItem(key: string, storage: WindowLocalStorage['localStorage']) {
  const item = storage.getItem(key);
  if (item !== null) {
    try {
      return JSON.parse(item);
    } catch {
      // ignore error
    }
  }
}

function setItem(
  key: string,
  value: any,
  storage: WindowLocalStorage['localStorage']
) {
  if (value === undefined) {
    storage.removeItem(key);
  } else {
    const toStore = JSON.stringify(value);
    try {
      storage.setItem(key, toStore);
      return JSON.parse(toStore);
    } catch (err) {
      console.error('Error in localStorage', err);
      storage.removeItem(key);
    }
  }
}

/**
 * @internal Intended for internal use - use it on your own risk
 */
export function useLocalStorage(key: string) {
  const {
    localStorageOverride = typeof window !== 'undefined'
      ? window.localStorage
      : new LocalStorage(),
  } = useConfig();

  const [value, setValue] = useState(() => getItem(key, localStorageOverride));

  useEffect(() => {
    setValue(getItem(key, localStorageOverride));
  }, [key]);

  useEffect(() => {
    setItem(key, value, localStorageOverride);
  }, [value]);

  // As value updating relies on useEffect, it takes multiple rerenders to fully update the value.
  // The third element in the return array allows to get the immediate value stored in the localStorage.
  return [value, setValue, () => getItem(key, localStorageOverride)] as const;
}
