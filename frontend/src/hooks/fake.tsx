import { faker } from '@faker-js/faker';
import { Event } from 'react-big-calendar';
import { Message, MessageType, User, UserOption } from '../types';
import { randomRange } from './hooks';

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

function getAllDaysInMonth(year: number, month: number) {
  const date = new Date(year, month, 1);
  const days = [];
  while (date.getMonth() === month) {
    days.push(new Date(date));
    date.setDate(date.getDate() + 1);
  }
  return days;
}

function getEventTime(day: Date, hour: number, minute: number): Date {
  const newDay = new Date(day);
  newDay.setHours(hour, minute, 0);
  return newDay;
}

function getPrimaryUsers(users: User[], n: number): UserOption[] {
  const primaryUsers: UserOption[] = [];
  for (let i = 0; i < n; i++) {
    const user = users[randomRange(0, users.length)];
    primaryUsers.push({
      value: `${user.firstName}${user.lastName}`,
      label: `${user.firstName} ${user.lastName}`,
    });
  }
  return primaryUsers;
}

export function fakeEvents(users: User[]): Event[] {
  const days = getAllDaysInMonth(
    new Date().getFullYear(),
    new Date().getMonth()
  );
  let events: Event[] = [];
  days.forEach((day) => {
    let dayEvents: Event[] = [];
    const primaryUsers = getPrimaryUsers(users, 3);

    if (day.getDay() === 6 || day.getDay() === 0) {
      dayEvents = [
        {
          title: 'Morning',
          start: getEventTime(day, 0, 0),
          end: getEventTime(day, 8, 0),
          resource: {
            primary: primaryUsers[0],
          },
        },
        {
          title: 'Afternoon',
          start: getEventTime(day, 8, 0),
          end: getEventTime(day, 16, 0),
          resource: {
            primary: primaryUsers[1],
          },
        },
        {
          title: 'Night',
          start: getEventTime(day, 16, 0),
          end: getEventTime(day, 23, 59),
          resource: {
            primary: primaryUsers[2],
          },
        },
      ];
    } else {
      dayEvents = [
        {
          title: 'Morning',
          start: getEventTime(day, 0, 0),
          end: getEventTime(day, 8, 30),
          resource: {
            primary: primaryUsers[0],
          },
        },
        {
          title: 'Night',
          start: getEventTime(day, 17, 0),
          end: getEventTime(day, 23, 59),
          resource: {
            primary: primaryUsers[1],
          },
        },
      ];
    }
    events = events.concat(dayEvents);
  });
  return events;
}
