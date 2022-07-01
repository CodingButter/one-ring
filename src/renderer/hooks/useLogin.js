/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from 'react';
import app from '../config/appConfig';
import useElectronStore from './useElectronStore';

const useUserAuth = (provider) => {
  const [user, setUser] = useState(null);
  const [accessToken, setAccessToken] = useElectronStore('accessToken', null);
  const [error, setError] = useState(null);
  const refresh = async () => {};

  const login = async () => {
    try {
      app.auth().signInWithRedirect(provider);
    } catch (loginError) {
      setError(loginError);
    }
  };
  const fromRedirect = async () => {
    const results = await app.auth().getRedirectResult();
    if (results.credential) {
      setAccessToken(results.credential.accessToken);
    }
    return results.user;
  };

  // Refresh user by refreshing token
  const refreshUser = async () => {
    // Handle getting the user from the refresh token
    return {};
  };

  const getUserAuthData = async () => {
    try {
      if (user?.stsTokenManager) {
        const { expirationTime } = user.stsTokenManager;
        const now = new Date().getTime();
        if (now > expirationTime) {
          setUser(await refreshUser());
        }
      } else {
        setUser(await fromRedirect());
      }
    } catch (redirectError) {
      setError({ redirectError });
    }
  };

  useEffect(() => {
    getUserAuthData();
  }, []);
  return { user, error, login, refresh, accessToken };
};

export default useUserAuth;
