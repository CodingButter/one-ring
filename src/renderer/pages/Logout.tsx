import React, { useEffect } from 'react';
import { Navigate } from 'react-router-dom';
import { useAuthContext } from 'renderer/providers/AuthProvider';

interface Props extends React.Props<any> {
  setPending: (pending: boolean) => void;
  pending: boolean;
}
const Logout = ({ setPending, pending }: Props) => {
  const { currentUser, signOut } = useAuthContext();

  useEffect(() => {
    setPending(false);
    signOut();
  }, []);
  return !currentUser ? <Navigate to="/" /> : null;
};

export default Logout;
