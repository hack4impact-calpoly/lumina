export const getTTL = (minutes: number) => {
  return new Date(new Date().getTime() + minutes * 60000);
};
