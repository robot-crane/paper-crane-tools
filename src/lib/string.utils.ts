import { camel, capitalize, snake, title } from 'radash';
import { ulid as ulidJs } from 'ulid';

export function toCamel(str?: string) {
  if (!str) return '';
  return camel(str);
}

export function toSnake(str?: string) {
  if (!str) return '';
  return snake(str);
}

export function toTitle(str?: string) {
  // toTitle('hello world') // => 'Hello World'
  // toTitle('va_va_boom') // => 'Va Va Boom'
  // toTitle('root-hook') // => 'Root Hook'
  // toTitle('queryItems') // => 'Query Items'
  if (!str) return '';
  return title(str);
}

export function toCapitalize(str?: string) {
  if (!str) return '';
  return capitalize(str);
}

export function toLower(str?: string) {
  return str?.toLowerCase();
}

export function toUpper(str?: string) {
  return str?.toUpperCase();
}

export function capitalizeFirstLetter(str?: string) {
  // 首字母大写
  if (!str) return '';
  return str.charAt(0).toUpperCase() + str.slice(1);
}

export function randomColor() {
  return '#' + Math.floor(Math.random() * 16777215).toString(16);
}

export function ulid() {
  return ulidJs();
}
