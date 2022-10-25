import { DateTime } from 'luxon';

export const formatDate = (
  date: Date,
  format: Intl.DateTimeFormatOptions = DateTime.DATE_FULL
) => DateTime.fromJSDate(date).toLocaleString(format);

export const emptyHook = () => 'hello';
