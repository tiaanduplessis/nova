/**
 * Get a nested object property using dot notation
 * @param {Object} obj Object to get property from
 * @param {String} key Key to find
 * @param {Any} def Default value if key not find
 */
export default function getProp(obj, key, def) {
  return (key.split ? key.split('.') : [key]).reduce((Level, current) => Level[current], obj) || def
}
