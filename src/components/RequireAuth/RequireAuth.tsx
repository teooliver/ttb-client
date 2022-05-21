import React from 'react';
// import { Navigate, useLocation } from 'react-router-dom';
import { useAuth } from '../../context/AuthContext/AuthContext';

interface RequireAuthProps {
  children: React.ReactElement;
}

export const RequireAuth = ({ children }: RequireAuthProps) => {
  // const location = useLocation();
  const auth = useAuth();

  if (!auth.user) {
    // return <Navigate to='/login' state={{ from: location }} replace />;
  }

  return children;
};
