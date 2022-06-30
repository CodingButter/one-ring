import React, { useContext, createContext, useState, useEffect } from 'react';
import app from '../config/appConfig';

export const AuthContext = createContext({});
export const useAuthContext = () => useContext(AuthContext);

export const AuthProvider = ({ children }: React.PropsWithChildren) => {
  const [currentUser, setCurrentUser] = useState<unknown | null>(null);
  const [pending, setPending] = useState(true);

  useEffect(() => {
    app.auth().onAuthStateChanged((user) => {
      setCurrentUser(user?.toJSON());
      setPending(false);
    });
  }, []);

  if (pending) {
    return <>Loading...</>;
  }
  return (
    <AuthContext.Provider
      value={{
        currentUser,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
