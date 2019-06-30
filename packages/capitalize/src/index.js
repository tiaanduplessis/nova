/**
 * Capitalize each word in a string
 * @param {String} val String to capitalize
 *
 * @returns {String}
 *
 * @example
 * capitalize('foo') // 'Foo'
 * capitalize('BAR BAZ') // 'Bar Baz'
 */
export default function capitalize(val = '') {
  return val.toLowerCase().replace(/(^|\s)\S/g, letter => letter.toUpperCase())
}
