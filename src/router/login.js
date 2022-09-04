import Vue from 'vue'
import login from '../components/login/Login.vue'

const PopupBox = Vue.extend(login)

login.install = function (data) {
  let instance = new PopupBox({
    data
  }).$mount();

  document.body.appendChild(instance.$el);

  Vue.nextTick(() => {
    instance.show()
  });
};

export default login;