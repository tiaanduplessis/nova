/**
 * Check if value is boolean
 * @param {*} val Value to check
 *
 * @returns {Boolean}
 *
 * @example
 * isBool(true) // true
 * isBool(false) // true
 * isBool(1) // false
 */
export default function isBool(val) {
  return val !== undefined && (typeof val === 'boolean' || val instanceof Boolean)
}
