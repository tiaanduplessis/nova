/**
 * Get a random integer in range
 * @param {Integer} min Minimum value
 * @param {Integer} max Maximum value
 */
export default function random(min, max) {
  return min + Math.floor(Math.random() * (max - min + 1))
}
