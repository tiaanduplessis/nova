/**
 * Randomize items in array
 * @param {Array} arr Array to randomize
 */
export default function randomize(arr) {
  const newArr = [...arr]

  for (let i = newArr.length - 1; i > 0; i--) { // eslint-disable-line
    const rand = Math.floor(Math.random() * (i + 1));
    [newArr[i], newArr[rand]] = [newArr[rand], newArr[i]]
  }

  return newArr
}
