// 引用vue
import Vue from 'vue'
// 引用APP,它是所有组件的父组件
import App from './App.vue'
import router from './router'
import 'vant/lib/index.less';
import plugin from './customPlugin/plugin';

// 关闭生产提示
Vue.config.productionTip = false
// 为 Vue.prototype 添加一个全局属性
Vue.prototype.$apiBaseUrl = 'https://www.baidu.com';
// 引入全局 CSS 文件
import './assets/GlobalStyle.css'; 

import {
	Button,
	DatetimePicker,
	Sticky,
	Swipe,
	SwipeItem,
	Tab,
	Tabs,
	List,
	Checkbox,
	Field,
	CountDown,
	Popup,
	Skeleton,
	Dialog,
	Cell,
	NumberKeyboard,
	Picker,
	Col,
	Row,
	Grid,
	GridItem,
	Image,
	NavBar,
	Icon,
	Divider,
	Popover,
	Calendar,
	Loading,
	ActionSheet,
	Switch,
	Overlay,
	PasswordInput,
	Collapse,
	CollapseItem,
	CheckboxGroup,
	Search,
	RadioGroup,
	Radio,
	Form,
  GoodsAction, 
  GoodsActionIcon, 
  GoodsActionButton,
	AddressList,
	AddressEdit,
	Area,
	Toast
} from 'vant';

Vue.use(Button);
Vue.use(DatetimePicker);
Vue.use(Sticky);
Vue.use(Swipe);
Vue.use(SwipeItem);
Vue.use(Tab);
Vue.use(Tabs);
Vue.use(List);
Vue.use(Checkbox);
Vue.use(CheckboxGroup);
Vue.use(Field);
Vue.use(CountDown);
Vue.use(Popup);
Vue.use(Skeleton);
Vue.use(Dialog);
Vue.use(Cell);
Vue.use(NumberKeyboard);
Vue.use(Picker);
Vue.use(Col);
Vue.use(Row);
Vue.use(Grid);
Vue.use(GridItem);
Vue.use(Image);
Vue.use(NavBar);
Vue.use(Icon);
Vue.use(Divider);
Vue.use(Popover);
Vue.use(Calendar);
Vue.use(Loading);
Vue.use(ActionSheet);
Vue.use(Switch);
Vue.use(Overlay);
Vue.use(PasswordInput);
Vue.use(Collapse);
Vue.use(CollapseItem);
Vue.use(Search);
Vue.use(RadioGroup);
Vue.use(Radio);
Vue.use(Form);
Vue.use(GoodsAction);
Vue.use(GoodsActionButton);
Vue.use(GoodsActionIcon);
Vue.use(AddressList);
Vue.use(AddressEdit);
Vue.use(Area);
Vue.use(Toast);

Vue.use(plugin);

// 阻止 dblclick 事件来禁用双击放大
document.addEventListener('dblclick', (e) => {
  e.preventDefault();
}, true);

window.vm = new Vue({
	el: '#app',
	render: (h) => h(App),
	router,
	beforeCreate() {
		Vue.prototype.$bus = this; // 全局事件数据总线
	}
})