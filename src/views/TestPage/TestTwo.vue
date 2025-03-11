<template>
  <div>
    <!-- 子组件导航栏 -->
    <MyNavBar :navBarTitle="nav.title" :navBarLeftText="nav.leftButtonText" @leftClick="handleLeftClick"
      :navBarRightText="nav.rightButtonText" @rightClick="handleRightClick" />
    <div class="container">

      <div style="display: inline; background-color: lightgreen;">
        这个 div 现在是行内元素
      </div>
      <br />
      <div style="display: inline; background-color: lightyellow;">
        另一个行内元素
      </div>

      <hr />

      <div>{{ arr }}</div>
      <div class="button-group">
        <button class="button-style" @click="handleChangeArr(1)">数组(增操作)</button>
        <button class="button-style" @click="handleChangeArr(2)">数组(倒序)</button>
        <button class="button-style" @click="handleChangeArr(3)">新窗口打开PDF</button>
      </div>

      <hr />

      <!-- 也可以使用绑定的方式 -->
      <div :style="{ display: 'block', fontSize: '20px' }">👇🏻点击按钮显示或隐藏👇🏻:</div>
      <button @click="toggleVisibility"
        :style="{ backgroundColor: 'red', color: 'yellow', borderRadius: '15px', height: '30px', lineHeight: '20px' }">切换可见性</button>

      <div :style="{ display: isHidden ? 'none' : 'block', color: 'black', fontSize: '20px' }">
        2016年3月，习近平总书记参加十二届全国人大四次会议黑龙江代表团审议时首次提出：“绿水青山是金山银山，黑龙江的冰天雪地也是金山银山。”从“绿水青山就是金山银山”到“冰天雪地也是金山银山”，一条因地制宜把资源优势变发展优势的可持续发展之路，已然明晰。今年春节前后，习近平总书记20天内两赴东北，足迹踏遍东北三省。在辽宁，他说，“越是发展任务重，越要重视生态环境保护，推动经济社会发展全面绿色转型”；在哈尔滨亚冬会开幕式欢迎宴会上，他说，“来到哈尔滨，我们真切感受到‘冰天雪地也是金山银山’，冰雪文化和冰雪经济正在成为哈尔滨高质量发展的新动能和对外开放的新纽带”；
      </div>

      <hr />

    </div>
  </div>
</template>

<script>
// 引入其他组件
import MyNavBar from '@/components/MyNavBar.vue';

export default {
  name: "TestTwo",
  components: {
    MyNavBar
  },
  data() {
    return {
      nav: {
        title: "测试_2",
        leftButtonText: "",
        rightButtonText: ""
      },
      isHidden: false,
      arr: [1, 32, 45, 6, 3, 12, 29],
      pdfUrl: "https://testcbb.lczq.com/static/agreement/admin/20230322/9b3f470a-b106-4c64-bc5e-f08f538fb71b.PDF",
      pages: [],
      scale: 1,
    };
  },
  mounted() {
  },
  methods: {
    handleLeftClick() {
      this.$router.back();
    },
    handleRightClick() {

    },
    toggleVisibility() {
      this.isHidden = !this.isHidden;
    },
    handleChangeArr(type) {
      if (type === 1) {
        this.arr.push(99);
        console.log(this.arr);

        setTimeout(() => {
          console.log('🐶当前时间:' + new Date().toLocaleString() + ',打印的内容是--->', this);

          this.arr[0] = Math.round(Math.random() * 100);
          console.log(this.arr);
          this.$forceUpdate()
        }, 3000);
      } else if (type === 2) {
        this.arr.reverse();
      } else if (type === 3) {
        // PDF 文件的 URL
        // 在新窗口中打开 PDF 文件
        window.open(this.pdfUrl, '_blank');
      }
    }
  },
  beforeDestroy() {
    console.log('页面即将销毁');
  },
  destroyed() {
    console.log('页面已销毁');
  },
};
</script>

<style scoped lang='less'>
.container {
  padding: 20px;
  font-size: 20px;
}

.button-group {
  display: flex;
  flex-direction: column;
  margin-bottom: 10px;

  .button-style {
    margin-left: 0px;
    margin-right: 0px;
    margin-top: 10px;
    height: 40px;
    min-height: 40px;
    background-color: cadetblue;
    border-radius: 20px;
    color: white;
  }
}
</style>