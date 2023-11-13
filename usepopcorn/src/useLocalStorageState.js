import { useState, useEffect } from "react";

export function useLocalStorageState(initialState, keyName) {
  const [value, setValue] = useState(() => {
    const watchedFilms = localStorage.getItem(keyName);
    return watchedFilms ? JSON.parse(watchedFilms) : initialState;
  });
  useEffect(
    function () {
      localStorage.setItem(keyName, JSON.stringify(value));
    },
    [value, keyName]
  );
  return [value, setValue];
}
