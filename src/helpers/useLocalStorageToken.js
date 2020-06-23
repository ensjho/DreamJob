import { useState, useEffect } from "react";

function useLocalStorageToken() {
  const initialToken = localStorage.getItem('token') || null;
  const [token, setToken] = useState(initialToken);

  useEffect(function setTokenLocalStorage() {
    if (token === null) {
      localStorage.removeItem('token')
    } else {
      localStorage.setItem('token', token);
    }
  }, [token])

  return [token, setToken];
}

export default useLocalStorageToken;
