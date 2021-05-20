import Vue from 'vue';
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import mavonEditor from 'mavon-editor'
import 'mavon-editor/dist/css/index.css'
import App from './App.vue';
import router from "./router/index"

Vue.use(ElementUI);
Vue.use(mavonEditor)

new Vue({
  el: '#app',
  router,
  render: h => h(App)
});
