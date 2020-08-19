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
import { getResTree } from '@/api/config';
import { reactive, inject } from 'vue';
import { useRouter } from 'vue-router';

import { formatTreeData } from '@/utils/index';
export default {
  setup () {
    const state = reactive({
      treeData: [],
      replaceFields: { children: 'children', title: 'title', key: 'id' },
    });
    const title = inject('activeTitle');
    const activeMenu = inject('activeMenu');

    const router = useRouter()

    getResTree().then(res => {
      state.treeData = formatTreeData(res.data);
    });

    const onSelect = (selectedKeys, { node }) => {
      title.value = node.title;
      router.push({ path: activeMenu.key === '2' ? `/dataList/${selectedKeys[0]}` : `/resConfigList/${selectedKeys[0]}`});
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