/**
 * 根据唯一值匹配列表返回索引
 * @param key 字段值
 * @param list 目标列表
 * @param checkKey 匹配的字段
 * @param flag key是否为对象
 * @returns {number}
 */
 export function getIndexWithKey(key:any, list:any[], checkKey:any, flag = false) {
    let index = -1;
    if (flag === true && key) {
      index = (list || []).indexOf(key);
    } else if (flag === false && key) {
      index = (list || []).findIndex((item:any )=> item[checkKey] == key);
    }
    return index;
  }