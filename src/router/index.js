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
      path: "/TestOne",
      name: "TestOne",
      component: () => import("../views/TestPage/TestOne"),
      meta: {
        title: "TestOne"
      },
    },
    {
      path: "/TestTwo",
      name: "TestTwo",
      component: () => import("../views/TestPage/TestTwo"),
      meta: {
        title: "TestTwo"
      },
    },
    {
      path: "/TestThree",
      name: "TestThree",
      component: () => import("../views/TestPage/TestThree"),
      meta: {
        title: "TestThree"
      },
    },
    {
      path: "/TodoList",
      name: "TodoList",
      component: () => import("../views/TodoList"),
      meta: {
        title: "TodoList"
      },
    },
    {
      path: "/LocalStorage",
      name: "LocalStorage",
      component: () => import("../views/LocalStorage"),
      meta: {
        title: "LocalStorage"
      },
    },
    {
      path: "/SchoolOrStudent",
      name: "SchoolOrStudent",
      component: () => import("../views/SchoolOrStudent"),
      meta: {
        title: "SchoolOrStudent"
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