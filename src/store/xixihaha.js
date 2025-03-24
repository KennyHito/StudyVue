export default{
  namespaced:true,
  actions:{
    // 当xxx为奇数的时候再乘
    xxxOddMultiplyByFive({context,value}){
      if(context.state.xxx % 2){
        context.commit('MULTIPLYBYFIVE',value)
      }
    },
  },
  mutations:{
    MULTIPLYBYFIVE(state,value){
      state.xxx = value * state.xxx;
    }
  },
  state: {
    xxx:100,
    yyy:200
  },
  getters :{
    
  }
}