/* eslint-disable react/button-has-type */
import React from 'react';
import { Navigate } from 'react-router-dom';
import { Button, Typography } from '@mui/material';
import { useAuthContext } from 'renderer/providers/AuthProvider';
import providers from '../config/authMethods';
import getLogin from '../hooks/useLogin';

const Welcome = () => {
  const { currentUser } = useAuthContext();
  const ProviderHooks = Object.keys(providers).map((key) => {
    return {
      label: key,
      ...getLogin(providers[key]),
    };
  });

  return currentUser ? (
    <Navigate to="/dashboard" />
  ) : (
    <div>
      <Typography variant="h1" sx={{ fontFamily: 'Bilbo' }}>
        Welcome to One Ring
      </Typography>
      {ProviderHooks.map(({ label, login }) => {
        return (
          <Button key={label} variant="primary" onClick={() => login()}>
            Login With {label}
          </Button>
        );
      })}
    </div>
  );
};

export default Welcome;
