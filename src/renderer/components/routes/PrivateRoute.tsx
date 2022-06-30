import React from 'react';
import { Navigate } from 'react-router-dom';
import { useAuthContext } from '../../providers/AuthProvider';

interface Props extends React.PropsWithChildren {
  redirect: string;
}
const PrivateRoute = ({ children, redirect = '/' }: Props) => {
  const { currentUser } = useAuthContext();
  return currentUser ? <>{children}</> : <Navigate to={redirect} />;
};
export default PrivateRoute;
