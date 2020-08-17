<template>
  <div>
    <a-breadcrumb>
      <a-breadcrumb-item>首页</a-breadcrumb-item>
      <a-breadcrumb-item><a href="">{{ activeMenu.title }}</a></a-breadcrumb-item>
      <a-breadcrumb-item>{{ activeTitle }}</a-breadcrumb-item>
    </a-breadcrumb>
  </div>
</template>

<script>
import { inject } from 'vue';
export default {
  setup(){
    const activeTitle = inject('activeTitle');
    const activeMenu = inject('activeMenu');

    return {
      activeMenu,
      activeTitle,
    };
  },
};
</script>

<style>

</style>