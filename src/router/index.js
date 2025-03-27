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
      component: () => import("../views/HomePage"),
    },
    {
      path: "/TestPage",
      name:"TestPage",
      component: () => import("../views/TestPage/TestPage"),
    },
    {
      path: "/AddressPage",
      component: () => import("../views/AddressPage/AddressPage"),
    },
    {
      path: "/EditAddress",
      component: () => import("../views/AddressPage/EditAddress"),
    },
    {
      path: "/TodoList",
      component: () => import("../views/TodoList/TodoList"),
    },
    {
      path: "/LocalStorage",
      component: () => import("../views/LocalStorage/LocalStorage"),
    },
    {
      path: "/SchoolOrStudent",
      component: () => import("../views/SchoolOrStudent/SchoolOrStudent"),
    },
    {
      path: "/GlobalEvent",
      component: () => import("../views/GlobalEvent/GlobalEvent"),
    },
    {
      path: "/PubSubPage",
      component: () => import("../views/PubSubPage/PubSubPage"),
    },
    {
      path: "/AnimationPage",
      component: () => import("../views/AnimationPage/AnimationPage"),
    },
    {
      path: "/SearchGithubPage",
      component: () => import("../views/SearchGithubPage/SearchGithubPage"),
    },
    {
      path: "/SlotPage",
      component: () => import("../views/SlotPage/SlotPage"),
    },
    {
      path: "/VuexPage",
      component: () => import("../views/VuexPage/VuexPage"),
    },
    {
      path: "/VuexSharedPage",
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