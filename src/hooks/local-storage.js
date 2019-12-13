import { useEffect, useState } from "react";

function useLocalStorage(key, initialValue) {
  const [storedValue, setStoredValue] = useState(() => {
    try {
      const item = window.localStorage.getItem(key);
      return item ? JSON.parse(item) : initialValue;
    } catch (error) {
      return initialValue;
    }
  });

  const storageEventHandler = event => {
    const { oldValue, newValue } = event;

    if (event.key === key && oldValue !== newValue) {
      setStoredValue(JSON.parse(newValue));
    }
  };

  useEffect(() => {
    window.addEventListener("storage", storageEventHandler);
    return () => {
      window.removeEventListener("storage", storageEventHandler);
    };
  }, []);

  const setValue = value => {
    try {
      const valueToStore =
        value instanceof Function ? value(storedValue) : value;
      setStoredValue(valueToStore);
      window.localStorage.setItem(key, JSON.stringify(valueToStore));
    } catch (error) {
      console.log(error);
    }
  };

  return [storedValue, setValue];
}

export { useLocalStorage };
