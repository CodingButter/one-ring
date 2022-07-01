import React, { useContext, createContext, useState, useEffect } from 'react';
import useUserAuth from 'renderer/hooks/useLogin';
import { Octokit } from '@octokit/rest';
import Loading from 'renderer/components/common/Loading';
import app from '../config/appConfig';
import providers from '../config/authMethods';

export const AuthContext = createContext({});
export const useAuthContext = () => useContext(AuthContext);

export const AuthProvider = ({ children }: React.PropsWithChildren) => {
  const [currentUser, setCurrentUser] = useState(null);
  const [pending, setPending] = useState<boolean>(true);
  const { accessToken } = useUserAuth(providers.GitHub);
  const [octokit, setOctokit] = useState<Octokit | null>(null);

  const signOut = () => {
    app.auth().signOut();
  };

  const manageAccessChange = () => {
    app.auth().onAuthStateChanged((user) => {
      if (accessToken && user) {
        const octoInstance = new Octokit({ auth: accessToken });
        setOctokit(octoInstance);
      }
      setCurrentUser(user?.toJSON());
      setPending(false);
    });
  };

  useEffect(() => {
    manageAccessChange();
  }, []);

  if (pending) {
    return <Loading />;
  }
  return (
    <AuthContext.Provider
      value={{
        currentUser,
        accessToken,
        signOut,
        octokit,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
