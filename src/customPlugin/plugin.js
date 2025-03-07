export default {
  install(Vue) {
    Vue.filter('mySplice',function(value){
      return value.slice(0,10);
    })

    Vue.mixin({
      data(){
        return {
          x:100,
          y:200
        }
      }
    })

    Vue.directive('fbind', {
      bind(el, binding) {
          // console.log('bind')
          el.value = binding.value;
      },
      //指令被插入页面时
      inserted(el, binding) {
          // console.log('inserted')
          el.focus();
      },
      //指令所在模版被重新解析时
      update(el, binding) {
          // console.log('update');
          el.value = binding.value;
      }
  })
  }
}