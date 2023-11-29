/*
  该函数是实现缓存分页读取的 helper 函数
  items：待分页数据
  cursor：读取分页数据时提供的 after 参数
  readField：apollo client提供的 helper 函数
*/
export function startIndexFromArray(items, cursor, readField) {
  if (!cursor) return 0;
  for (let i = items.length - 1; i >= 0; --i) {
    // console.log("判断cache：", i);
    const item = items[i];
    // console.log("items[i]:", items[i]);
    // console.log("readField: ", readField("cursor", item));
    if (readField("cursor", item) === cursor) {
      return i + 1;
    }
  }
  return -1;
}
