<!-- 结构 -->
<template>
  <div class="div-box">
    <span class="name-style">{{ name }}</span>
    <div class="money-style" v-if="money">
      <span>收到了哥哥给的{{ money }}元零花钱!</span>
    </div>
  </div>
</template>

<!-- 逻辑处理 -->
<script>
// 引入其他组件
import PubSub from 'pubsub-js';

export default {
  name: 'BSonPage',
  data() {
    return {
      name: "我是弟弟",
      money: ""
    }
  },
  methods: {
    receiveMoneyMethod(msgName, data) {
      console.log("receiveMoneyMethod", msgName, data);
      this.money = data;
    }
  },
  mounted() {
    // 方法一
    this.pubID = PubSub.subscribe('giveMoney', (msgName, data) => {
      console.log("箭头函数回调方式", msgName, data);
      this.money = data;
    })

    //方法二
    // this.pubID = PubSub.subscribe('giveMoney', this.receiveMoneyMethod);
  },
  beforeDestroy() {
    // 用完消息订阅的,最好用完就解绑,哪个组件订阅就哪个组件解绑
    PubSub.unsubscribe(this.pubID)
  }
}
</script>


<!-- 样式 -->
<style scoped lang='less'>
.div-box {
  margin-top: 20px;
  font-size: 24px;
  height: 200px;
  background-color: orange;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 10px;
  flex-direction: column;

  .name-style {
    color: white;
  }

  .money-style {
    margin-top: 10px;
    color: red;
    font-size: 18px;
    display: flex;
    flex-direction: column;
    align-items: center;


    .btn-box {
      width: 100px;
      margin-top: 20px;
      height: 40px;
      min-height: 40px;
      background-color: yellow;
      color: red;
      border-radius: 10px;
      border: 2 black;
    }
  }

}
</style>