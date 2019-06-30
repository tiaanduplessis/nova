export default function once(func, context) {
  let result

  return function inner(...args) {
    if (func) {
      result = func.apply(context || this, args)
      func = null // eslint-disable-line
    }

    return result
  }
}
