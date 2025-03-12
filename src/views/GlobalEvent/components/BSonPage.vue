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
    }
  },
  mounted() {
    this.$bus.$on('giveMoney', (data) => {
      this.money = '我收到了哥哥给我的' + data + '元钱!';
    })
  },
  beforeDestroy() {
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