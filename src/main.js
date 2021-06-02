import Vue from 'vue';
import ElementUI, { Message } from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import mavonEditor from 'mavon-editor'
import 'mavon-editor/dist/css/index.css'
import App from './App.vue';
import router from "./router/index"
import "./assets/iconfont/iconfont.css";
// 引入登录提示框
Vue.prototype.$message = Message
import 'element-ui/lib/theme-chalk/index.css';
Vue.use(ElementUI);
Vue.use(mavonEditor)

new Vue({
  el: '#app',
  router,
  render: h => h(App)
});
