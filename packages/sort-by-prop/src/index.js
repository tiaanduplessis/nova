const defaultCompareFunc = key => (a, b) => {
  if (a[key] > b[key]) {
    return 1
  }

  return (b[key] > a[key]) ? -1 : 0
}

/**
 * Sort array by object property
 * @param {Array} arr Array of objects
 * @param {String} key Property to short by
 * @param {Function} compareFunc Camparison function
 */
export default function sortBy(arr = [], key, compareFunc = defaultCompareFunc) {
  return arr.sort(compareFunc(key))
}
