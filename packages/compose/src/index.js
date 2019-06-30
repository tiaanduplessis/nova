
/**
 * Compose functions
 * @param {...*} funcs Functions to compose
 *
 * @returns {*}
 *
 * @example
 * const addOne = x => x + 1
 * const addThree = compose(addOne, addOne, addOne)
 *
 * addThree(3) // 6
 */
export default function compose(...funcs) {
  return data => funcs.reduceRight((value, func) => func(value), data)
}
