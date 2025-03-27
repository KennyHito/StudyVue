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
        title:"首页1111"
      }
    },
    {
      path: "/TestPage",
      name:"TestPage",
      component: () => import("../views/TestPage/TestPage"),
    },
    {
      path: "/AddressPage",
      name:"AddressPage",
      component: () => import("../views/AddressPage/AddressPage"),
    },
    {
      path: "/EditAddress",
      name:"EditAddress",
      component: () => import("../views/AddressPage/EditAddress"),
    },
    {
      path: "/TodoList",
      name:"TodoList",
      component: () => import("../views/TodoList/TodoList"),
    },
    {
      path: "/LocalStorage",
      name:"LocalStorage",
      component: () => import("../views/LocalStorage/LocalStorage"),
    },
    {
      path: "/SchoolOrStudent",
      name:"SchoolOrStudent",
      component: () => import("../views/SchoolOrStudent/SchoolOrStudent"),
    },
    {
      path: "/GlobalEvent",
      name:"GlobalEvent",
      component: () => import("../views/GlobalEvent/GlobalEvent"),
    },
    {
      path: "/PubSubPage",
      name:"PubSubPage",
      component: () => import("../views/PubSubPage/PubSubPage"),
    },
    {
      path: "/AnimationPage",
      name:"AnimationPage",
      component: () => import("../views/AnimationPage/AnimationPage"),
    },
    {
      path: "/SearchGithubPage",
      name:"SearchGithubPage",
      component: () => import("../views/SearchGithubPage/SearchGithubPage"),
    },
    {
      path: "/SlotPage",
      name:"SlotPage",
      component: () => import("../views/SlotPage/SlotPage"),
    },
    {
      path: "/VuexPage",
      name:"VuexPage",
      component: () => import("../views/VuexPage/VuexPage"),
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
	document.title = to.meta.title;
})

export default router;