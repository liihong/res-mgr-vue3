export function arrGroupBy (array, fun) {
  const groups = {};
  array.forEach(function (o) {
    const group = fun(o);
    groups[group] = groups[group] || [];
    groups[group].push(o);
  });
  let newArr = [];
  Object.keys(groups).map(function (group, index) {
    newArr.push({
      key: index,
      title: group,
      children: groups[group],
    });
  });
  return newArr;
}

/**
 * 将数据格式化为树型结构数据
 * @param {*} list 
 */
export function formatTreeData (list = []) {
  const res = [];
	const map = list.reduce((res, v) => (res[v.id] = v, res), {});
	for (const item of list) {
		if (item.pid === '') {
			res.push(item);
			continue;
		}
		if (item.pid in map) {
			const parent = map[item.pid];
			parent.children = parent.children || [];
			parent.children.push(item);
		}
	}
	return res;
}

/**
 * 根据时间生成时间戳
 */
export function getUUId() {
  let uuid = ''; // 订单号
  for (var i = 0; i < 6; i++) // 6位随机数，用以加在时间戳后面。
  {
    uuid += Math.floor(Math.random() * 9);
  }
  uuid = new Date().getTime() + uuid; 
  return uuid;
}