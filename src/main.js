import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import axios from "axios"
import VueI18n from 'vue-i18n'
import commonComponent from "@/components/index.js"
import globajDirective from "@/components/globajDirective.js"
Vue.use(commonComponent);
Vue.use(globajDirective)
import dataCn from "../public/data/datacn.js"
import dataEn from "../public/data/dataen.js"
window.dataCn=dataCn;
window.dataEn=dataEn;
window.msg=window.dataCn;
Vue.use(VueI18n);
window.a=25;
var locale;
if (localStorage.getItem("lang")) {
  locale = localStorage.getItem("lang");
} else {
  locale = 'cn';
}
let i18n = new VueI18n({
  locale: locale,
  messages: {
    "cn": require("./assets/lang/zh"),
    'en': require("./assets/lang/en"),
  }
})

// import '@/assets/bootstrap.css'
import mockjs from '@/Mock/mock.js'
Vue.use(mockjs)
import ElementUi from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
Vue.use(ElementUi)
Vue.prototype.axios = axios;
Vue.config.productionTip = false
import bus from './bus.js';
Vue.prototype.bus = bus;
import { Loading } from 'element-ui';

axios.interceptors.request.use(
  req => {
    loading = Loading.service({
      text: '加载中……',
    });
    return req; //拦截完再发送出去
  },
  err => {
    return Promise.reject(err);
  }
);

let loading;
axios.interceptors.response.use(
  res => {
    
  loading.close();

    return res; //拦截完再返回数据
  },
  err => {
    return Promise.reject(err);
  }
);


new Vue({
  router,
  store,
  i18n,
  render: h => h(App)
}).$mount('#app')
