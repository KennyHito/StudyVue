<template>
  <div>
    <!-- 子组件导航栏 -->
    <MyNavBar :navBarTitle="nav.title" :navBarLeftText="nav.leftButtonText" @leftClick="handleLeftClick"
      :navBarRightText="nav.rightButtonText" @rightClick="handleRightClick" />

    <div class="container">
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
      <div class="student-box">{{ student.about | mySplice }}</div>

      <p class="text-box" v-html="msg"></p>
      <div class="img-box">
        <img alt="" src="https://img-xhpfm.xinhuaxmt.com/News/202412/105012024121700012391.gif">
      </div>

    </div>
  </div>
</template>

<script>
// 引入其他组件
import MoneyInput from '@/components/MoneyInput.vue'
import MyNavBar from '@/components/MyNavBar.vue';
import { common } from '../../mixin/common'

export default {
  name: "TestOne",
  mixins: [common],
  components: {
    MoneyInput,
    MyNavBar
  },
  created() {

  },
  mounted() {
    this.studentName = "张三";
    this.studentAge = 18;
  },
  data() {
    return {
      nav: {
        title: "测试_1",
        leftButtonText: "返回",
        rightButtonText: "啊啊啊"
      },
      date: new Date(),
      currData: [2, 4, 3, 13, 53, 23, 56, 99, 37],
      selectedOption: "1",
      studentName: "",
      studentAge: 0,
      msg: '&nbsp;&nbsp;&nbsp;&nbsp;春耕备耕时节，总书记走进湖南省常德市鼎城区谢家铺镇港中坪村粮食生产万亩综合示范片区，察看秧苗培育和春耕备耕进展，听取高质量推进农业现代化情况介绍。一辆辆收割机穿梭在农田中，展现着现代化农业全链条作业的魅力。<br>&nbsp;&nbsp;&nbsp;&nbsp;新型职业农民、新型经营主体、新的技术理念，孕育着更加丰硕的未来。良好生态环境是农村最大优势和宝贵财富。渔获时节，总书记时隔23年再来东山，指出做好“海”的文章。福建省漳州市东山县澳角村近年来扎实推进海洋生态保护修复，坚持“陆海统筹”思路，海域生态环境明显好转。<br>&nbsp;&nbsp;&nbsp;&nbsp;农业农村工作，说一千、道一万，增加农民收入是关键。丰收时节，总书记走进甘肃省天水市麦积区南山花牛苹果基地。红彤彤的花牛苹果挂满枝头，他鼓励大家“把这个特色产业做得更大，带动更多群众增收致富”。广袤乡村，一个个看似普通的土特产正变成乡亲们增收致富的新引擎。在湖北省咸宁市潘家湾镇十里蔬菜长廊，总书记走进田间，察看蔬菜长势，叮嘱当地“把蔬菜种植这个富民产业进一步做好”。通过“公司+合作社+农户”生产模式，十里蔬菜长廊目前已带动周边1.7万农民参与经营、务工，帮助农民增收。',
      radio: '1',
      student: {
        name: "张三",
        age: 18,
        address: "北京市朝阳区中建财富国际中心25层",
        about: "努力赚钱，不是因为爱钱。而是这辈子不想因为钱和谁在一起，也不想因为钱而离开谁。如果问爱情和面包我选择什么，我会说：你给我爱情就好，面包我自己买。"
      }
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
  }
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
</style>