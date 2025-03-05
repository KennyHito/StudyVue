import Vue from 'vue';
import Router from 'vue-router';
Vue.use(Router);

const router = new Router({
  routes: [
    {
      path: '/',
      redirect: '/homePage',
    },
    {
      path: "/homePage",//首页
      name: "homePage",
      component: () => import("../views/HomePage/HomePage.vue"),
      meta: {
        title: "首页"
      },
    },
    {
      path: "/addressPage",
      name: "addressPage",
      component: () => import("../views/AddressPage/AddressPage.vue"),
      meta: {
        title: "地址列表"
      },
    },
    {
      path: "/editAddress",
      name: "editAddress",
      component: () => import("../views/AddressPage/EditAddress.vue"),
      meta: {
        title: "编辑地址"
      },
    },
    {
      path: "/TestOne",
      name: "TestOne",
      component: () => import("../views/TestPage/TestOne.vue"),
      meta: {
        title: "TestOne"
      },
    },
    {
      path: "/TestTwo",
      name: "TestTwo",
      component: () => import("../views/TestPage/TestTwo.vue"),
      meta: {
        title: "TestTwo"
      },
    },
    {
      path: "/TestThree",
      name: "TestThree",
      component: () => import("../views/TestPage/TestThree.vue"),
      meta: {
        title: "TestThree"
      },
    },
    {
      path: "/TestFour",
      name: "TestFour",
      component: () => import("../views/TestPage/TestFour.vue"),
      meta: {
        title: "TestFour"
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