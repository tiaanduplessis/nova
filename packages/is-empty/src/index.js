import isStr from '../../is-str/src'
import isArr from '../../is-arr/src'
import isObj from '../../is-obj/src'

/**
 * Check if string, object or array empty
 * @param {*} val Value to check
 */
export default function isEmpty(val = '') {
  return (isStr(val) && val === '') || (isArr(val) && val.length === 0) || (isObj(val) && Object.keys(val).length === 0)
}
