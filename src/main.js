import Vue from 'vue'
import App from './App.vue'
import TimerView from './lib'

Vue.config.productionTip = false

Vue.use(TimerView)

new Vue({
  render: h => h(App)
}).$mount('#app')
