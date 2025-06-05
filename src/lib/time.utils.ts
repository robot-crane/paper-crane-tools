import {
  DateArg,
  format as dateFnsFormat,
  getTime as dateFnsGetTime,
  getUnixTime as dateFnsGetUnixTime,
} from 'date-fns';
import { isNumericString } from './utils';

type FormatDateInput = string | number | Date;

/**
 * Formats a date into a specified string format.
 * @param {FormatDateInput} time - The date to format.
 * @param {string} [format='yyyy-MM-dd HH:mm:ss'] - The format string.
 * @returns {string} The formatted date string.
 */
export function dateFormat(time?: FormatDateInput, format?: string): string {
  if (!time) return '';
  let _time: FormatDateInput = time;
  if (typeof time === 'number') {
    _time = new Date(time);
  }
  if (typeof time === 'string') {
    if (isNumericString(time)) {
      _time = new Date(Number(time));
    } else {
      _time = new Date(time);
    }
  }
  return dateFnsFormat(_time, format || 'yyyy-MM-dd HH:mm:ss');
}

/**
 * Gets the timestamp of a given date.
 * @param {DateArg<Date>} date - The date to get the timestamp from.
 * @returns {number} The timestamp in milliseconds.
 */
export function getTimeStamp(date?: DateArg<Date>): number {
  if (!date) return 0;
  return dateFnsGetTime(date);
}

/**
 * Gets the Unix timestamp of a given date.
 * @param {DateArg<Date>} date - The date to get the Unix timestamp from.
 * @returns {number} The Unix timestamp in seconds.
 */
export function getUnixTimeStamp(date?: DateArg<Date>): number {
  if (!date) return 0;
  return dateFnsGetUnixTime(date);
}

/**
 * Gets the current timestamp.
 * @returns {number} The current timestamp in milliseconds.
 */
export function getCurrentTimeStamp(): number {
  return dateFnsGetTime(new Date());
}

/**
 * Gets the current Unix timestamp.
 * @returns {number} The current Unix timestamp in seconds.
 */
export function getCurrentUnixTimeStamp(): number {
  return dateFnsGetUnixTime(new Date());
}
