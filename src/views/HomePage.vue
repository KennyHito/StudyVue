<!-- 结构 -->
<template>
  <div>
    <!-- 子组件导航栏 -->
    <MyNavBar :navBarTitle="nav.title" :navBarLeftText="nav.leftButtonText" @leftClick="handleLeftClick"
      :navBarRightText="nav.rightButtonText" @rightClick="handleRightClick" :isShowLeftArrow="false" />

    <div class="contiainer">
      <div v-for="(item, index) in vcArr" :key="index" class="button-container">
        <van-button class="button-box" color="linear-gradient(to right, #ff6034, #ee0834)"
          @click="handleVCBtnClick(index)">
          {{ item.title }}
        </van-button>
      </div>
    </div>

  </div>
</template>

<!-- 逻辑处理 -->
<script>
import MyNavBar from '@/components/MyNavBar.vue';

export default {
  name: 'HomePage',
  components: {
    MyNavBar
  },
  data() {
    return {
      nav: {
        title: "我是首页",
        leftButtonText: "",
        rightButtonText: ""
      },
      vcArr: [
        {
          vc: 'TestPage',
          title: '测试页面'
        },
        {
          vc: 'AddressPage',
          title: '地址列表'
        },
        {
          vc: 'TodoList',
          title: '写一个Todo-List案例'
        },
        {
          vc: 'LocalStorage',
          title: '本地缓存功能'
        },
        {
          vc: 'SchoolOrStudent',
          title: '组件传递-自定义事件'
        },
        {
          vc: 'GlobalEvent',
          title: '组件传递-全局事件$bus'
        },
        {
          vc: 'PubSubPage',
          title: '组件传递-消息订阅与发布'
        },
        {
          vc: 'AnimationPage',
          title: '动画效果'
        },
        {
          vc: 'SearchGithubPage',
          title: '搜索GitHub上用户'
        },
        {
          vc: 'SlotPage',
          title: 'slot组件插槽'
        },
        {
          vc: 'VuexPage',
          title: '两种方式实现两个数加减(普通&vuex)'
        },
        {
          vc: 'VuexSharedPage',
          title: 'vuex多组件数据共享'
        },

      ],
    }
  },
  methods: {
    handleLeftClick() {

    },
    handleRightClick() {

    },
    handleVCBtnClick(index) {
      let item = this.vcArr[index];
      console.log('点击了第' + (index + 1) + '个按钮，按钮内容是：' + item.title);
      this.$router.push({
        // 第一种: 使用query携带参数,可以path或者name(常用)
        path: item.vc,
        query: {
          title: item.title
        },

        // 第二种: 使用params,注意的是必须只能是name,name必须在路由中配置,否则跳转到下一个页面都是空白页面
        // name: item.vc,
        // params: {
        //   title: item.title
        // }
      });
    },
  }
}
</script>

<!-- 样式 -->
<style scoped lang='less'>
.contiainer {
  height: 100%;
}

.button-container {
  text-align: center;
  margin: 10px 0;
  padding-left: 15px;
  padding-right: 15px;
}

.button-box {
  width: 100%;
  height: 50px;
  min-height: 50px;
  border-radius: 25px;
  font-size: 18px;
}
</style>