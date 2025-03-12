<!-- 结构 -->
<template>
  <div class="div-box">
    <span class="name-style">{{ name }}</span>
    <div class="money-style" v-if="money">
      <span>{{ money }}</span>
      <button class="btn-box" @click="handleThank">谢谢哥哥</button>
    </div>
  </div>
</template>

<!-- 逻辑处理 -->
<script>
// 引入其他组件


export default {
  name: 'BSonPage',
  data() {
    return {
      name: "我是弟弟",
      money: ""
    }
  },
  methods: {
    handleThank() {
      this.$bus.$emit('thankBrother');
    },
    receiveMoneyMethod(data) {
      console.log("receiveMoneyMethod");
      this.money = '我收到了哥哥给我的' + data + '元钱!';
    }
  },
  mounted() {
    //写法一
    // this.$bus.$on('giveMoney', (data) => {
    //   console.log("箭头函数回调接收!");
    //   this.money = '我收到了哥哥给我的' + data + '元钱!';
    // })

    //写法二
    this.$bus.$on('giveMoney', this.receiveMoneyMethod);
  },
  beforeDestroy() {
    // 用完全局事件最好用完就解绑(哪个组件写$on就在哪个组件写$off)
    this.$bus.$off('giveMoney');
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
      width: 120px;
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