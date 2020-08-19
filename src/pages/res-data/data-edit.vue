<template>
  <a-row>
    <a-form :model="form"
            :label-col="{ span: 2 }"
            :wrapper-col="{ span: 14 }">
      <a-form-item v-for="item in tableInfo.columns"
                   :key="item.column_id"
                   :label="item.column_cname">
        <a-input v-decorator="[
          `${item.column_name}`,
          {
            validateTrigger: ['change', 'blur'],
            rules: [
              {
                required: true,
                whitespace: true,
                message: 'Please input passenger\'s name or delete this field.',
              },
            ],
          },
        ]"
                 placeholder="passenger name"
                 style="width: 60%; margin-right: 8px" />
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
import { reactive } from 'vue'
import { columnConfig } from '@/utils/config'
import { getTableConfig, getDataById } from '@/api/res-data'
import { useRoute } from 'vue-router'
export default {
  setup () {
    let formData = reactive({

    })
    const tableInfo = reactive({
      columns: [],
      config: {}
    })
    const route = useRoute();
    const tableId = route.params?.tableId

    getTableConfig({ tableId, flag: 'update' }).then(res => {
      tableInfo.columns = res.data?.columns;
      tableInfo.config = res.data.table;
    });

    getDataById({ tableId, id: route.query?.id }).then(res => {
      formData = res.data
    })

    return {
      formData,
      tableInfo,
      columnConfig
    }
  }
}
</script>

<style>
</style>