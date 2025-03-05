<!-- 结构 -->
<template>
  <div>
    <van-field v-model="value" label="用户名" placeholder="请输入用户名" class="input-box" clearable />
    <div class="placeholder-box">{{ placeholderText }}</div>
  </div>
</template>

<!-- 逻辑处理 -->
<script>

export default {
  props: {
    placeholderText: {//placeholderText字段名和父组件字段名一致即可
      type: String,//字段类型
      default() {
        return "";//字段默认值
      },
    },
  },
  data() {
    return {
      value: ''
    }
  },
  mounted() {

  },
  methods: {
    showMoney() {
      alert(this.value)
    }
  },
  computed: {

  },
}
</script>


<!-- 样式 -->
<style scoped lang='less'>
.placeholder-box {
  font-size: 20px;
  color: orange;
}

.input-box {
  background-color: aliceblue;
  border: 1px solid #ccc;
  border-radius: 10px;
  font-size: 20px;
}
</style>