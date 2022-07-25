/**
 * @function deepCopy
 * @description Deep copy an object or array (recursively) to a new object or array
 * @author: [JuanDAC](https://github.com/JuanDAC)
 * @param obj - object to be copied to new object with same properties and values but different reference
 * @returns {any} - new object with same properties and values but different reference
 */
export const deepCopy = (obj: any): any => {
  if (typeof obj === 'object' && Array.isArray(obj)) {
    return [...obj].map((item) => deepCopy(item));
  }

  if (typeof obj === 'object') {
    return Object.fromEntries(Object.entries({ ...obj }).map(([key, value]) => [deepCopy(key), deepCopy(value)]));
  }

  return obj;
};
