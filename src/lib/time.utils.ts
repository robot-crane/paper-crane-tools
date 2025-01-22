import {
  DateArg,
  format as dateFnsFormat,
  getTime as dateFnsGetTime,
  getUnixTime as dateFnsGetUnixTime,
} from 'date-fns';

/**
 * Formats a date into a specified string format.
 * @param {DateArg<Date>} time - The date to format.
 * @param {string} [format='yyyy-MM-dd HH:mm:ss'] - The format string.
 * @returns {string} The formatted date string.
 */
export function dateFormat(time?: DateArg<Date>, format?: string): string {
  if (!time) return '';
  return dateFnsFormat(time, format || 'yyyy-MM-dd HH:mm:ss');
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
