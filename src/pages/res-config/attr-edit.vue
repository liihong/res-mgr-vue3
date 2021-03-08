<template>
  <div>
    <a-card size="small"
            title="字段配置"
            style="width:100%">
      <template #extra><a @click="$router.go(-1)" href="#">X</a></template>
      <a-form :model="form"
              :label-col="labelCol"
              :wrapper-col="wrapperCol">
        <a-row>
          <a-col :span="24">
            <a-divider orientation="left">
            <span class="span_num">1</span>  基本信息
            </a-divider>
          </a-col>
        </a-row>
        <a-row>
           <a-col :span="8">
            <a-form-item label="英文名称">
              <a-input v-model:value="form.column_name" />
            </a-form-item>
         </a-col>
           <a-col :span="8">
            <a-form-item label="中文名称">
              <a-input v-model:value="form.column_cname" />
            </a-form-item>
           </a-col>
            <a-col :span="8">
            <a-form-item label="默认值">
              <a-input v-model:value="form.name" />
            </a-form-item>
             </a-col>
        </a-row>
        <a-row>
           <a-col :span="8">
            <a-form-item label="是否唯一">
              <a-switch size="small" v-model:checked="form.is_import" />
            </a-form-item>
             </a-col>
           <a-col :span="8">
            <a-form-item label="验证类型">
              <a-input v-model:value="form.name" />
            </a-form-item>
           </a-col>
        </a-row>
        <a-row>
           <a-col :span="8">
            <a-form-item label="列表宽度">
              <a-input v-model:value="form.column_length" />
            </a-form-item>
             </a-col>
           <a-col :span="8">
            <a-form-item label="最大长度">
              <a-input v-model:value="form.input_length" />
            </a-form-item>
             </a-col>
           <a-col :span="8">
            <a-form-item label="提示信息">
              <a-input v-model:value="form.toolip" />
            </a-form-item>
           </a-col>
        </a-row>
         <a-row>
          <a-col :span="24">
            <a-divider orientation="left">
            <span class="span_num">2</span>  特性配置
            </a-divider>
          </a-col>
        </a-row>
        <a-row>
           <a-col :span="24">
            <a-form-item  :label-col="{ span: 2 }" label="数据源SQL">
              <a-textarea v-model:value="form.type_sql" />
            </a-form-item>
             </a-col>
        </a-row>
          <a-form-item :wrapper-col="{ span: 14 }">
            <a-button type="primary"
                      @click="onSubmit">
              保存
            </a-button>
            <a-button style="margin-left: 10px;">
              取消
            </a-button>
          </a-form-item>

      </a-form>
    </a-card>
  </div>
</template>
<script>
import { getResAttrById } from '@/api/config/index'

export default {
  props: {},
  data () {
    return {
      labelCol: { span: 5 },
      wrapperCol: { span: 19 },
      form: {
        column_id: '',
        column_name: '',
        column_cname: '',
        table_id: '',
        is_query: '',
        defalut_value: '',
        type_sql: '',
        input_length: '',
        column_length: '',
        eachcheck: '',
        list_style: '',
      },
    };
  },
  mounted() {
    this.initData()
  },
  methods: {
    initData () {
      getResAttrById({
        tableId: this.$route.params.tableId,
        columnId: this.$route.query.columnId
      }).then(res=>{
        if(res.status === 0) {
          this.form = res.data
        }
      })
    },
    onSubmit() {
      
    }
  },
};
</script>
<style lang="less" scoped>
.span_num{
  border-radius: 50%;
  background-color:#4091F7;
  color:#FFFFFF;
  display: inline-block;
  width: 20px;
  text-align: center;
  height: 20px;
  line-height: 20px;
}
</style>