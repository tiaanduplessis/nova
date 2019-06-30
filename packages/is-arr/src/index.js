/**
 * Check if value is a array
 * @param {*} val Value to check
 *
 * @returns {Boolean}
 *
 * @example
 * isArr([]) // true
 * isArr(1) // false
 */
export default function isArr(val) {
  const is = Array.isArray || (arg => Object.prototype.toString.call(arg) === '[object Array]')
  return val && is(val)
}
