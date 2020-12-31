export default  [
  {
    title: '操作',
    dataIndex: 'column_id',
    width: 70,
    slots: { customRender: 'column_id' },
  },
  {
    title: '字段属性',
    width: 80,
    dataIndex: 'attribute_type',
    slots: { customRender: 'attribute_type' },
  },
  {
    title: '字段名称',
    width: 150,
    dataIndex: 'column_name',
    slots: { customRender: 'column_name' },
  },
  {
    title: '字段中文名称',
    width: 200,
    dataIndex: 'column_cname',
    slots: { customRender: 'column_cname' },
  },
  {
    title: '字段类型',
    width: 80,
    dataIndex: 'data_type',
    slots: { customRender: 'data_type' },
  },
  {
    title: '输入框类型',
    width: 120,
    dataIndex: 'property_type',
    slots: { customRender: 'property_type' },
  },
  {
    title: '必填',
    width: 50,
    dataIndex: 'is_must',
    slots: { customRender: 'is_must' },
  },
  {
    title: '列表',
    width: 50,
    dataIndex: 'is_list',
    slots: { customRender: 'is_list' },
  },
  {
    title: '插入',width: 50,
    dataIndex: 'is_insert',
    slots: { customRender: 'is_insert' },
  },
  {
    title: '修改',width: 50,
    dataIndex: 'is_update',
    slots: { customRender: 'is_update' },
  },
  {
    title: '排序',width: 50,
    dataIndex: 'is_sort',
    slots: { customRender: 'is_sort' },
  },
  {
    title: '导出',width: 50,
    dataIndex: 'is_export',
    slots: { customRender: 'is_export' },
  },
  {
    title: '导入',width: 50,
    dataIndex: 'is_import',
    slots: { customRender: 'is_import' },
  },
];