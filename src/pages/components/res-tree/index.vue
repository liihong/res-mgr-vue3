<template>
  <div class="res-tree"
       style="width:240px;">
    <a-directory-tree :tree-data="state.treeData"
                      :replace-fields="state.replaceFields"
                      default-expand-all
                      default-expanded-keys="['']"
                      @select="onSelect" />
  </div>
</template>

<script>
import { getResTree } from '../../../api/config';
import { reactive, getCurrentInstance, inject } from 'vue';
import { formatTreeData } from '../../../utils/util';
export default {
  setup () {
    const state = reactive({
      treeData: [],
      replaceFields: { children: 'children', title: 'title', key: 'id' },
    });
    const title = inject('activeTitle');
    const activeMenu = inject('activeMenu');
    getResTree().then(res => {
      state.treeData = formatTreeData(res.data);
    });
    const { ctx } = getCurrentInstance();

    const onSelect = (selectedKeys, { node }) => {
      title.value = node.title;
      ctx.$router.push({ path: activeMenu.key === '2' ? '/resDataList' : '/resConfigList', query: { table_id: selectedKeys[0] } });
    };


    return {
      state,
      onSelect,
    };
  },
};
</script>

<style>
.res-tree {
  background: #f0f2f5;
  height: 100%;
  padding: 30px;
}
</style>