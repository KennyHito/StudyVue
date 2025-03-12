<!-- 结构 -->
<template>
  <div class="div-box">
    <span>{{ name }}</span>
    <button class="btn-box" @click="handleGive">给弟弟零花钱</button>
  </div>
</template>

<!-- 逻辑处理 -->
<script>
// 引入其他组件
import PubSub from 'pubsub-js';

export default {
  name: 'ASonPage',
  data() {
    return {
      name: "我是哥哥"
    }
  },
  methods: {
    handleGive() {
      PubSub.publish('giveMoney', 666);
    }
  }
}
</script>


<!-- 样式 -->
<style scoped lang='less'>
.div-box {
  margin-top: 20px;
  font-size: 24px;
  height: 200px;
  background-color: indianred;
  display: flex;
  justify-content: center;
  align-items: center;
  color: white;
  border-radius: 10px;
  flex-direction: column;
}

.btn-box {
  margin-top: 20px;
  height: 50px;
  min-height: 50px;
  background-color: yellow;
  color: red;
  border-radius: 10px;
  border: 2 black;
}
</style>