/**
 * Uses a regular expression to determine if a string consists entirely of digits.
 * @param {string} str - The string to be checked.
 * @returns {boolean} - Returns true if the string contains only digits, otherwise returns false.
 */
export function isNumericString(str:string) {
    if (typeof str !== 'string') {
        return false;
    }
    return /^\d+$/.test(str);
}