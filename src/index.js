/**
 * Swaps props data within specific object keys to each other
 * @param object obj - The object to be updated
 * @param array sourceProps - The first set of keys within the object (obj)
 * @param array targetProps - The second set of keys within the object (obj)
 * @return object updateObj - Updated object with swapped values
 */
export default function (obj, sourceProps, targetProps) {
  const objToBeUpdated = obj;
  sourceProps.map((sourceKey, idx) => {
    [objToBeUpdated[sourceKey], objToBeUpdated[targetProps[idx]]] = [
      objToBeUpdated[targetProps[idx]],
      objToBeUpdated[sourceKey],
    ];
  });
  return objToBeUpdated;
}
