import { dateFormat } from '../index';

test('dateFormat: currentTime', () => {
  const currentTime = new Date('2025-01-22 10:00:00').getTime();
  const currentTime1 = new Date('2025-01-22').getTime();
  expect(dateFormat(currentTime)).toBe('2025-01-22 10:00:00');
  expect(dateFormat(currentTime1)).toBe('2025-01-22 08:00:00');
  expect(dateFormat(currentTime, 'yyyy-MM-dd')).toBe('2025-01-22');
});
