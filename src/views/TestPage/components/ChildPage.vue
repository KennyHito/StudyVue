<!-- 结构 -->
<template>
  <div class="child-box">
    蓝色区域为子组件
    <van-field class="input-box" v-model="username" label="用户名" placeholder="请输入用户名" clearable />
    <div class="div-box">父组件传递过来的姓名: {{ name }}</div>
    <div class="div-box">父组件传递过来的年龄: {{ age }}</div>
    <button class="btn-box" @click="handleChildToParOne">子传父方法一(props)</button>
    <button class="btn-box" @click="handleChildToParTwo">子传父方法二(自定义事件)</button>
    <button class="btn-box" @click="handleChildToParThree">子传父方法三($bus)</button>
  </div>
</template>

<!-- 逻辑处理 -->
<script>

export default {
  name: 'ChildPage',
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
      this.username = "";
    },
    handleChildToParOne() {
      if (this.username === '') {
        this.$toast('请输入用户名')
        return
      }
      this.getChildMethod("方法一,通过props的方式传给父组件用户名:" + this.username);
      this.username = "";
    },
    handleChildToParTwo() {
      if (this.username === '') {
        this.$toast('请输入用户名')
        return
      }
      this.$emit("childToParTwo", "方法二,通过$emit的方式传给父组件用户名:" + this.username);
      this.username = "";
    },
    handleChildToParThree() {
      if (this.username === '') {
        this.$toast('请输入用户名')
        return
      }
      this.$bus.$emit("childToParThree", "方法三,通过全局$bus方式传给父组件用户名:" + this.username);
      this.username = "";
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