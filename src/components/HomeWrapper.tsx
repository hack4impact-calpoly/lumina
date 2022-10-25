import React from 'react';
import { Outlet, useOutletContext } from 'react-router-dom';
import { fakeUsers } from '../hooks/fake';
import { User } from '../types';

type Props = {};
const users: User[] = fakeUsers(50);
const user: User = users[Math.floor(Math.random() * users.length)];
const HomeWrapper = (props: Props) => {
  return <Outlet context={{ user: user, users: users }} />;
};

type ContextType = {
  user: User;
  users: User[];
};

export const useUser = () => {
  return useOutletContext<ContextType>()['user'];
};
export const useUsers = () => {
  return useOutletContext<ContextType>()['users'];
};

export default HomeWrapper;
