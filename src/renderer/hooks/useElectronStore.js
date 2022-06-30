import { useEffect, useState } from 'react';

const getSavedValue = async (key, initialValue) => {
  const savedValue = window.electron.ipcRenderer.sendSync('get-item', key);
  if (savedValue) {
    return savedValue;
  }
  if (initialValue instanceof Function) return initialValue();
  return initialValue;
};

const useElectronStore = (key, initialValue) => {
  const [value, setValue] = useState(() => getSavedValue(key, initialValue));

  useEffect(() => {
    window.electron.ipcRenderer.send('set-item', { key, value });
  }, [value]);

  return [value, setValue];
};

export default useElectronStore;
