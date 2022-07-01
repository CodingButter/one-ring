/* eslint-disable react/button-has-type */
import React, { useEffect } from 'react';
import { Navigate } from 'react-router-dom';
import { Button, Stack, Typography } from '@mui/material';
import { useAuthContext } from 'renderer/providers/AuthProvider';
import { Login } from '@mui/icons-material';
import providers from '../config/authMethods';
import getLogin from '../hooks/useLogin';

interface Props extends React.Props<any> {
  setPending: (pending: boolean) => void;
  pending: boolean;
}
const Welcome = ({ setPending, pending }: Props) => {
  const { currentUser } = useAuthContext();
  const ProviderHooks = Object.keys(providers).map((key) => {
    return {
      label: key,
      ...getLogin(providers[key]),
    };
  });
  useEffect(() => {
    setPending(false);
  }, []);
  return currentUser ? (
    <Navigate to="/dashboard" />
  ) : (
    <Stack
      direction="column"
      justifyContent="center"
      alignItems="center"
      spacing={2}
    >
      <Typography variant="h2" sx={{ fontFamily: 'Bilbo' }}>
        Welcome to One Ring
      </Typography>
      {ProviderHooks.map(({ label, login }) => {
        return (
          <Button
            key={label}
            color="secondary"
            size="large"
            variant="contained"
            endIcon={<Login />}
            onClick={() => login()}
          >
            Login With {label}
          </Button>
        );
      })}
    </Stack>
  );
};

export default Welcome;
