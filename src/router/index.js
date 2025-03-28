import Vue from 'vue';
import Router from 'vue-router';
Vue.use(Router);

const router = new Router({
  routes: [
    {
      path: '/',
      redirect: '/HomePage',
    },
    {
      path: "/HomePage",
      name:"HomePage",
      component: () => import("../views/HomePage"),
      meta:{
        title:"首页"
      }
    },
    {
      path: "/TestPage",
      name:"TestPage",
      component: () => import("../views/TestPage/TestPage"),
      meta:{
        title:"测试"
      }
    },
    {
      path: "/AddressPage",
      name:"AddressPage",
      component: () => import("../views/AddressPage/AddressPage"),
      meta:{
        title:"地址列表"
      }
    },
    {
      path: "/EditAddress",
      name:"EditAddress",
      component: () => import("../views/AddressPage/EditAddress"),
      meta:{
        title:"编辑地址"
      }
    },
    {
      path: "/TodoList",
      name:"TodoList",
      component: () => import("../views/TodoList/TodoList"),
      meta:{
        title:"TodoLits案例"
      }
    },
    {
      path: "/LocalStorage",
      name:"LocalStorage",
      component: () => import("../views/LocalStorage/LocalStorage"),
      meta:{
        title:"本地缓存"
      }
    },
    {
      path: "/SchoolOrStudent",
      name:"SchoolOrStudent",
      component: () => import("../views/SchoolOrStudent/SchoolOrStudent"),
      meta:{
        title:"学校和学生"
      }
    },
    {
      path: "/GlobalEvent",
      name:"GlobalEvent",
      component: () => import("../views/GlobalEvent/GlobalEvent"),
      meta:{
        title:"全局事件总线"
      }
    },
    {
      path: "/PubSubPage",
      name:"PubSubPage",
      component: () => import("../views/PubSubPage/PubSubPage"),
      meta:{
        title:"PubSub三方"
      }
    },
    {
      path: "/AnimationPage",
      name:"AnimationPage",
      component: () => import("../views/AnimationPage/AnimationPage"),
      meta:{
        title:"动画"
      }
    },
    {
      path: "/SearchGithubPage",
      name:"SearchGithubPage",
      component: () => import("../views/SearchGithubPage/SearchGithubPage"),
      meta:{
        title:"github用户搜索"
      }
    },
    {
      path: "/SlotPage",
      name:"SlotPage",
      component: () => import("../views/SlotPage/SlotPage"),
      meta:{
        title:"Slot插槽"
      }
    },
    {
      path: "/VuexPage",
      name:"VuexPage",
      component: () => import("../views/VuexPage/VuexPage"),
      meta:{
        title:"Vuex两数相加"
      }
    },
    {
      path: "/VuexSharedPage",
      name:"VuexSharedPage",
      component: () => import("../views/VuexSharedPage/VuexSharedPage"),
    },
  ]
});

//全局前置路由守卫————初始化的时候被调用、每次路由切换之前被调用
router.beforeEach((to, from, next) => {
  console.log('前置路由守卫',to,from)
  let routeConditions = window.localStorage.getItem("routeConditions")
  if(routeConditions === '苟七' && from.name === 'TestPage' && to.name === 'AddressPage'){
    alert('因为你是苟七,不允许你跳转!');
  }else{
    next();
  }
});

//全局后置路由守卫————初始化的时候被调用、每次路由切换之后被调用
router.afterEach((to,from)=>{
	console.log('后置路由守卫',to,from)
	document.title = to.meta.title || '学习Vue';
})

export default router;