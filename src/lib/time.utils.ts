import {
  DateArg,
  format as dateFnsFormat,
  getTime as dateFnsGetTime,
  getUnixTime as dateFnsGetUnixTime,
} from 'date-fns';

export function dateFormat(time?: number, format?: string) {
  if (!time) return '';
  return dateFnsFormat(time, format || 'yyyy-MM-dd HH:mm:ss');
}

export function getTimeStamp(date?: DateArg<Date> & {}) {
  if (!date) return 0;
  return dateFnsGetTime(date);
}

export function getUnixTimeStamp(date?: DateArg<Date> & {}) {
  if (!date) return 0;
  return dateFnsGetUnixTime(date);
}
