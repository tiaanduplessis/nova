export default function isRegex(val) {
  return val && typeof val === 'object' && val.constructor === RegExp
}
