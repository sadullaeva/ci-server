export const minsToMs = mins => mins * 60 * 1000;

export const msToMins = ms => {
  let res = ms;
  try {
    res = res / (1000 * 60);
  } catch (e) {
    console.log('Error happened while trying to convert ms to mins', e);
  }
  return res;
};
