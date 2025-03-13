<!-- 结构 -->
<template>
  <div>
    <!-- 子组件导航栏 -->
    <MyNavBar :navBarTitle="nav.title" :navBarLeftText="nav.leftButtonText" @leftClick="handleLeftClick"
      :navBarRightText="nav.rightButtonText" @rightClick="handleRightClick" :isShowLeftArrow="false" />

    <div class="contiainer">
      <div v-for="(item, index) in vcArr" :key="index">
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
        path: item.vc,
        query: {
          title: item.title
        }
      });
    },
  }
}
</script>

<!-- 样式 -->
<style scoped lang='less'>
.contiainer {
  padding: 10px;
  height: 100%;
  text-align: center;
  // display: flex; // 使用 flex 布局
  // flex-wrap: wrap; // 允许子元素换行
  // gap: 10px; // 设置按钮之间的间距
}

.button-box {
  width: 300px;
  height: 50px;
  border-radius: 25px;
  font-size: 18px;
  margin-bottom: 15px;
}
</style>