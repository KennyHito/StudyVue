export default{
  namespaced:true,
  actions:{
    // 随便起一个方法名
    multiplyByFive(context,value){
      context.commit('MULTIPLYBYFIVE',value)
    },
  },
  mutations:{
    MULTIPLYBYFIVE(state,value){
      state.xxx *= value;
    }
  },
  state: {
    xxx:100,
    person:{
      name:'马六',
      age:18
    }
  },
  getters :{
    personMsg(state){
      return "我叫"+state.person.name+",今年"+state.person.age+"岁。"
    }
  }
}