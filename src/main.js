import Vue from 'vue'
import App from './App.vue'
import router from './router'
import Vant from 'vant';
import 'vant/lib/index.css';

import plugin from './customPlugin/plugin'; // 自定义插件
import './assets/GlobalStyle.css'; // 自定义全局css
import store from './store';//vuex

Vue.config.productionTip = false;// 关闭生产提示
Vue.use(Vant);
Vue.use(plugin);

/// 阻止 dblclick 事件来禁用双击放大
document.addEventListener('dblclick', (e) => {
  e.preventDefault();
}, true);

/// 只在开发环境引入Mock
if (process.env.NODE_ENV === 'development') {
  require('./mock/user'); 
}

window.vm = new Vue({
	el: '#app',
	router,
	store,
	render: (h) => h(App),
	beforeCreate() {
		Vue.prototype.$bus = this; // 全局事件数据总线
	}
})