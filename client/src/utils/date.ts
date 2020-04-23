export type MinsToMsFn = (mins: number) => number;
export type MsToMinsFn = (ms: number) => number;

export const minsToMs: MinsToMsFn = mins => mins * 60 * 1000;

export const msToMins: MsToMinsFn = ms => {
  let res = ms;
  try {
    res = res / (1000 * 60);
  } catch (e) {
    console.log('Error happened while trying to convert ms to mins', e);
  }
  return res;
};
