/**
 * Check if one or more values are numbers
 * @param {*...} values One or more values to check
 */
export default function isNum(...values) {
  return values.every(val =>  Object.prototype.toString.call(val) === '[object Number]' && isFinite(val) ) // eslint-disable-line
}
