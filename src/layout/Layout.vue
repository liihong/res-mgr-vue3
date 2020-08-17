<template>
  <div class="layout">
    <div class="layout-header">
      <div class="layout-header-logo" />
      <a-menu
        theme="dark"
        mode="horizontal"
        :default-selected-keys="['1']"
        :selected-keys="[activeMenu.key]"
        :style="{ lineHeight: '64px' }"
        @click="handlerClickMenu"
      >
        <a-menu-item key="1" title="资源管理">
          资源管理
        </a-menu-item>
        <a-menu-item key="2" title="资源预览">
          资源预览
        </a-menu-item>
        <a-menu-item key="3" title="资源关系">
          资源关系
        </a-menu-item>
      </a-menu>
    </div>
    <div class="layout-content">
      <router-view />
    </div>
    <div class="layout-footer" style="text-align:center">
      Res Manage ©2020 Created by lihong
    </div>
  </div>
</template>
<script>
import {provide, reactive} from 'vue';
export default {
  setup(){
    const activeMenu = reactive({
      key: '1',
      title: '资源管理',
    });
    provide('activeMenu',activeMenu);

    const handlerClickMenu = ({item,key})=>{
      activeMenu.key = key;
      activeMenu.title = item.title;
    };
    return {
      activeMenu,

      handlerClickMenu,
    };
  },
};
</script>
<style lang="less">
.layout {
  &-header {
    height: 64px;
    padding: 0 50px;
    line-height: 64px;
    background: #001529;
    &-logo {
      width: 120px;
      height: 31px;
      background: rgba(255, 255, 255, 0.2);
      margin: 16px 28px 16px 0;
      float: left;
    }
  }
  &-content{
    height: calc(100vh - 100px);
  }
}
</style>
