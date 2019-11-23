/**
 * We will move this to a mixin class if reusability counts.
 * If we find it somehow repititive if it is being used in
 * the admin panel.
 * This just makes transformation look easy,
 *
 * **Transforms the Response `data` into your desire value**
 *
 * > Example usage
 *
 * ```ts
 *  const myData = []:Array<Number>;
 *  const myTable = makeTable(data:Array<T>,(item) => ({...item,5}));
 * ```
 * @param data - Value from the axios response
 * @param  cb - Callback function that transforms your desire array output
 */
const makeTable = function<T>(data: T[], cb: (val: T[]) => T[]) {
  return cb(data)
}

export default {
  makeTable
}
