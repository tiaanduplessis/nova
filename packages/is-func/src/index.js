
/**
 * Check if one or more values are functions
 * @param {*...} values values to check
 *
 * @returns {Boolean}
 *
 * @example
 * import isFunc from 'nova-is-func'
 * isFunc(() => {}) // true
 * isFunc(false) // false
 */
export default function isFunc(...values) {
  return values.every(val => Object.prototype.toString.call(val) === '[object Function]')
}
