<!-- 结构 -->
<template>
  <div>
    <!-- 子组件导航栏 -->
    <MyNavBar :navBarTitle="nav.title" :navBarLeftText="nav.leftButtonText" @leftClick="handleLeftClick"
      :navBarRightText="nav.rightButtonText" @rightClick="handleRightClick" />
    <div class="container">
      绿色区域是父组件,那两个都是子组件,实现的内容是两个兄弟之间、爷孙之间或者更多层组件之间的数据传递的功能。采用的三方pubsub-js组件,需要要手动安装。
      <ASonPage />
      <BSonPage />
    </div>
  </div>
</template>

<!-- 逻辑处理 -->
<script>
// 引入其他组件
import MyNavBar from '@/components/MyNavBar.vue'
import ASonPage from './components/ASonPage.vue'
import BSonPage from './components/BSonPage.vue'

export default {
  name: 'PubSubPage',
  components: {
    MyNavBar,
    ASonPage,
    BSonPage
  },
  created() {
    this.nav.title = this.$route.query.title;
  },
  data() {
    return {
      nav: {
        title: "",
        leftButtonText: "",
        rightButtonText: ""
      },
    }
  },
  methods: {
    handleLeftClick() {
      this.$router.back();
    },
    handleRightClick() {

    },

  },
}
</script>


<!-- 样式 -->
<style scoped lang='less'>
.container {
  min-height: calc(100vh - 46px); // 46px为导航栏van-nav-bar的高度
  background-color: rgb(0, 255, 170);
  padding: 20px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  justify-items: center;
  text-align: center;
  font-size: 20px;
  color: black;
  font-weight: 600;
}
</style>