import TimerView from './TimerView.vue'

TimerView.install = function (Vue) {
  Vue.component(TimerView.name,TimerView);
}
export default TimerView