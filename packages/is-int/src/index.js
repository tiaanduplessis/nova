import isNum from '../../is-num/src'

/**
 * Check if one or more values are integers
 * @param {*} val Value to check
 *
 * @example
 * import isInt from 'nova-is-num'
 * isInt(1) // true
 * isInt(1, 2, 3) // true
 * isInt(1.1) // false
 */
export default function isInt(...values) {
  return values.every(val => isNum(val) && Number.isInteger(val))
}
