/**
 * Flattens array
 * @param {Array} arr Array to flatten
 * @param {Boolean} deeply Flatten deeply
 *
 * @returns {Array}
 *
 * @example
 * flatten([1, [2, 3]]) // [1, 2, 3]
 */
export default function flatten(arr = [], deeply = true) {
  return arr.reduce((acc, current) => (deeply && Array.isArray(current) ? acc.concat(flatten(current, deeply)) : acc.concat(current)), []) // eslint-disable-line
}
