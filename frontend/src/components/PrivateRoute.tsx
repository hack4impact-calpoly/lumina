import React from 'react';
import { Navigate } from 'react-router-dom';

type Props = {
  element: JSX.Element;
  fallback: string;
};

function PrivateRoute({ element, fallback }: Props) {
  const loggedIn = true;
  return loggedIn ? element : <Navigate to={fallback} />;
}

export default PrivateRoute;
