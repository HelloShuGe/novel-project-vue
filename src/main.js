import Vue from 'vue'
import App from './App.vue'
import router from './router'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import locale from 'element-ui/lib/locale/lang/en'
import login from './router/login'
import register from './router/register'

var axios = require('axios')
//axios.defaults.baseURL = 'http://120.25.210.42:8443/api'
axios.defaults.baseURL = 'http://localhost:8443/api'
Vue.prototype.$axios = axios
Vue.config.productionTip = false
Vue.use(ElementUI, {locale})
Vue.prototype.$login = login.install;
Vue.prototype.$register = register.install;
Vue.config.productionTip = false;
new Vue({
  router,
  render: h => h(App),
  beforeCreate(){
    Vue.prototype.$bus = this
  }
}).$mount('#app')
