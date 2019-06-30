/**
 * Check if value is error
 * @param {*} val Value to check
 *
 * @returns {Boolean}
 *
 * @example
 * isErr(new Error('example')) // true
 * isErr('example') // false
 */
export default function isErr(val) {
  return val && val instanceof Error && typeof val.message !== 'undefined'
}
