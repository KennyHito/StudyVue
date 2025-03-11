<!-- 结构 -->
<template>
  <div>
    <!-- 子组件导航栏 -->
    <MyNavBar :navBarTitle="nav.title" :navBarLeftText="nav.leftButtonText" @leftClick="handleLeftClick"
      :navBarRightText="nav.rightButtonText" @rightClick="handleRightClick" />

    <div class="content-box">
      <button @click="showDOM">点我获取h1的内容</button>
      <h1 v-text="msg" ref="h1Title" style="font-size: 18px;"></h1>
      <hr />
      <div class="text">x的值为:{{ x }},y的值为:{{ y }}</div>
      <hr />
      <input v-fbind:value="money">
      <hr />
      <div>nanoid用于获取唯一字符串,类似UUID: {{ noxxx }}</div>
      <hr />
      <p>我是定时器: {{ timeCount }}</p>
    </div>

    <van-goods-action class="bottom-box">
      <van-goods-action-icon icon="chat-o" text="客服" @click="onClickIcon(1)" />
      <van-goods-action-icon icon="cart-o" text="购物车" @click="onClickIcon(2)" />
      <van-goods-action-icon icon="shop-o" text="店铺" @click="onClickIcon(3)" />
      <van-goods-action-button type="danger" text="立即购买" @click="onClickIcon(4)" />
    </van-goods-action>

  </div>
</template>

<!-- 逻辑处理 -->
<script>
// 引入其他组件
import MyNavBar from '@/components/MyNavBar.vue';
import { nanoid } from 'nanoid';

export default {
  name: 'TestThree',
  components: {
    MyNavBar
  },
  data() {
    return {
      nav: {
        title: "测试_3",
        leftButtonText: "",
        rightButtonText: ""
      },
      msg: "我是h1标签内容!我是h1标签内容!我是h1标签内容!我是h1标签内容!我是h1标签内容!我是h1标签内容!我是h1标签内容!我是h1标签内容!我是h1标签内容!我是h1标签内容!我是h1标签内容!我是h1标签内容!我是h1标签内容!",
      money: 100,
      noxxx: '',
      timer: null,
      timeCount: 0,
    }
  },
  mounted() {
    this.noxxx = nanoid();
    //启动定时器
    this.timer = setInterval(() => {
      this.timeCount++;
    }, 1000);
  },
  methods: {
    handleLeftClick() {
      this.$router.back();
    },
    handleRightClick() {

    },
    showDOM() {
      this.$toast(this.$refs.h1Title.innerHTML);
    },
    onClickIcon(tag) {
      switch (tag) {
        case 1:
          this.$toast('我是客服');
          break;
        case 2:
          this.$toast('我是购物车');
          break;
        case 3:
          this.$toast('我是店铺');
          break;
        case 4:
          this.$toast('我是立即购买');
          break;
        default:
          break
      }
    }
  },
  computed: {

  },
  beforeDestroy() {
    console.log('页面即将销毁');
    if (this.timer) {
      clearInterval(this.timer);
      this.timer = null;
    }
  },
  destroyed() {
    console.log('页面已销毁');
  },
}
</script>

<!-- 样式 -->
<style scoped lang='less'>
.content-box {
  padding: 10px;
}

.bottom-box {
  font-size: 20px;
}
</style>