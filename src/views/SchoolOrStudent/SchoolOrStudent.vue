<template>
  <div class="app">
    <!-- 子组件导航栏 -->
    <MyNavBar :navBarTitle="nav.title" :navBarLeftText="nav.leftButtonText" @leftClick="handleLeftClick"
      :navBarRightText="nav.rightButtonText" @rightClick="handleRightClick" />

    <div class="container">
      <h1>{{ msg }}</h1>

      <!-- 通过父组件给子组件传递函数类型的props实现：子给父传递数据 -->
      <School :getSchoolName="getSchoolName" />

      <!-- 通过父组件给子组件绑定一个自定义事件实现：子给父传递数据（第一种写法，使用@或v-on） -->
      <Student @atguigu="getStudentName" />
    </div>
  </div>
</template>

<script>
// 引入其他组件
import MyNavBar from '@/components/MyNavBar.vue';
import Student from './components/Student'
import School from './components/School'

export default {
  name: 'SchoolOrStudent',
  components: {
    MyNavBar,
    School,
    Student
  },
  created() {
    this.nav.title = this.$route.query.title;
  },
  data() {
    return {
      nav: {
        title: "",
        leftButtonText: "",
        rightButtonText: ""
      },
      msg: '你好啊！',
    }
  },
  methods: {
    handleLeftClick() {
      this.$router.back();
    },
    handleRightClick() {

    },
    getSchoolName(name) {
      console.log('父组件收到了学校名：', name)
    },
    getStudentName(name, ...params) {
      console.log('父组件收到了学生名：', name, params)
    },
  },
  beforeDestroy() {

  },
  destroyed() {

  },
}
</script>

<style scoped lang='less'>
.container {
  background-color: gray;
  padding: 5px;
}
</style>
