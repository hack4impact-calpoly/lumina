const datesAreOnSameDay = (first, second) =>
  new Date(first).getFullYear() === new Date(second).getFullYear() &&
  new Date(first).getMonth() === new Date(second).getMonth() &&
  new Date(first).getDate() === new Date(second).getDate();

export function isWeekend(date) {
  return date.getDay() === 6 || date.getDay() === 0 ? true : false;
}
export function getDaysInMonth(year, month) {
  return new Date(year, month, 0).getDate();
}
export default datesAreOnSameDay;
