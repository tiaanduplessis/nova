/**
 * JS version of Python range function.
 * Based on https://stackoverflow.com/a/8273091/7027045
 * @param {Number} start Start of range
 * @param {Number} end End of range
 * @param {Number} step Range step size
 */
export default function range(start, end, step = 1) {
  if (end === undefined) {
    end = start // eslint-disable-line
    start = 0 // eslint-disable-line
  }

  const isInvalidRange = (step > 0 && start >= end) || (step < 0 && start <= end)

  if (isInvalidRange) {
    return []
  }

  const result = []

  for (let i = start; step > 0 ? i < end : i > end; i += step) {
    result.push(i)
  }

  return result
}
