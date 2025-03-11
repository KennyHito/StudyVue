<template>
  <div>
    <!-- 子组件导航栏 -->
    <MyNavBar :navBarTitle="nav.title" :navBarLeftText="nav.leftButtonText" @leftClick="handleLeftClick"
      :navBarRightText="nav.rightButtonText" @rightClick="handleRightClick" />

    <div class="container" :style="{ marginBottom: hasSafeArea ? '84px' : '50px' }">
      <!-- 子组件MoneyInput -->
      <van-button class="button-box" color="linear-gradient(to right,#EA5514,#EB6821,#EC7A2E,#ED8B3C,#EE9C4B)"
        @click="handleClick">
        获取输入的用户名
      </van-button>

      <MoneyInput :name="studentName" :age="studentAge" ref="moneyInputRef" />

      <div
        style="font-size: 20px;margin-left: 0px;margin-right: 0px;background-color: burlywood;text-align: center;border-radius: 10px;">
        字符串转日期:{{ formattedDate }}
      </div>

      <div
        :style="{ marginTop: '10px', fontSize: '15px', height: '20px', lineHeight: '20px', backgroundColor: '#3EF322', textAlign: 'center', borderRadius: '10px' }">
        全局配置属性: {{
          $apiBaseUrl }}</div>

      <div>
        <van-radio-group class="radio-group-style" v-model="selectedOption">
          4、请选择性别：
          <van-radio name="1">男</van-radio>
          <van-radio name="2">女</van-radio>
        </van-radio-group>
      </div>

      <van-button class="button-box"
        color="linear-gradient(to right, #F1C78E,#BBD2CE,#F3B89E,#EB5E58,#F1D986,#E8C9AC,#CFA8D3,#E5C89E)"
        @click="showMsg">
        点击获取通知
      </van-button>

      <hr />

      <div>👇🏻 字符串截取: 👇🏻</div>
      <div class="student-box"> {{ student.about | mySplice }}</div>

      <hr />

      <div class="button-group">
        <button class="button-style" @click="showDOM">点我获取h1的内容</button>
        <h1 v-text="msg" ref="h1Title" style="font-size: 18px;"></h1>
      </div>

      <hr />

      <div class="text">x的值为:{{ x }},y的值为:{{ y }}</div>

      <hr />

      <div>👇🏻 进入页面输入框直接成为焦点: 👇🏻</div>
      <input v-fbind:value="money">

      <hr />

      <div>👇🏻 nanoid用于获取唯一字符串,类似UUID: 👇🏻</div>
      <div>{{ noxxx }}</div>

      <hr />

      <p>我是定时器: {{ timeCount }}</p>

      <hr />

      <div style="display: inline; background-color: lightgreen;">
        这个 div 现在是行内元素
      </div>
      <br />
      <div style="display: inline; background-color: lightyellow;">
        另一个行内元素
      </div>

      <hr />

      <div>数组内容为:{{ arr }}</div>

      <div class="button-group">
        <button class="button-style" @click="handleChangeArr(1)">数组(增操作)</button>
        <button class="button-style" @click="handleChangeArr(2)">数组(倒序)</button>
      </div>

      <hr />

      <div style="text-align: center;">
        <button @click="handleChangeArr(3)" style="border-radius: 10px;width: 250px;">新窗口打开PDF</button>
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
      <p class="text-box" v-html="news"></p>

      <div class="img-box">
        <img alt="" src="https://img-xhpfm.xinhuaxmt.com/News/202412/105012024121700012391.gif">
      </div>
    </div>

    <van-goods-action class="bottom-box">
      <van-goods-action-icon icon="chat-o" text="客服" @click="onClickIcon(1)" />
      <van-goods-action-icon icon="cart-o" text="购物车" @click="onClickIcon(2)" />
      <van-goods-action-icon icon="shop-o" text="店铺" @click="onClickIcon(3)" />
      <van-goods-action-button type="danger" text="立即购买" @click="onClickIcon(4)" />
    </van-goods-action>

  </div>
</template>

<script>
// 引入其他组件
import MoneyInput from '@/components/MoneyInput.vue'
import MyNavBar from '@/components/MyNavBar.vue';
import { common } from '../mixin/common'
import { nanoid } from 'nanoid';

export default {
  name: "TestOne",
  mixins: [common],
  components: {
    MoneyInput,
    MyNavBar
  },
  created() {
    this.nav.title = this.$route.query.title;
  },
  mounted() {

    this.studentName = "张三";
    this.studentAge = 18;

    this.noxxx = nanoid();

    this.checkSafeArea();
    //启动定时器
    this.timer = setInterval(() => {
      this.timeCount++;
    }, 1000);
  },
  data() {
    return {
      nav: {
        title: "测试页面",
        leftButtonText: "返回",
        rightButtonText: "啊啊啊"
      },
      date: new Date(),
      currData: [2, 4, 3, 13, 53, 23, 56, 99, 37],
      selectedOption: "1",
      studentName: "",
      studentAge: 0,
      news: '&nbsp;&nbsp;&nbsp;&nbsp;春耕备耕时节，总书记走进湖南省常德市鼎城区谢家铺镇港中坪村粮食生产万亩综合示范片区，察看秧苗培育和春耕备耕进展，听取高质量推进农业现代化情况介绍。一辆辆收割机穿梭在农田中，展现着现代化农业全链条作业的魅力。<br>&nbsp;&nbsp;&nbsp;&nbsp;新型职业农民、新型经营主体、新的技术理念，孕育着更加丰硕的未来。良好生态环境是农村最大优势和宝贵财富。渔获时节，总书记时隔23年再来东山，指出做好“海”的文章。福建省漳州市东山县澳角村近年来扎实推进海洋生态保护修复，坚持“陆海统筹”思路，海域生态环境明显好转。<br>&nbsp;&nbsp;&nbsp;&nbsp;农业农村工作，说一千、道一万，增加农民收入是关键。丰收时节，总书记走进甘肃省天水市麦积区南山花牛苹果基地。红彤彤的花牛苹果挂满枝头，他鼓励大家“把这个特色产业做得更大，带动更多群众增收致富”。广袤乡村，一个个看似普通的土特产正变成乡亲们增收致富的新引擎。在湖北省咸宁市潘家湾镇十里蔬菜长廊，总书记走进田间，察看蔬菜长势，叮嘱当地“把蔬菜种植这个富民产业进一步做好”。通过“公司+合作社+农户”生产模式，十里蔬菜长廊目前已带动周边1.7万农民参与经营、务工，帮助农民增收。',
      radio: '1',
      student: {
        name: "张三",
        age: 18,
        address: "北京市朝阳区中建财富国际中心25层",
        about: "努力赚钱，不是因为爱钱。而是这辈子不想因为钱和谁在一起，也不想因为钱而离开谁。如果问爱情和面包我选择什么，我会说：你给我爱情就好，面包我自己买。"
      },
      msg: "我是h1标签内容!我是h1标签内容!我是h1标签内容!我是h1标签内容!我是h1标签内容!我是h1标签内容!我是h1标签内容!我是h1标签内容!我是h1标签内容!我是h1标签内容!我是h1标签内容!我是h1标签内容!我是h1标签内容!",
      money: 100,
      noxxx: '',
      timer: null,
      timeCount: 0,
      isHidden: false,
      arr: [1, 32, 45, 6, 3, 12, 29],
      pdfUrl: "https://testcbb.lczq.com/static/agreement/admin/20230322/9b3f470a-b106-4c64-bc5e-f08f538fb71b.PDF",
      pages: [],
      hasSafeArea: false
    };
  },
  methods: {
    handleLeftClick() {
      this.$router.back();
    },
    handleRightClick() {
      this.$toast('啊啊啊');
    },
    handleClick() {
      this.$refs.moneyInputRef.showMoney();
    },
    showDOM() {
      this.$toast(this.$refs.h1Title.innerHTML);
    },
    onClickIcon(tag) {
      switch (tag) {
        case 1:
          this.$toast('我是客服');
          break;
        case 2:
          this.$toast('我是购物车');
          break;
        case 3:
          this.$toast('我是店铺');
          break;
        case 4:
          this.$toast('我是立即购买');
          break;
        default:
          break
      }
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
    },
    checkSafeArea() {
      // 检测是否为 iOS 设备
      const isIOS = /iPad|iPhone|iPod/.test(navigator.userAgent) && !window.MSStream;
      if (isIOS) {
        // 检测浏览器是否支持安全区域特性
        this.hasSafeArea =
          CSS.supports('padding-top: constant(safe-area-inset-top)') ||
          CSS.supports('padding-top: env(safe-area-inset-top)');
      }
    }
  },
  computed: {
    formattedDate() {
      let dateNum = "20240910";
      const date = new Date(
        dateNum.substring(0, 4),
        dateNum.substring(4, 6) - 1,
        dateNum.substring(6, 8)
      );
      return new Intl.DateTimeFormat('zh-CN', {
        year: 'numeric',
        month: 'long',
        day: '2-digit'
      }).format(date);
    }
  },
  beforeDestroy() {

  },
  destroyed() {

  },
};
</script>

<style scoped lang='less'>
.container {
  text-align: left;
  padding: 10px;
  font-size: 18px;
}

.radio-group-style {
  display: flex;
  margin-top: 10px;
}

.button-box {
  width: 300px;
  height: 50px;
  border-radius: 25px;
  font-size: 18px;
  margin: 5px;
}

.text-box {
  font-size: 20px;
}

.img-box {
  display: grid;
  place-items: center;
}

.student-box {
  font-size: 20px;
  color: orchid;
}

.button-group {
  display: flex;
  flex-direction: column;
  margin-bottom: 10px;
}

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
</style>