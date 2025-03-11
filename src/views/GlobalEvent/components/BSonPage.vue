<!-- 结构 -->
<template>
  <div class="div-box">
    <span>{{ name }}</span>
  </div>
</template>

<!-- 逻辑处理 -->
<script>
// 引入其他组件


export default {
  name: 'BSonPage',
  data() {
    return {
      name: "我是老二,我叫张嘻嘻"
    }
  },
  mounted() {
    this.$bus.$on('giveMoney', (data) => {
      this.name = '我收到了大哥给我的' + data + '元钱!';
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
  color: white;
  border-radius: 10px;
}
</style>