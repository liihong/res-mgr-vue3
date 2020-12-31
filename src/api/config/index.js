import request from '@/utils/ajax';
const api = {
  getResTree: '/resTree/getResTreeList',
  getResTreeChildren: '/resTree/getResTreeChildren',

  getResColumnData: '/resMgr/resTableColumn/getResColumnData',

  //资源呈现时表头信息
  getTableColumns: '/resMgr/resTableColumn/getTableColumn',
  getDropDownListData: '/resMgr/resTableColumn/getDropDownListData',
 
  // 资源属性的操作
  addTableResColumns: '/resMgr/resTableColumn/addTableResColumns',
  editTableResColumns: '/resMgr/resTableColumn/editTableResColumns',
  
  getTableRes: '/resMgr/resTable',
  addTableRes: '/resMgr/resTable/addTableRes',
  editTableRes: '/resMgr/resTable/editTableRes',
  deleteTableRes: '/resMgr/resTable/deleteTableRes',
  
  //根据配置创建物理表
  createTable: '/resMgr/resTable/createTable',
  loadTable: '/resMgr/resTable/loadTable',
};

// 获取资源树配置
export async function  getResTree(){
  return await request.get(api.getResTree);
}

// 根据table_id获取对应配置
export async function  getResAttrConfig(tableId){
  return await request.get(api.getResColumnData,{tableId});
}
// 保存修改的配置
export async function saveResConfig(params){
  return await request.post(api.addTableResColumns, params);
}

// 创建表
export async function createTable(params){
  return await request.post(api.createTable, params);
}

// 加载表配置
export async function loadTable(params){
  return await request.post(api.loadTable, params);
}