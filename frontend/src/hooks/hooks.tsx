import { DateTime } from 'luxon';
import { User, UserOption } from '../types';

export const formatDate = (
  date: Date,
  format: Intl.DateTimeFormatOptions = DateTime.DATE_FULL
) => DateTime.fromJSDate(date).toLocaleString(format);

export const turnUsersIntoSelectOptions = (users: User[]) => {
  const options: UserOption[] = [];
  users.forEach((user) => {
    options.push({
      value: `${user.firstName}${user.lastName}`,
      label: `${user.firstName} ${user.lastName}`,
    });
  });
  return options;
};

export const randomRange = (start: number, end: number) =>
  Math.floor(Math.random() * end) + start;
