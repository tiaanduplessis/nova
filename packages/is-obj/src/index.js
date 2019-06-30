/**
 * Check if value is object
 * @param {*} val Value to check
 */
export default function isObj(val) {
  return val && typeof val === 'object' && val.constructor === Object
}
