/**
 * Iterates over elements returning an array of all elements predicate returns truthy
 *
 * @param {Function} func Predicate to filter by
 * @param {Array=} arg Array to filter
 *
 * @returns {Array}
 *
 * @example
 * const items = [1, 2, 3, 4]
 * const isMoreThanTwo = x => x > 2
 *
 * filter(isMoreThanTwo)(items) // [3, 4]
 * filter(isMoreThanTwo, items) // [3, 4]
 */
export default function filter(func, arg) {
  if (arg) {
    return Array.prototype.filter.call(arg, func)
  }

  return data => Array.prototype.filter.call(data, func)
}
