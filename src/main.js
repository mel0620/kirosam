import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

import './styles/quasar.styl'
import 'quasar-framework/dist/quasar.ie.polyfills'
import 'quasar-extras/animate'
import 'quasar-extras/roboto-font'
import 'quasar-extras/material-icons'
import 'quasar-extras/fontawesome'
import 'quasar-extras/ionicons'
import 'quasar-extras/mdi'
import Quasar from 'quasar'

Vue.use(Quasar, {
  config: {}
})

window.EventBus = new Vue();
Vue.config.productionTip = false

import Components from './components';

Object.keys(Components).forEach(name => {
  Vue.component(name, Components[name]);
});

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
