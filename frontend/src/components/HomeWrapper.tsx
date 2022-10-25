import React from 'react';
import { Outlet, useOutletContext } from 'react-router-dom';
import { fakeUsers } from '../hooks/fake';
import { User } from '../types';

const users: User[] = fakeUsers(50);
const user: User = users[Math.floor(Math.random() * users.length)];
function HomeWrapper() {
  return <Outlet context={{ user, users }} />;
}

type ContextType = {
  user: User;
  users: User[];
};

export const useUser = () => useOutletContext<ContextType>().user;
export const useUsers = () => useOutletContext<ContextType>().users;

export default HomeWrapper;
