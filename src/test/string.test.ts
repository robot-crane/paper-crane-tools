import { capitalizeFirstLetter, randomColor, toCamel, toCapitalize, toLower, toSnake, toTitle, toUpper, ulid } from '../index';

it('toCamel: to camel', () => {
  expect(toCamel('to camel')).toBe('toCamel');
  expect(toCamel('to_camel')).toBe('toCamel');
  expect(toCamel('To Camel')).toBe('toCamel');
  expect(toCamel('To_Camel')).toBe('toCamel');
  expect(toCamel('To_Camel_Test')).toBe('toCamelTest');
  expect(toCamel('to camel test')).toBe('toCamelTest');
});

it('toSnake: to snake', () => {
  expect(toSnake('toSnake')).toBe('to_snake');
  expect(toSnake('to_snake')).toBe('to_snake');
  expect(toSnake('To snake')).toBe('to_snake');
  expect(toSnake('to_snake')).toBe('to_snake');
  expect(toSnake('to_snake_Test')).toBe('to_snake_test');
  expect(toSnake('to snake test')).toBe('to_snake_test');
});

it('toTitle: to title', () => {
  expect(toTitle('toTitle')).toBe('To Title');
  expect(toTitle('to_Title')).toBe('To Title');
  expect(toTitle('to title')).toBe('To Title');
  expect(toTitle('To Title')).toBe('To Title');
});

it('toCapitalize: to title', () => {
  expect(toCapitalize('toTitle')).toBe('Totitle');
  expect(toCapitalize('to title')).toBe('To title');
  expect(toCapitalize('to_Title')).toBe('To_title');
});

it('toLower: to lower', () => {
  expect(toLower('toLower')).toBe('tolower');
  expect(toLower('to_Lower')).toBe('to_lower');
  expect(toLower('To_Lower')).toBe('to_lower');
  expect(toLower('TOLOWER')).toBe('tolower');
});

it('toUpper: to upper', () => {
  expect(toUpper('toUpper')).toBe('TOUPPER');
  expect(toUpper('to_upper')).toBe('TO_UPPER');
  expect(toUpper('To_Upper')).toBe('TO_UPPER');
  expect(toUpper('TOUPPER')).toBe('TOUPPER');
});

it('capitalizeFirstLetter: capitalize first letter', () => {
  expect(capitalizeFirstLetter('capitalize first letter')).toBe('Capitalize first letter');
  expect(capitalizeFirstLetter('capitalizeFirstLetter')).toBe('CapitalizeFirstLetter');
  expect(capitalizeFirstLetter('capitalize_First_letter')).toBe('Capitalize_First_letter');
});


it('randomColor: returns valid hex color format', () => {
  const result = randomColor();
  expect(result).toMatch(/^#[0-9a-f]{6}$/);
});

it('ulid: returns valid ULID format', () => {
  const result = ulid();
  expect(result).toHaveLength(26);
  expect(result).toMatch(/^[0-9A-HJKMNP-TV-Z]{26}$/);
});

