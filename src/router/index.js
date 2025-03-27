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

router.beforeEach((to, from, next) => {
  console.log('⚠️测试打印的内容:--->from',from);
  console.log('⚠️测试打印的内容:--->to',to);
  next();
});

export default router;