import React from 'react';
import { Navigate } from 'react-router-dom';

type Props = {
  element: JSX.Element;
  fallback: string;
};

const PrivateRoute = ({ element, fallback }: Props) => {
  const loggedIn = localStorage.getItem('user');
  return loggedIn ? element : <Navigate to={fallback} />;
};

export default PrivateRoute;
