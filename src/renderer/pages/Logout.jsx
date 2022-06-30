import React, { useEffect } from 'react';
import { Navigate } from 'react-router-dom';
import { useAuthContext } from 'renderer/providers/AuthProvider';
import app from '../config/appConfig';

const Logout = () => {
  const { currentUser } = useAuthContext();

  useEffect(() => {
    app.auth().signOut();
  }, []);
  console.log(currentUser);
  return !currentUser ? <Navigate to="/" /> : null;
};

export default Logout;
