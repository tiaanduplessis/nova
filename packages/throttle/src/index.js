
/**
 * Throttle a function's invocation
 * @param {Function} func Function to throttle
 * @param {Integer} wait Wait in miliseconds
 *
 * import throttle from 'nova-throttle'
 *
 * const sayHi = () => console.log('Hi')
 *
 * const throttledHi = throttle(sayHi, 1000)
 *
 * throttledHi() // 'Hi'
 * throttledHi()
 * throttledHi()
 */
export default function throttle(func, delay = 250) {
  if (typeof func !== 'function') {
    throw new Error('function must be provided for trottle')
  }

  let shouldWait = false

  return (...args) => {
    if (!shouldWait) {
      func(...args)
      shouldWait = true
      setTimeout(() => {
        shouldWait = false
      }, delay)
    }
  }
}
