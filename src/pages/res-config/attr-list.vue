<template>
  <div class="config">
    <div class="config-toolbar">
      <a-button type="primary"
                @click="addAttrData">
        新增
      </a-button>
      <a-button type="danger"
                @click="deleteMany">
        批量删除
      </a-button>
      <a-button type="primary"
                @click="saveAttrData">
        保存配置
      </a-button>
      <a-button type="danger"
                @click="loadAttrData">
        加载表字段
      </a-button>
      <a-button type="primary"
                @click="createTable">
        创建物理表
      </a-button>
    </div>
    <a-table  size="small" :columns="columns"
    class="table-content"
    :scroll="{x: 600}"
             bordered
             tableLayout="auto"
             :data-source="tableData"
             rowKey="column_id">
      <template v-slot:column_id="text">
         <a-button  size="small" type="primary" shape="circle"  @click="handleEdit(text)">
          <EditOutlined />
         </a-button>
          <a-button  size="small" type="danger" shape="circle"  @click="deleteResAttr(text)">
          <DeleteOutlined />
         </a-button>
      </template>
      <template #attribute_type="{record}">
         <a-select v-model:value="record.attribute_type" style="width: 80px">
          <a-select-option value="1">
            数据库
          </a-select-option>
          <a-select-option value="0">
            自定义
          </a-select-option>
         </a-select>
      </template>
      <template #column_name="{record}">
        <a-input  v-model:value="record.column_name" />
      </template>
      <template #column_cname="{record}">
        <a-input  v-model:value="record.column_cname" />
      </template>
      <template #data_type="{record}">
         <a-select  v-model:value="record.data_type" style="width: 80px">
          <a-select-option v-for="item in dataType" :key="item.value" :value="item.value">
            {{item.label}}
          </a-select-option>
         </a-select>
      </template>
      <template #property_type="{record}">
         <a-select  v-model:value="record.property_type" style="width: 120px">
          <a-select-option v-for="item in columnConfig" :key="item.value" :value="item.value">
            {{item.label}}
          </a-select-option>
         </a-select>
      </template>
      <template #is_must="{record}">
        <a-switch size="small" v-model:checked="record.is_must" />
      </template>
       <template #is_list="{record}">
        <a-switch size="small" v-model:checked="record.is_list" />
      </template>
       <template #is_sort="{record}">
        <a-switch size="small" v-model:checked="record.is_sort" />
      </template>
       <template #is_update="{record}">
        <a-switch size="small" v-model:checked="record.is_update" />
      </template>
       <template #is_insert="{record}">
        <a-switch size="small" v-model:checked="record.is_insert" />
      </template>
      <template #is_export="{record}">
        <a-switch size="small" v-model:checked="record.is_export" />
      </template>
      <template #is_import="{record}">
        <a-switch size="small" v-model:checked="record.is_import" />
      </template>
    </a-table>
  </div>
</template>

<script>
import columns from './columns';
import {dataType, columnConfig} from '@/utils/config'
import { getResAttrConfig, saveResConfig, createTable, loadTable } from '@/api/config/index'
import { EditOutlined, DeleteOutlined } from '@ant-design/icons-vue'

export default {
  components:{
    EditOutlined,
    DeleteOutlined
  },
  data () {
    return {
      tableId: this.$route.params?.tableId,
      tableData: [],
      columns,
      attrType: [
        {
          value: '1',
          label: '数据库'
        },
        {
          value: '2',
          label: '自定义'
        }
      ],
      dataType,
      columnConfig
    }
  },
  mounted () {
    this.initData()
  },
  methods: {
    initData () {
      getResAttrConfig(this.tableId).then(res => {
        if (res.status === 0) {
          this.tableData = res.data
        }
      })
    },
    addAttrData () {
      this.tableData.push({
        attribute_type: '1',
        property_type: '1',
        data_type: '1'
      })
    },
    handleEdit (row) {
      this.dialogState.show = !this.dialogState.show
      this.dialogState.type = 'edit'
      this.dialogState.name = '编辑字段'
      this.dialogState.formData = row
    },
    //删除字段
    deleteResAttr () {
      let params = {}
      this.$ajax.post(this.$api.deleteTableResColumns, params).then(res => {
        if (res && res.data && res.data.errno == 0) {
          this.$message.success()
          this.getColumnData()
          this.dialogState.show = false
        } else {
          this.$message.error(res.data.errmsg)
        }
      })
    },
    // 点击保存
    saveAttrData () {
      let params = {}
      this.tableData = this.tableData.map((item, i) => {
        item.column_id = item.column_id ? item.column_id : this.tableId + i + 1
        item.query_order = i + 1
        item.update_order = i + 1
        item.insert_order = i + 1
        item.export_order = i + 1
        item.list_order = i + 1
        item.table_id = this.tableId
        return item
      })
      params.form = this.tableData
      params.tableId = this.tableId
      saveResConfig(params).then(res => {
        if (res && res.status == 0) {
          this.$message.success('保存成功')
          this.getColumnData()
          this.dialogState.show = false
        } else {
          this.$message.error(res.data.errmsg)
        }
      })
    },
    createTable () {
      this.$message.confirm('是否确定删掉原有表重新创建表？', () => {
        createTable({tableId: this.tableId}).then(res => {
            if (res && res.data && res.status == 0) {
              this.$message.success()
              this.getColumnData()
            } else {
              this.$message.error(res.data.errmsg)
            }
          })
      })
    },
    loadTable () {
      this.$message.confirm('根据数据库信息加载表配置？', () => {
        loadTable({tableId: this.tableId}).then(res => {
            if (res && res.data && res.data.errno == 0) {
              this.$message.success()
              this.getColumnData()
            } else {
              this.$message.error(res.data.errmsg)
            }
          })
      })
    },
    getColumnData () {
      this.$ajax
        .get(this.$api.getResColumnData, {
          tableId: this.tableId
        })
        .then(res => {
          if (res.data.length > 0) this.tableData = res.data
        })
    }
  },
};
</script>

<style lang="less">
.config {
  &-toolbar {
    margin: 10px;
    > * {
      margin-left: 10px;
    }
  }
}
.table-content {
  height: calc(100vh - 300px);
  overflow: auto;
}
</style>