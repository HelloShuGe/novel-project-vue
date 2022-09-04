import Vue from 'vue'
import register from '../components/login/Register.vue'

const PopupBox = Vue.extend(register)

register.install = function (data) {
  let instance = new PopupBox({
    data
  }).$mount();

  document.body.appendChild(instance.$el);

  Vue.nextTick(() => {
    instance.show()
  });
};

export default register;