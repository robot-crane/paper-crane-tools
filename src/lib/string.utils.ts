import { camel, capitalize, snake, title } from 'radash';
import { ulid as ulidJs } from 'ulid';

/**
 * 将字符串转换为驼峰命名格式。
 * @param {string} [str] - 待转换的字符串。
 * @returns {string} 转换后的驼峰命名字符串。
 */
export function toCamel(str?: string): string {
  if (!str) return '';
  return camel(str);
}

/**
 * 将字符串转换为蛇形命名格式。
 * @param {string} [str] - 待转换的字符串。
 * @returns {string} 转换后的蛇形命名字符串。
 */
export function toSnake(str?: string): string {
  if (!str) return '';
  return snake(str);
}

/**
 * 将字符串转换为标题格式，每个单词的首字母大写。
 * @param {string} [str] - 待转换的字符串。
 * @returns {string} 转换后的标题格式字符串。
 */
export function toTitle(str?: string): string {
  if (!str) return '';
  return title(str);
}

/**
 * 将字符串的第一个字符转换为大写。
 * @param {string} [str] - 待转换的字符串。
 * @returns {string} 转换后的字符串。
 */
export function toCapitalize(str?: string): string {
  if (!str) return '';
  return capitalize(str);
}

/**
 * 将字符串转换为小写。
 * @param {string} [str] - 待转换的字符串。
 * @returns {string} 转换后的小写字符串。
 */
export function toLower(str?: string): string | undefined {
  return str?.toLowerCase();
}

/**
 * 将字符串转换为大写。
 * @param {string} [str] - 待转换的字符串。
 * @returns {string} 转换后的大写字符串。
 */
export function toUpper(str?: string): string | undefined {
  return str?.toUpperCase();
}

/**
 * 将字符串的首字母转换为大写。
 * @param {string} [str] - 待转换的字符串。
 * @returns {string} 首字母大写的字符串。
 */
export function capitalizeFirstLetter(str?: string): string {
  // 首字母大写
  if (!str) return '';
  return str.charAt(0).toUpperCase() + str.slice(1);
}

/**
 * 生成一个随机颜色代码。
 * @returns {string} 随机颜色代码。
 */
export function randomColor(): string {
  return '#' + Math.floor(Math.random() * 16777215).toString(16);
}

/**
 * 生成一个 ULID (Universally Unique Lexicographically Sortable Identifier)。
 * @returns {string} 生成的 ULID。
 */
export function ulid(): string {
  return ulidJs();
}
