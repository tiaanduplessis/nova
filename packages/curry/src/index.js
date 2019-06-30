/**
 * Curry a function
 * @param {Function} func Function to curry
 * @param {...*=} args Arguments to function
 *
 * @returns {*}
 *
 * @example
 * const add = (x, y) => x + y
 * const addTwo = curry(add, 2)
 * addTwo(4) // 6
 */
export default function curry(func, ...args) {
  return args.length === func.length ? func(...args) : curry.bind(this, func, ...args)
}
