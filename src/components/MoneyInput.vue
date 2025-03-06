<!-- 结构 -->
<template>
  <div>
    <van-field v-model="value" label="用户名" placeholder="请输入用户名" class="input-box" clearable />
    <div class="div_box">姓名: {{ name }}</div>
    <div class="div_box">年龄: {{ age }}</div>
  </div>
</template>

<!-- 逻辑处理 -->
<script>

export default {
  name: 'MoneyInput',
  // props第一种方式: 简单接受
  // props: ['name','age'],

  // props第二种方式: 接收的同时对数据进行类型限制
  // props: {
  //   name: String,
  //   age: Number,
  // },

  // props第三种方式: 接收的同时对数据进行类型限制+默认值的指定+必要性的限制
  props: {
    name: {
      type: String,
      required: true,
    },
    age: {
      type: Number,
      default: 99,
    }
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
.div_box {
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