<template>
  <div class="config">
    <div class="config-toolbar">
      <a-button type="primary">
        新增
      </a-button>
      <a-button type="danger">
        批量删除
      </a-button>
      <a-button type="primary">
        保存配置
      </a-button>
      <a-button type="danger">
        加载表字段
      </a-button>
      <a-button type="primary">
        创建物理表
      </a-button>
    </div>
    <a-table
      :columns="columns"
      :data-source="attrDatas"
    />
  </div>
</template>

<script>
import { ref } from 'vue';
import columns from './columns';

export default {
  setup () {
    const attrDatas = ref([]);

    return {
      columns,
      attrDatas,
    };
  },
};
</script>

<style lang="less">
.config{
  &-toolbar{
    margin:10px;
    > * {
      margin-left: 10px;
    }
  }
}
</style>