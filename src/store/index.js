// 该文件用于创建Vuex中最为核心的store
import Vue from 'vue';
// 引入Vuex
import Vuex from 'vuex'
import xixihaha from './xixihaha';
// 应用Vuex插件
Vue.use(Vuex);

// 准备actions——用于响应组件中的动作
const actions = {
  jia(context,value){
    context.commit('JIA',value)
  },
  jian(context,value){
    context.commit('JIAN',value)
  },
  jiaOdd(context,value){
    if(context.state.sum % 2){
      context.commit('JIA',value)
    }
  },
  jiaWait(context,value){
    setTimeout(() => {
      context.commit('JIA',value)
    }, 500);
  }
}

// 准备mutations——用于操作数据（state）
const mutations = {
  JIA(state,value){
    state.sum += value
  },
  JIAN(state,value){
    state.sum -= value
  },
  ADD_PERSON(state,value){
		console.log('mutations中的ADD_PERSON被调用了')
		state.personList.unshift(value)
	}
}

// 准备state——用于存储数据
const state = {
	sum:0,
  school:'北京',
	subject:'前端',
  personList:[
		{id:'001',name:'张三'}
	]
}

// 准备getters——用于将state中的数据进行加工
const getters = {
	bigSum(state){
		return state.sum*10
	}
}

// 创建并暴露store
export default new Vuex.Store({
	actions,
	mutations,
	state,
  getters,
  modules:{
    xixihaha
  }
})