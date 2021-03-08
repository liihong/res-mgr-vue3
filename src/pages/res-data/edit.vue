<template>
  <a-row>
    <a-form :model="formData"
            :label-col="{ span: 2 }"
            :wrapper-col="{ span: 14 }">
      <a-form-item v-for="item in tableInfo.columns"
                   :key="item.column_id"
                   :label="item.column_cname"
                   :name="item.column_name">
         <component :is="columnConfig[item.property_type-1]['component']"
                   v-model:value="formData[item.column_name]"
                   :prop="item.column_name" /> 
      </a-form-item>
      <a-form-item :wrapper-col="{ span: 14, offset: 4 }">
        <a-button type="primary"
                  @click="onSubmit">
          保存
        </a-button>
        <a-button style="margin-left: 10px;">
          取消
        </a-button>
      </a-form-item>
    </a-form>
  </a-row>
</template>

<script>
import { columnConfig } from '@/utils/config'
import { getTableConfig, getDataById } from '@/api/res-data'
import AutoSerial from '@/components/auto-serial/index.vue'
import ImageUpload from '@/components/image-upload/index.vue'

export default {
  components: {
    AutoSerial,
    ImageUpload,
  },
  data () {
    return {
      columnConfig,
      tableInfo: {
        columns: [],
        config: {},
      },
      formData:{}
    }
  },
  computed: {
    tableId () {
      return this.$route.params?.tableId
    }
  },
  mounted() {
    this.initData()
  },
  methods: {
    initData () {
      getTableConfig({ tableId: this.tableId, flag: 'update' }).then(res => {
        this.tableInfo.columns = res.data?.columns;
        this.tableInfo.config = res.data.table;
      });

      getDataById({ tableId: this.tableId, id: this.$route.query?.id }).then(res => {
        this.formData = res.data
      })
    },
    onSubmit(){
      console.log(this.formData)
    }
  },
  watch:{
    formData(val){
      console.log(val)
    }
  }
}
</script>

<style>
</style>