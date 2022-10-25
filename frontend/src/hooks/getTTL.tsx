const getTTL = (minutes: number) =>
  new Date(new Date().getTime() + minutes * 60000);

export default getTTL;
