export default {
  install(Vue) {
    Vue.filter('mySplice',function(value){
      return value.slice(0,10);
    })
  }
}