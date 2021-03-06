import Vue from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify'
import vueSmoothScroll from 'vue-smoothscroll'
import sanitizeHTML from 'sanitize-html'

Vue.use(vueSmoothScroll)
Vue.config.productionTip = false
Vue.prototype.$sanitize = sanitizeHTML

new Vue({
  vuetify,
  render: h => h(App)
}).$mount('#app')
