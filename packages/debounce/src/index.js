

/**
 * Debounce function invocations
 * @param {Function} func Function to debounce
 * @param {Integer=} wait Wait period
 * @param {Boolean=} immediate Whether function should be invoked immediately
 *
 * @example
 * function log() { console.log('hi') }
 * const debouncedLog = debounce(log)
 * debouncedLog()
 * debouncedLog()
 * debouncedLog() // Hi
 */
export default function debounce(func, wait = 250, immediate = false) {
  let timeout
  return function inner(...args) {
    const later = () => {
      timeout = null
      !immediate && func.apply(this, args) // eslint-disable-line
    }
    const shouldCall = immediate && !timeout
    clearTimeout(timeout)
    timeout = setTimeout(later, wait)
    shouldCall && func.apply(this, args) // eslint-disable-line
  }
}
