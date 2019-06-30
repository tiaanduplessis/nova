
/**
 * Check if nested key exists in a object
 * @param {Object} obj Object to check
 * @param {String} key Key to find
 */
export default function hasProp(obj, key) {
  return (key.split ? key.split('.') : [key]).reduce((level, current) => level[current], obj) !== undefined
}
