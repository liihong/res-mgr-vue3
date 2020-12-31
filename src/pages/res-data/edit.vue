<template>
  <a-row>
    <a-form :model="tableInfo.data"
            :label-col="{ span: 2 }"
            :wrapper-col="{ span: 14 }">
      <a-form-item v-for="item in tableInfo.columns"
                   :key="item.column_id"
                   :label="item.column_cname" :name="item.column_name">
        <component :is="columnConfig[item.property_type]['component']" v-bind="tableInfo.data[item.column_name]"
            v-model="tableInfo.data[item.column_name]" :prop="item.column_name" />
            <!-- <a-input :value="tableInfo.data[item.column_name]"/>
            {{columnConfig[item.property_type]['component']}} -->
            {{tableInfo.data[item.column_name]}}
      </a-form-item>

      <a-form-item :wrapper-col="{ span: 14, offset: 4 }">
        <a-button type="primary"
                  @click="onSubmit">
          Create
        </a-button>
        <a-button style="margin-left: 10px;">
          Cancel
        </a-button>
      </a-form-item>
    </a-form>
  </a-row>
</template>

<script>
import { reactive, provide } from 'vue'
import { columnConfig } from '@/utils/config'
import { getTableConfig,getDataById } from '@/api/res-data'
import { useRoute } from 'vue-router'
import Input from '@/components/input/index.vue'
import AutoSerial from '@/components/auto-serial/index.vue'
export default {
  components:{
    RInput:Input,
    AutoSerial,
  },
  setup () {
    const tableInfo = reactive({
      columns: [],
      config: {},
      data: {}
    })
    const route = useRoute();
    const tableId = route.params?.tableId
    
    getTableConfig({ tableId, flag: 'update' }).then(res => {
      tableInfo.columns = res.data?.columns;
      tableInfo.config = res.data.table;
    });

    getDataById({ tableId, id: route.query?.id }).then(res => {
      tableInfo.data = res.data
      provide('formData',res.data)
    })

    return {
      tableInfo,
      columnConfig
    }
  }
}
</script>

<style>
</style>