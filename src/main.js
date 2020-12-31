import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import antd from 'ant-design-vue';
import 'ant-design-vue/components/style.js';
createApp(App).use(antd).use(router).mount('#app')
