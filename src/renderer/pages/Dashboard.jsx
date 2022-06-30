import React from 'react';
import { useAuthContext } from 'renderer/providers/AuthProvider';

const Dashboard = () => {
  const { currentUser } = useAuthContext();
  return (
    <div>
      <h1>Dashboard {currentUser.displayName}</h1>
    </div>
  );
};

export default Dashboard;
