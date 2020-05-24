import parseMs from 'parse-ms';
import { TFunction } from 'i18next';

export const getLocalizedDuration = (durationMs: number, t: TFunction) => {
  const parsedMs = parseMs(durationMs);
  const hours = parsedMs.hours ? t('duration.hours', { count: parsedMs.hours }) : '';
  const minutes = parsedMs.minutes ? t('duration.minutes', { count: parsedMs.minutes }) : '';
  const seconds = parsedMs.seconds ? t('duration.seconds', { count: parsedMs.seconds }) : '';

  const durationObj = [hours, minutes, seconds].reduce(
    (acc, item) => {
      if (acc.itemsNumber === 2) return acc;
      if (!item) return acc;

      acc.durationStr = `${acc.durationStr} ${item}`;
      acc.itemsNumber = acc.itemsNumber + 1;
      return acc;
    },
    {
      durationStr: '',
      itemsNumber: 0,
    }
  );

  return durationObj.durationStr.trim();
};
