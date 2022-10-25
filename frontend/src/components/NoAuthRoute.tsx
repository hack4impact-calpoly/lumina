import React from 'react';
import { Navigate } from 'react-router-dom';

type Props = {
  element: JSX.Element;
  fallback: string;
};

function NoAuthRoute({ element, fallback }: Props) {
  const loggedIn = localStorage.getItem('user');
  return loggedIn ? <Navigate to={fallback} /> : element;
}

export default NoAuthRoute;
