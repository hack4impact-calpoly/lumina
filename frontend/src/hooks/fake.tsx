import { faker } from '@faker-js/faker';
import { Event } from 'react-big-calendar';
import { Message, MessageType, User } from '../types';

function createRandomUser(): User {
  return {
    email: faker.internet.email(),
    firstName: faker.name.firstName(),
    lastName: faker.name.firstName(),
    phoneNumber: faker.phone.number('(###) ###-###'),
    admin: Math.floor(Math.random() * 10) === 0,
  };
}

export function fakeUsers(num: number): User[] {
  const USERS: User[] = [];
  Array.from({ length: num }).forEach(() => {
    USERS.push(createRandomUser());
  });
  return USERS;
}

const messageTypes = [
  MessageType.Approve,
  MessageType.ShiftChange,
  MessageType.ShiftCancel,
  MessageType.ShiftSignUp,
];
const APPROVE_MESSAGE = (user: User) =>
  `A new volunteer ${user.firstName} ${user.lastName} (${user.email}) needs approval`;
const SHIFT_CHANGE_MESSAGE = (user: User) =>
  `Volunteer ${user.firstName} ${user.lastName} (${user.email}) has changed their shift from {shift change info here}`;
const SHIFT_CANCEL_MESSAGE = (user: User) =>
  `Volunteer ${user.firstName} ${user.lastName} (${user.email}) has cancelled their shift on {date}`;
const SHIFT_SIGN_UP_MESSAGE = (user: User) =>
  `Volunteer ${user.firstName} ${user.lastName} (${user.email}) has signed up for shift {shift info}`;

function getMessageBody(type: MessageType, user: User) {
  switch (type) {
    case MessageType.Approve:
      return APPROVE_MESSAGE(user);
    case MessageType.ShiftChange:
      return SHIFT_CHANGE_MESSAGE(user);
    case MessageType.ShiftCancel:
      return SHIFT_CANCEL_MESSAGE(user);
    case MessageType.ShiftSignUp:
      return SHIFT_SIGN_UP_MESSAGE(user);
    default:
      return 'err';
  }
}

function createRandomEmail(): Message {
  const date = faker.date.between('2020-01-01T00:00:00.000Z', new Date());
  const messageType =
    messageTypes[Math.floor(Math.random() * messageTypes.length)];
  const user = fakeUsers(1)[0];
  return {
    sender: 'Automated Message',
    body: getMessageBody(messageType, user),
    type: messageType,
    timestamp: {
      seconds: Math.round(date.getTime() / 1000),
      nanoseconds: Math.round(date.getTime() / 1000000),
    },
  };
}

export function fakeMessages(num: number): Message[] {
  const MESSAGES: Message[] = [];
  Array.from({ length: num }).forEach(() => {
    MESSAGES.push(createRandomEmail());
  });
  return MESSAGES;
}

function getAllDaysInMonth(month: number, year: number) {
  const date = new Date(year, month, 1);
  const days = [];
  while (date.getMonth() === month) {
    days.push(new Date(date));
    date.setDate(date.getDate() + 1);
  }
  return days;
}

export function getEventTime(day: Date, start: boolean): Date {
  if (start) {
    const startDate = day;
    startDate.setHours(0, 0, 0);
    return startDate;
  }
  const endDate = day;
  endDate.setHours()
}

export function fakeEvents(): Event[] {
  const days = getAllDaysInMonth(
    new Date().getFullYear(),
    new Date().getMonth()
  );
  const events: Event[] = [];
  days.forEach((day) => {
    const event = {
      title: faker.system.fileName(),
      start: new Date(2015, 3, 7),
      end: new Date(2015, 3, 10),
    };
    events.push(event);
  });
  return events;
}
