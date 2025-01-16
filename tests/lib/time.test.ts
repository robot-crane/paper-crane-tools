import { dateFormat } from "../../src/lib/time.utils"
const currentTime = new Date().getTime();

test('adds 1 + 2 to equal 3', () => {
  expect(dateFormat(currentTime)).toBe(3);
});