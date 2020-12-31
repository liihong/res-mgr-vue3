import request from '@/utils/ajax';
const api = {
  //资源呈现时表头信息
  getTableColumns: '/resMgr/resTableColumn/getTableColumn',
  getDropDownListData: '/resMgr/resTableColumn/getDropDownListData',
  //对物理表进行操作的接口
  getTableConfig: '/resMgr/tableData/getTableConfig',
  queryTableData: '/resMgr/tableData/queryTableData',
  queryDataById: '/resMgr/tableData/queryTableDataById',
  addTableData: '/resMgr/tableData/add',
  editTableData: '/resMgr/tableData/edit',
  deleteTableData: '/resMgr/tableData/delete',
  exportExcel: '/resMgr/tableData/exportExcel',
};

// 获取资源配置
export async function getTableConfig (params) {
  return await request.get(api.getTableConfig, params);
}

export async function getTableDataList (params) {
  return await request.get(api.queryTableData, params);
}

export async function deleteTableData (params) {
  return await request.post(api.deleteTableData, params);
}

export async function getDataById(params) {
  return await request.get(api.queryDataById, params);
}
