<template>
  <div>
    <!-- 子组件导航栏 -->
    <MyNavBar :navBarTitle="nav.title" :navBarLeftText="nav.leftButtonText" @leftClick="handleLeftClick"
      :navBarRightText="nav.rightButtonText" @rightClick="handleRightClick" />
    <div class="container">
      <button @click="toggleVisibility">切换可见性</button>
      <!-- 这个 div 不会在页面上显示 -->
      <div style="display: none;">这是一个隐藏的元素</div>
      <!-- 也可以使用绑定的方式 -->
      <div :style="{ display: 'block' }">根据条件显示或隐藏</div>

      <div :style="{ display: isHidden ? 'none' : 'block', color: 'black', fontSize: '18px' }">
        美国总统特朗普在当地时间2月26日的内阁会议上证实乌克兰总统泽连斯基将于本周五访美，并签署有关乌克兰稀土矿产及其他事项的协议。不过特朗普强调，美国不会向乌克兰提供太多安全保障。但乌克兰方面认为，这份协议是向美国争取安全保障的核心所在。泽连斯基2月26日当天在基辅对媒体表示，这份协议是大获成功还是悄然消失，全都取决于与特朗普的对话。他将在周五访美时直接向特朗普提三个问题：美国是否还支持乌克兰？乌克兰能否从美国购买武器？乌克兰能否用被冻结的俄罗斯资产买武器？美国总统特朗普在当地时间2月26日的内阁会议上证实乌克兰总统泽连斯基将于本周五访美，并签署有关乌克兰稀土矿产及其他事项的协议。不过特朗普强调，美国不会向乌克兰提供太多安全保障。但乌克兰方面认为，这份协议是向美国争取安全保障的核心所在。泽连斯基2月26日当天在基辅对媒体表示，这份协议是大获成功还是悄然消失，全都取决于与特朗普的对话。他将在周五访美时直接向特朗普提三个问题：美国是否还支持乌克兰？乌克兰能否从美国购买武器？乌克兰能否用被冻结的俄罗斯资产买武器？2016年3月，习近平总书记参加十二届全国人大四次会议黑龙江代表团审议时首次提出：“绿水青山是金山银山，黑龙江的冰天雪地也是金山银山。”从“绿水青山就是金山银山”到“冰天雪地也是金山银山”，一条因地制宜把资源优势变发展优势的可持续发展之路，已然明晰。今年春节前后，习近平总书记20天内两赴东北，足迹踏遍东北三省。在辽宁，他说，“越是发展任务重，越要重视生态环境保护，推动经济社会发展全面绿色转型”；在哈尔滨亚冬会开幕式欢迎宴会上，他说，“来到哈尔滨，我们真切感受到‘冰天雪地也是金山银山’，冰雪文化和冰雪经济正在成为哈尔滨高质量发展的新动能和对外开放的新纽带”；
      </div>

      <div style="display: inline; background-color: lightgreen;">
        这个 div 现在是行内元素
      </div>
      <br />
      <div style="display: inline; background-color: lightyellow;">
        另一个行内元素
      </div>

      <div>{{ arr }}</div>
      <div class="button-group">
        <button class="button-style" @click="handleChangeArr(1)">数组(增操作)</button>
        <button class="button-style" @click="handleChangeArr(2)">数组(倒序)</button>
        <button class="button-style" @click="handleChangeArr(3)">新窗口打开PDF</button>
      </div>

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
  }
};
</script>

<style lang="less" scoped>
.container {
  padding: 20px;
}

.button-group {
  display: flex;
  flex-direction: column;

  .button-style {
    margin-top: 10px;
    width: 150px;
    height: 30px;
    min-height: 30px;
  }
}
</style>