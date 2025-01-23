import { camel, capitalize, snake, title } from 'radash';
import { ulid as ulidJs } from 'ulid';

/**
 * Converts a string to camel case format.
 * @param {string} [str] - The string to convert.
 * @returns {string} The camel case formatted string.
 */
export function toCamel(str?: string): string {
  if (!str) return '';
  return camel(str);
}

/**
 * Converts a string to snake case format.
 * @param {string} [str] - The string to convert.
 * @returns {string} The snake case formatted string.
 */
export function toSnake(str?: string): string {
  if (!str) return '';
  return snake(str);
}

/**
 * Converts a string to title case, capitalizing the first letter of each word.
 * @param {string} [str] - The string to convert.
 * @returns {string} The title case formatted string.
 */
export function toTitle(str?: string): string {
  if (!str) return '';
  return title(str);
}

/**
 * Converts the first character of a string to uppercase.
 * @param {string} [str] - The string to convert.
 * @returns {string} The string with the first character capitalized.
 */
export function toCapitalize(str?: string): string {
  if (!str) return '';
  return capitalize(str);
}

/**
 * Converts a string to lowercase.
 * @param {string} [str] - The string to convert.
 * @returns {string} The lowercase formatted string.
 */
export function toLower(str?: string): string | undefined {
  return str?.toLowerCase();
}

/**
 * Converts a string to uppercase.
 * @param {string} [str] - The string to convert.
 * @returns {string} The uppercase formatted string.
 */
export function toUpper(str?: string): string | undefined {
  return str?.toUpperCase();
}

/**
 * Capitalizes the first letter of a string.
 * @param {string} [str] - The string to convert.
 * @returns {string} The string with the first letter capitalized.
 */
export function capitalizeFirstLetter(str?: string): string {
  // 首字母大写
  if (!str) return '';
  return str.charAt(0).toUpperCase() + str.slice(1);
}

/**
 * Generates a random color code.
 * @returns {string} The random color code.
 */
export function randomColor(): string {
  return '#' + Math.floor(Math.random() * 16777215).toString(16);
}

/**
 * Generates a ULID (Universally Unique Lexicographically Sortable Identifier).
 * @returns {string} The generated ULID.
 */
export function ulid(): string {
  return ulidJs();
}
