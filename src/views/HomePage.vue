<!-- 结构 -->
<template>
  <div>
    <!-- 子组件导航栏 -->
    <MyNavBar :navBarTitle="nav.title" :navBarLeftText="nav.leftButtonText" @leftClick="handleLeftClick"
      :navBarRightText="nav.rightButtonText" @rightClick="handleRightClick" :isShowLeftArrow="false" />

    <div class="contiainer">
      <div v-for="(item, index) in vcArr" :key="index">
        <van-button class="button-box" color="linear-gradient(to right, #ff6034, #ee0834)"
          @click="onClickButton(index)">
          跳转{{ item }}
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
        rightButtonText: "地址"
      },
      vcArr: ['TestOne', 'TestTwo', 'TestThree', 'TodoList', 'LocalStorage'],
    }
  },
  methods: {
    handleLeftClick(data) {
      console.log('父组件接收到左侧按钮点击事件数据：', data);
    },
    handleRightClick(data) {
      console.log('父组件接收到右侧按钮点击事件数据：', data);
      this.$router.push({
        path: '/addressPage'
      });
    },
    onClickButton(index) {
      let page = this.vcArr[index];
      console.log(index, page);
      this.$router.push({
        path: page
      });
    },

  },
}
</script>

<!-- 样式 -->
<style scoped lang='less'>
.contiainer {
  padding: 10px;
  height: 100%;
  display: flex; // 使用 flex 布局
  flex-wrap: wrap; // 允许子元素换行
  gap: 10px; // 设置按钮之间的间距
}

.button-box {
  height: 50px;
  border-radius: 25px;
  font-size: 18px;
}
</style>