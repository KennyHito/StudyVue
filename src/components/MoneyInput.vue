<!-- 结构 -->
<template>
  <div>
    <van-field v-model="value" label="用户名" placeholder="请输入用户名" class="input-box" clearable />
    <div class="div_box">父组件传递过来的姓名: {{ name }}</div>
    <div class="div_box">父组件传递过来的年龄: {{ age }}</div>
    <button @click="handleChileToPar">子组件内容传递给父组件(看打印)</button>
  </div>
</template>

<!-- 逻辑处理 -->
<script>

export default {
  name: 'MoneyInput',
  // props第一种方式: 简单接受
  props: ['name', 'age', 'getChildMethod'],

  // props第二种方式: 接收的同时对数据进行类型限制
  // props: {
  //   name: String,
  //   age: Number,
  // },

  // props第三种方式: 接收的同时对数据进行类型限制+默认值的指定+必要性的限制
  // props: {
  //   name: {
  //     type: String,
  //     required: true,
  //   },
  //   age: {
  //     type: Number,
  //     default: 99,
  //   }
  // },
  data() {
    return {
      value: ''
    }
  },
  mounted() {

  },
  methods: {
    showMoney() {
      if (this.value === '') {
        this.$toast('请输入用户名')
        return
      }
      this.$toast("输入的用户名:" + this.value)
    },
    handleChileToPar() {
      this.getChildMethod("我是子组件的内容");
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