
/**
 * Check if
 * @param {any} val Value to check
 */
export default function isStr(...args) {
  return args.every(val => Object.prototype.toString.call(val) === '[object String]')
}
