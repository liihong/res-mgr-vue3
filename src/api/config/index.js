import request from '@/utils/ajax';
const api = {
  getResTree: '/resTree/getResTreeList',
  getResTreeChildren: '/resTree/getResTreeChildren',

  getResColumnData: '/resTableColumn/getResColumnData',

  //资源呈现时表头信息
  getTableColumns: '/resTableColumn/getTableColumn',
  getDropDownListData: '/resTableColumn/getDropDownListData',
 
  getTableRes: '/resTable',
  addTableRes: '/resTable/addTableRes',
  editTableRes: '/resTable/editTableRes',
  deleteTableRes: '/resTable/deleteTableRes',
  
  //根据配置创建物理表
  createTable: '/resTable/createTable',
  loadTable: '/resTable/loadTable',
};

// 获取资源树配置
export async function  getResTree  (){
  return await request.get(api.getResTree);
}