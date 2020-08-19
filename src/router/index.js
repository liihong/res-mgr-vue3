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
      component: () =>
        import('@/pages/res-config/index'),
      children: [{
        path: '/resConfigList',
        component: () =>
          import('@/pages/res-config/res-config-attr.vue'),
      },
      {
        path: '/dataEdit/:tableId',
        component: () =>
          import('@/pages/res-data/data-edit.vue'),
      },{
        path: '/dataList/:tableId',
        component: () =>
          import('@/pages/res-data/data-list.vue'),
      }]
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