const datesAreOnSameDay = (first, second) =>
  new Date(first).getFullYear() === new Date(second).getFullYear() &&
  new Date(first).getMonth() === new Date(second).getMonth() &&
  new Date(first).getDate() === new Date(second).getDate();

export function isWeekend(date) {
  return date.getDay() === 6 || date.getDay() === 0 ? true : false;
}

export default datesAreOnSameDay;
