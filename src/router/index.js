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
      path: "/HomePage",//首页
      name: "HomePage",
      component: () => import("../views/HomePage"),
      meta: {
        title: "首页"
      },
    },
    {
      path: "/TestPage",
      name: "TestPage",
      component: () => import("../views/TestPage/TestPage"),
      meta: {
        title: "TestPage"
      },
    },
    {
      path: "/AddressPage",
      name: "AddressPage",
      component: () => import("../views/AddressPage/AddressPage"),
      meta: {
        title: "地址列表"
      },
    },
    {
      path: "/EditAddress",
      name: "EditAddress",
      component: () => import("../views/AddressPage/EditAddress"),
      meta: {
        title: "编辑地址"
      },
    },
    {
      path: "/TodoList",
      name: "TodoList",
      component: () => import("../views/TodoList/TodoList"),
      meta: {
        title: "TodoList"
      },
    },
    {
      path: "/LocalStorage",
      name: "LocalStorage",
      component: () => import("../views/LocalStorage/LocalStorage"),
      meta: {
        title: "LocalStorage"
      },
    },
    {
      path: "/SchoolOrStudent",
      name: "SchoolOrStudent",
      component: () => import("../views/SchoolOrStudent/SchoolOrStudent"),
      meta: {
        title: "SchoolOrStudent"
      },
    },
    {
      path: "/GlobalEvent",
      name: "GlobalEvent",
      component: () => import("../views/GlobalEvent/GlobalEvent"),
      meta: {
        title: "GlobalEvent"
      },
    },
    {
      path: "/PubSubPage",
      name: "PubSubPage",
      component: () => import("../views/PubSubPage/PubSubPage"),
      meta: {
        title: "PubSubPage"
      },
    },
    {
      path: "/AnimationPage",
      name: "AnimationPage",
      component: () => import("../views/AnimationPage/AnimationPage"),
      meta: {
        title: "AnimationPage"
      },
    },
    {
      path: "/SearchGithubPage",
      name: "SearchGithubPage",
      component: () => import("../views/SearchGithubPage/SearchGithubPage"),
      meta: {
        title: "SearchGithubPage"
      },
    },
    {
      path: "/SlotPage",
      name: "SlotPage",
      component: () => import("../views/SlotPage/SlotPage"),
      meta: {
        title: "SlotPage"
      },
    },
    {
      path: "/VuexPage",
      name: "VuexPage",
      component: () => import("../views/VuexPage/VuexPage"),
      meta: {
        title: "VuexPage"
      },
    },
  ]
});

router.beforeEach((to, from, next) => {
  const title = to.meta && to.meta.title;
  if (title) {
    document.title = title;
  }
  next();
});

export default router;