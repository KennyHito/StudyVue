<!-- 结构 -->
<template>
  <div class="placeholder-box">{{ placeholderText }}</div>
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

    }
  },
  mounted() {

  },
  methods: {

  },
  computed: {

  },
}
</script>


<!-- 样式 -->
<style scoped lang='less'>
.placeholder-box {
  font-size: 30px;
  color: orange;
}
</style>