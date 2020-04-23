import { minsToMs, msToMins } from './date';

describe('date util', () => {
  it('minsToMs converts correctly', () => {
    const mins = 5;

    const ms = minsToMs(mins);

    expect(ms).toBe(300000);
  });

  it('msToMins converts correctly', () => {
    const ms = 600000;

    const mins = msToMins(ms);

    expect(mins).toBe(10);
  });
});
