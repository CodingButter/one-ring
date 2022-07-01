import { useEffect, useState } from 'react';

const getSavedValue = (key, initialValue) => {
  const savedValue = window.electron.store.get(key);
  if (savedValue) {
    return savedValue;
  }
  if (initialValue instanceof Function) return initialValue();
  return initialValue;
};

const useElectronStore = (key, initialValue) => {
  const [value, setValue] = useState(() => getSavedValue(key, initialValue));

  useEffect(() => {
    window.electron.store.set(key, value);
  }, [value]);

  return [value, setValue];
};

export default useElectronStore;
