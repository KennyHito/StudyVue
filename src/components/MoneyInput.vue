<!-- 结构 -->
<template>
  <div class="child-box">
    蓝色区域为子组件
    <van-field class="input-box" v-model="username" label="用户名" placeholder="请输入用户名" clearable />
    <div class="div-box">父组件传递过来的姓名: {{ name }}</div>
    <div class="div-box">父组件传递过来的年龄: {{ age }}</div>
    <button class="btn-box" @click="handleChildToParOne">子传父方法一(props)</button>
    <button class="btn-box" @click="handleChildToParTwo">子传父方法二(自定义事件)</button>
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
      username: ''
    }
  },
  mounted() {

  },
  methods: {
    showUserName() {
      if (this.username === '') {
        this.$toast('请输入用户名')
        return
      }
      this.$toast("输入的用户名:" + this.username)
    },
    handleChildToParOne() {
      this.getChildMethod("方法一:我是子组件的内容");
    },
    handleChildToParTwo() {
      this.$emit("childToParTwo", "方法二:我是子组件的内容");
    }
  },
  computed: {

  },
}
</script>


<!-- 样式 -->
<style scoped lang='less'>
.child-box {
  border-radius: 10px;
  font-size: 20px;
  background-color: cornflowerblue;
  color: white;
  padding: 10px;
  display: flex;
  flex-direction: column;
  gap: 10px;
  font-weight: 600;
  text-align: center;

  .input-box {
    background-color: aliceblue;
    border: 1px solid #ccc;
    border-radius: 10px;
    font-size: 20px;
  }

  .div-box {
    font-size: 20px;
    color: orange;
  }

  .btn-box {
    height: 40px;
    min-height: 40px;
    border-radius: 20px;
    font-size: 18px;
    color: black;
  }
}
</style>