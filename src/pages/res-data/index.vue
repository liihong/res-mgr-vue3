<template>
  <div class="res-config">
    <div class="res-config-left">
      <res-tree />
    </div>
    <div class="res-config-right">
      <a-breadcrumb>
        <a-breadcrumb-item>首页</a-breadcrumb-item>
        <a-breadcrumb-item><a href="">资源预览</a></a-breadcrumb-item>
        <a-breadcrumb-item>{{ activeTitle }}</a-breadcrumb-item>
      </a-breadcrumb>
      <router-view />
    </div>
  </div>
</template>

<script>
import resTree from '../components/res-tree';
import { provide, ref } from 'vue';
export default {
  components: {
    resTree,
  },
  setup () {
    const activeTitle = ref('');
    provide('activeTitle', activeTitle);

    return {
      activeTitle,
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