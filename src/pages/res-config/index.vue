<template>
  <div class="res-config">
    <div class="res-config-left">
      <res-tree />
    </div>
    <div class="res-config-right">
      <breadcrumb />
      <router-view :key="getUUId()" />
    </div>
  </div>
</template>

<script>
import resTree from '../components/res-tree';
import breadcrumb from '../components/breadcrumb';
import { provide, ref } from 'vue';
import {getUUId} from '@/utils/index'
export default {
  components: {
    resTree,
    breadcrumb,
  },
  setup () {
    const activeTitle = ref('');
    provide('activeTitle', activeTitle);

    return {
      activeTitle,

      getUUId
    };
  },
};
</script>

<style lang="less">
.res-config {
  display: flex;
  height: 100%;
  & > * {
    overflow: auto;
    flex-shrink: 0;
  }
  &-right {
    flex-grow: 1;
    padding: 20px;
  }
}
</style>