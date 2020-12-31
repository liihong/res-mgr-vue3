<template>
  <div class="data-list">
    <div class="data-list-toolbar">
      <a-form layout="inline"
              :model="queryData"
              @submit.prevent="handleSubmit">
        <a-form-item>
          <a-input v="queryData.user"
                   placeholder="Username" />
        </a-form-item>
        <a-form-item>
          <a-input v="queryData.password"
                   placeholder="Password" />
        </a-form-item>
        <a-form-item>
          <a-button type="primary"
                    html-type="submit"
                    :disabled="queryData.user === '' || queryData.password === ''">
            查询
          </a-button>
        </a-form-item>
      </a-form>
    </div>
    <div class="data-list-table">
      <a-table :data-source="tableInfo.data" size="middle" :pagination="false" bordered
               row-key="id">
        <a-table-column key="index"
                        align="center"
                        title="序号"
                        :width="60">
          <template v-slot="{index}">
            <span>{{ index+(queryData.currentPage - 1) * queryData.pageSize + 1 }}</span>
          </template>
        </a-table-column>

        <a-table-column v-for="col in tableInfo.columns"
                        :key="col.column_id"
                        :title="col.column_cname"
                        :align="col.text_align || 'center'"
                        :width="col.column_length || null"
                        :data-index="col.column_name"
                        :property-type="col.property_type">
          <template v-slot="{record}">
            <img v-if="col.property_type === '13'"
                 style="width:200px;height:100px;"
                 :src="record[col.column_name]">
            <span v-else>{{ record[col.column_name] }}</span>
          </template>
        </a-table-column>
        <a-table-column key="operate"
                        align="center"
                        title="操作"
                        :width="120"
                        fixed="right">
          <template v-slot="{record}">
            <div class="editable-row-operations">
              <span>
                <a @click="() => editRow(record)">编辑</a>
                <a-popconfirm title="是否确认删除？"
                              ok-text="是的"
                              cancel-text="取消" @confirm="() => deleteRow(record)">
                  <a style="margin-left:10px;" href="#">删除</a>
                </a-popconfirm>
              </span>
            </div>
          </template>
        </a-table-column>
      </a-table>
      <div class="pagination">
      <a-pagination
        size="small"
        :total="queryData.total"
        :current="page"
        showSizeChanger
        showQuickJumper
        :showTotal="total => `共 ${total} 项`"
        @change="onPageChange"
        @showSizeChange="sizeChange"
        :pageSize="pageSize"
      />
    </div>
    </div>
  </div>
</template>

<script>
import { reactive } from 'vue';
import { useRoute, useRouter } from 'vue-router';
import {message} from 'ant-design-vue'
import { getTableConfig, getTableDataList, deleteTableData } from '@/api/res-data/index';

export default {
  setup () {
    const queryData = reactive({
      user: '',
      password: '',
      currentPage: 1,
      pageSize: 20,
      total: 0,
    });

    const tableInfo = reactive({
      data: [],
      columns: [],
      config: {},
    });

    const route = useRoute();
    const router = useRouter()
    const tableId = route.params?.tableId
    
    getTableConfig({ tableId, flag: 'list' }).then(res => {
      tableInfo.columns = res.data?.columns;
      tableInfo.config = res.data.table;
    });

    getTableDataList({ tableId }).then(res => {
      tableInfo.data = res.data.data;
      queryData.total = res.data.count;
      queryData.currentPage = res.data.currentPage;
      queryData.pageSize = res.data.pageSize;
    });

    const editRow = (row) => {
      router.push({path: `/dataEdit/${tableId}`,query:{id: row[tableInfo.config['primary_key']]}})
    };

    const deleteRow = (row) => {
      deleteTableData({
        tableId,
        id: row[tableInfo.config['primary_key']]
      }).then(res=>{
        if(res.status === 0) {
          message.success('删除成功');
          getTableDataList({ tableId })
        }
      })
    }

    return {
      queryData,
      tableInfo,

      editRow,
      deleteRow,
    };
  },
};
</script>

<style>
.data-list-table{

}
</style>