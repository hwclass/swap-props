/**
 * swaps data within specific object keys to each other
 * @param {Object} obj - The object to be updated
 * @param {Array} sourceProps - The first set of keys within the object (obj)
 * @param {Array} targetProps - The second set of keys within the object (obj)
 * @return {Object} updateObj - Updated object with swapped values
 */

//  swapProps = (obj, sourceProps, targetProps) => {
//   sourceProps.map((sourceKey, idx) => {
//     ;[obj[sourceKey], obj[targetProps[idx]]] = [
//       obj[targetProps[idx]],
//       obj[sourceKey]
//     ]
//   })
//   return obj
// }

// module.exports = {
//   swapProps
// }

/**
 * Iterates over an array, if false is returning whilst loops then it immediately returns;
 * @param array - Array to iterate over
 * @param func - Callback function which returns each item
 */
export function swapProps(obj, sourceProps, targetProps) {
  sourceProps.map((sourceKey, idx) => {
    ;[obj[sourceKey], obj[targetProps[idx]]] = [
      obj[targetProps[idx]],
      obj[sourceKey]
    ]
  })
  return obj
}
