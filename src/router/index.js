import { createRouter, createWebHistory } from 'vue-router';

/* Layout */
import Layout from '@/layout/Layout';

export const constantRouterMap = [
  {
    path: '/',
    name: '主页',
    component: Layout,
    children: [{
      path: '/',
      name: '资源管理',
      component: () =>
        import('@/pages/res-config/index'),
      children: [{
        path: '/resConfigList',
        name: '资源字段列表',
        component: () =>
          import('@/pages/res-config/res-config-attr.vue'),
      },
      {
        path: '/resDataList',
        name: '资源呈现',
        component: () =>
          import('../pages/res-data/res-data-list.vue'),
      }],
      // },
      // {
      //   path: '/resRelation',
      //   name: '资源关系',
      //   component: () =>
      //     import('@/views/resConfig/resConfigList.vue'),
      // },
      // {
      //   path: '/resConfig',
      //   name: '系统设置',
      //   component: () =>
      //     import('@/views/resConfig/resConfigList.vue'),
      // },
      // {
      //   path: '/resEdit',
      //   name: '资源修改',
      //   hidden: true,
      //   component: () =>
      //     import('@/views/resMgr/ResEdit.vue'),
    },
    ],
  },
  // {
  //   path: '/login',
  //   name: '登录',
  //   hidden: true,
  //   component: () =>
  //     import('@/views/login/login'),
  // },
];

const router = createRouter({
  history: createWebHistory(),
  routes: constantRouterMap,
});


export default router;