import React from 'react';
import { Outlet, useOutletContext } from 'react-router-dom';
import { Event } from 'react-big-calendar';
import { fakeEvents, fakeUsers } from '../hooks/fake';
import { User, UserOption } from '../types';

const users: User[] = fakeUsers(50);
const user: User = users[Math.floor(Math.random() * users.length)];
const events: Event[] = fakeEvents(users);
function HomeWrapper() {
  return <Outlet context={{ user, users, events }} />;
}

type ContextType = {
  user: User;
  users: User[];
  events: Event[];
};

// binary search event list
function searchEvents(eventList: Event[], event: Event): number {
  let high = eventList.length;
  let low = 0;
  let mid = Math.floor((high + low) / 2);
  let midEventStart = eventList[mid].start!;
  if (midEventStart && event.start) {
    while (high > low) {
      mid = Math.floor((high + low) / 2);
      midEventStart = eventList[mid].start!;
      if (midEventStart.getTime() === event.start.getTime()) {
        return mid;
      }
      if (midEventStart.getTime() > event.start.getTime()) {
        high = mid;
      } else {
        low = mid;
      }
    }
    mid = Math.floor((high + low) / 2);
    if (midEventStart.getTime() === event.start.getTime()) {
      return mid;
    }
  }
  return -1;
}

export const useUser = () => useOutletContext<ContextType>().user;
export const useUsers = () => useOutletContext<ContextType>().users;
export const useEvents = () => useOutletContext<ContextType>().events;
export const reassign = (
  event: Event,
  role: string,
  userToAssign: UserOption
) => {
  const eventIndex = searchEvents(events, event);
  if (eventIndex !== -1) {
    events[eventIndex].resource[role] = userToAssign;
  }
};

export default HomeWrapper;
