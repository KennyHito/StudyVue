<template>
  <div>
    <!-- 子组件导航栏 -->
    <MyNavBar :navBarTitle="nav.title" :navBarLeftText="nav.leftButtonText" @leftClick="handleLeftClick"
      :navBarRightText="nav.rightButtonText" @rightClick="handleRightClick" />

    <div class="container" :style="{ marginBottom: hasSafeArea ? '84px' : '50px' }">


      <div>
        <button class="btn-common-style" @click="handleClick(16)">保存"苟七"</button>
        <button class="btn-common-style" @click="handleClick(17)">获取"苟七"</button>
        <button class="btn-common-style" @click="handleClick(18)">移除"苟七"</button>
        <p class="text-common-style">{{ routeConditions }}</p>
      </div>

      <hr />

      <div style="display: flex;flex-direction: column;align-items: center;">
        <van-button class="btn-common-style" @click="handleClick(0)">获取一张猫的图片(axios)</van-button>
        <div @click="bigPicClick">
          <van-image v-show="catData.url" :width="catData.height" :height="catData.height" :src="catData.url">
            <template v-slot:loading>
              <van-loading type="spinner" size="20" />
            </template>
          </van-image>
        </div>
        <van-image-preview v-model="bigPic.show" :images="bigPic.images" />
      </div>

      <hr />

      <van-button class="btn-common-style" @click="handleClick(1)">
        父传子(props)
      </van-button>
      <van-button class="btn-common-style" @click="handleClick(2)">
        父触发子方法(ref)
      </van-button>
      <div>{{ childOne.value }}</div>
      <div>{{ childTwo.value }}</div>
      <div>{{ childThree.value }}</div>
      <!-- ChildPage -->
      <ChildPage :name="studentName" :age="studentAge" ref="showUserNameRef" :getChildMethod="getChildMethod"
        @childToParTwo="childToParTwo" />

      <hr />

      <div>
        <button class="btn-common-style" @click="handleClick(13)">请求学生接口</button>
        <p class="text-common-style" v-if="localStudentApiData.length > 0">{{ localStudentApiData }}</p>
      </div>
      <div>
        <button class="btn-common-style" @click="handleClick(14)">请求汽车接口</button>
        <p class="text-common-style" v-if="localCarApiData.length > 0">{{ localCarApiData }}</p>
      </div>
      <div>
        <button class="btn-common-style" @click="handleClick(15)">请求天气接口</button>
        <p class="text-common-style" v-if="weatherData">{{ weatherData }}</p>
      </div>


      <hr />

      <div class="text-common-style" :style="{ fontWeight: 'bold' }">👇🏻 复习vuex: 👇🏻</div>
      <div class="text-common-style">1、通过$store.state.xixihaha的方式获取xxx的值:{{ $store.state.xixihaha.xxx }}</div>
      <div class="text-common-style">2、通过mapState的方式获取xxx的值:{{ xxx }}</div>

      <div class="text-common-style">3、通过$store.getters的方式获取用户信息:{{ $store.getters['xixihaha/personMsg'] }}</div>
      <div class="text-common-style">4、通过mapGetters的方式获取用户信息:{{ personMsg }}</div>

      <button class="btn-common-style" @click="cyFive(5)">5、通过$store.dispatch的方式获取xxx的值:{{ xxx }}</button>
      <button class="btn-common-style" @click="cySix(6)">6、通过mapAction的方式获取xxx的值:{{ xxx }}</button>

      <button class="btn-common-style" @click="cySeven(7)">7、通过$store.commit的方式获取xxx的值:{{ xxx }}</button>
      <button class="btn-common-style" @click="cyEight(8)">8、通过mapMutations的方式获取xxx的值:{{ xxx }}</button>
      <hr />

      <div class="text-common-style">👇🏻 当前日期和时间: 👇🏻</div>
      <div class="text-common-style" v-show="nowDateTime">{{ nowDateTime }}</div>

      <hr />

      <div class="text-common-style">👇🏻 nanoid用于获取唯一字符串,类似UUID: 👇🏻</div>
      <div class="text-common-style">{{ getNanoid }}</div>

      <hr />

      <p class="text-common-style">⚠️这里是定时器,记得在生命周期beforeDestroy方法中清除定时器: {{ timeCount }}</p>

      <hr />

      <div
        style="font-size: 20px;margin-left: 0px;margin-right: 0px;background-color: burlywood;text-align: center;border-radius: 10px;">
        字符串转日期:{{ formattedDate }}
      </div>

      <hr />

      <div class="text-common-style">
        <van-radio-group class="radio-group-style" v-model="selectedOption">
          请选择性别：
          <van-radio name="1">男</van-radio>
          <van-radio name="2">女</van-radio>
        </van-radio-group>
      </div>

      <hr />

      <van-button class="btn-common-style" @click="showMsg"> 通过mixin混入获取通知 </van-button>

      <hr />

      <div class="text-common-style">👇🏻 字符串截取: 👇🏻</div>
      <div class="text-common-style"> {{ student.about | mySplice }}</div>

      <hr />

      <div class="text-common-style">插件的方式: x的值为:{{ x }},y的值为:{{ y }}</div>

      <hr />

      <div class="text-common-style">👇🏻 进入页面输入框直接成为焦点: 👇🏻</div>
      <!-- <input v-fbind:value="student.name"> -->

      <hr />

      <div style="display: inline; background-color: lightgreen;font-size: 20px;">
        这个 div 现在是行内元素
      </div>
      <div style="display: inline; background-color: lightyellow;font-size: 20px;">
        另一个行内元素
      </div>

      <hr />

      <div class="text-common-style">数组内容为:{{ tempArr }}</div>
      <div>
        <button class="btn-common-style" @click="handleClick(3)">数组push</button>
        <button class="btn-common-style" @click="handleClick(4)">数组pop</button>
        <button class="btn-common-style" @click="handleClick(5)">数组unshift</button>
        <button class="btn-common-style" @click="handleClick(6)">数组shift</button>
        <button class="btn-common-style" @click="handleClick(7)">数组reverse</button>
        <button class="btn-common-style" @click="handleClick(8)">数组splice</button>
        <button class="btn-common-style" @click="handleClick(9)">数组filter(保留偶数)</button>
      </div>

      <hr />

      <button class="btn-common-style2" @click="handleClick(10)">新窗口打开在线PDF</button>

      <hr />

      <div>
        <button class="btn-common-style" @click="handleClick(11)">点我获取h1的内容</button>
        <h1 v-text="msg" ref="h1Title" style="font-size: 18px;"></h1>
      </div>

      <hr />

      <div class="text-common-style">👇🏻点击按钮显示或隐藏👇🏻:</div>
      <button @click="handleClick(12)" class="btn-common-style2">切换可见性</button>
      <p class="text-common-style" v-show="!isHidden" :style="{ backgroundColor: '#F5F5F5' }">
        绿水青山是金山银山,绿水青山是金山银山,绿水青山是金山银山,绿水青山是金山银山,绿水青山是金山银山,绿水青山是金山银山,绿水青山是金山银山,绿水青山是金山银山,绿水青山是金山银山,绿水青山是金山银山,绿水青山是金山银山,绿水青山是金山银山,绿水青山是金山银山,绿水青山是金山银山。
      </p>

      <hr />

      <video controls :src="movieUrl" style="width:100%"></video>
      <a :href="movieUrl" target="_blank">跳转查看视频</a>

      <hr />

      <p class="text-common-style" v-html="news"></p>

    </div>

    <van-goods-action>
      <van-goods-action-icon icon="chat-o" text="客服" @click="handleClick(996)" />
      <van-goods-action-icon icon="cart-o" text="购物车" @click="handleClick(997)" />
      <van-goods-action-icon icon="shop-o" text="店铺" @click="handleClick(998)" />
      <van-goods-action-button type="danger" text="立即购买" @click="handleClick(999)" />
    </van-goods-action>

  </div>
</template>

<script>
// 引入其他组件
import ChildPage from './components/ChildPage.vue'
import MyNavBar from '@/components/MyNavBar.vue';
import { common } from '../../mixin/common'
import { nanoid } from 'nanoid';
import http from '../../config/httpService.js'
import dayjs from 'dayjs';
import { mapActions, mapGetters, mapMutations, mapState } from 'vuex';

export default {
  name: "TestPage123",
  mixins: [common],
  components: {
    ChildPage,
    MyNavBar
  },
  created() {
    this.nav.title = this.$route.query.title;
    // this.nav.title = this.$route.params.title;
  },
  mounted() {
    console.log('⚠️测试打印的内容:--->mounted', this.$route);
    this.getNanoid = nanoid();
    this.movieUrl = process.env.VUE_APP_BASE_URL;
    this.checkSafeArea();
    //启动定时器
    // this.timer = setInterval(() => {
    //   console.log('timer')
    //   this.timeCount++;
    //   this.nowDateTime = dayjs().format('YYYY-MM-DD HH:mm:ss');
    // }, 1000);
    this.$bus.$on("childToParThree", this.childToParThree);
    this.routeConditions = window.localStorage.getItem("routeConditions");
  },
  data() {
    return {
      nav: {
        title: "测试页面",
        leftButtonText: "返回",
        rightButtonText: "啊啊啊"
      },
      selectedOption: "1",
      studentName: "",
      studentAge: "",
      news: '&nbsp;&nbsp;&nbsp;&nbsp;春耕备耕时节，总书记走进湖南省常德市鼎城区谢家铺镇港中坪村粮食生产万亩综合示范片区，察看秧苗培育和春耕备耕进展，听取高质量推进农业现代化情况介绍。一辆辆收割机穿梭在农田中，展现着现代化农业全链条作业的魅力。<br>&nbsp;&nbsp;&nbsp;&nbsp;新型职业农民、新型经营主体、新的技术理念，孕育着更加丰硕的未来。良好生态环境是农村最大优势和宝贵财富。渔获时节，总书记时隔23年再来东山，指出做好“海”的文章。福建省漳州市东山县澳角村近年来扎实推进海洋生态保护修复，坚持“陆海统筹”思路，海域生态环境明显好转。<br>&nbsp;&nbsp;&nbsp;&nbsp;农业农村工作，说一千、道一万，增加农民收入是关键。丰收时节，总书记走进甘肃省天水市麦积区南山花牛苹果基地。红彤彤的花牛苹果挂满枝头，他鼓励大家“把这个特色产业做得更大，带动更多群众增收致富”。广袤乡村，一个个看似普通的土特产正变成乡亲们增收致富的新引擎。在湖北省咸宁市潘家湾镇十里蔬菜长廊，总书记走进田间，察看蔬菜长势，叮嘱当地“把蔬菜种植这个富民产业进一步做好”。通过“公司+合作社+农户”生产模式，十里蔬菜长廊目前已带动周边1.7万农民参与经营、务工，帮助农民增收。',
      student: {
        name: "张三",
        age: 18,
        address: "北京市朝阳区中建财富国际中心25层",
        about: "努力赚钱，不是因为爱钱。而是这辈子不想因为钱和谁在一起，也不想因为钱而离开谁。如果问爱情和面包我选择什么，我会说：你给我爱情就好，面包我自己买。"
      },
      msg: "我是h1标签内容!我是h1标签内容!我是h1标签内容!我是h1标签内容!我是h1标签内容!我是h1标签内容!我是h1标签内容!我是h1标签内容!我是h1标签内容!我是h1标签内容!我是h1标签内容!我是h1标签内容!我是h1标签内容!",
      getNanoid: '',
      timer: null,
      timeCount: 0,
      isHidden: false,
      tempArr: [1, 2, 3, 4, 5, 6],
      pdfUrl: "https://testcbb.lczq.com/static/agreement/admin/20230322/9b3f470a-b106-4c64-bc5e-f08f538fb71b.PDF",
      hasSafeArea: false,
      localStudentApiData: [],
      localCarApiData: [],
      nowDateTime: '',
      movieUrl: '',
      catData: {
        height: 0,
        width: 0,
        url: ""
      },
      bigPic: {
        show: false,
        images: [],
      },
      childOne: {
        value: ""
      },
      childTwo: {
        value: ""
      },
      childThree: {
        value: ""
      },
      weatherData: '',
      routeConditions: ''
    };
  },
  methods: {
    handleLeftClick() {
      this.$router.back();
    },
    handleRightClick() {
      // this.$toast('啊啊啊');
      this.$router.push({
        path: "/AddressPage",
        query: {
          title: "地址"
        }
      });

    },
    handleClick(type) {
      if (type === 0) {
        this.getCarApi();
      } else if (type === 1) {
        // 父传子
        this.studentName = "张三";
        this.studentAge = 18;
      } else if (type === 2) {
        // 父触发子方法
        this.$refs.showUserNameRef.showUserName();
      } else if (type === 3) {
        // 数组push
        this.tempArr.push(Math.round(Math.random() * 100));
      } else if (type === 4) {
        // 数组pop
        this.tempArr.pop();
      } else if (type === 5) {
        // 数组unshift
        this.tempArr.unshift(Math.round(Math.random() * 100));
      } else if (type === 6) {
        // 数组shift
        this.tempArr.shift();
      } else if (type === 7) {
        // 数组reverse
        this.tempArr.reverse();
      } else if (type === 8) {
        // 数组splice
        this.tempArr.splice(0, 1, Math.round(Math.random() * 100));
      } else if (type === 9) {
        // 数组filter
        this.tempArr = this.tempArr.filter(item => item % 2 === 0);
      } else if (type === 10) {
        // 在新窗口中打开 PDF 文件
        window.open(this.pdfUrl, '_blank');
      } else if (type === 11) {
        // 获取h1标签的内容
        this.$toast(this.$refs.h1Title.innerHTML);
      } else if (type === 12) {
        // 隐藏or显示
        this.isHidden = !this.isHidden;
      } else if (type === 13) {
        // 本地服务器学生接口请求
        http.get('http://localhost:8080/xs/students').then(res => {
          console.log(res.data);
          this.localStudentApiData = res.data;
        }).catch(err => {
          console.log(err.message);
        });
      } else if (type === 14) {
        // 本地服务器汽车接口请求
        http.get('http://localhost:8080/qc/cars').then(res => {
          console.log(res.data);
          this.localCarApiData = res.data;
        }).catch(err => {
          console.log(err.message);
        });
      } else if (type === 15) {
        // 请求天气接口
        let weatherArr = process.env.VUE_APP_CITY_CODE.split(',')
        let indxe = Math.round(Math.random() * weatherArr.length);
        let weatherCode = weatherArr[indxe];
        /*  网上找的一个天气的接口 http://t.weather.itboy.net/api/weather/city/101030100 
        但是存在跨域的问题 故需要在vue.config.js中配置代理解决跨域问题 */
        http.get('http://localhost:8080/we/api/weather/city/' + weatherCode).then(res => {
          let data = res.data;
          this.$toast(data.message);
          if (res.status === 200) {
            this.weatherData = data;
          }
        }).catch(err => {
          console.log(err.message);
        });
      } else if (type === 16) {
        window.localStorage.setItem("routeConditions", "苟七");
      } else if (type === 17) {
        this.routeConditions = window.localStorage.getItem("routeConditions");
      } else if (type === 18) {
        window.localStorage.removeItem("routeConditions");
      } else if (type === 996) {
        this.$toast('我是客服');
      } else if (type === 997) {
        this.$toast('我是购物车');
      } else if (type === 998) {
        this.$toast('我是店铺');
      } else if (type === 999) {
        this.$toast('我是立即购买');
      }
    },
    cyFive(value) {
      this.$store.dispatch('xixihaha/multiplyByFive', value)
    },
    ...mapActions('xixihaha', { cySix: 'multiplyByFive' }),
    getChildMethod(value) {
      console.log('打印的内容是:--->', value);
      this.childOne.value = value;
    },
    cySeven(value) {
      this.$store.commit('xixihaha/MULTIPLYBYFIVE', value)
    },
    ...mapMutations('xixihaha', { cyEight: 'MULTIPLYBYFIVE' }),
    childToParTwo(value) {
      console.log('打印的内容是:--->', value);
      this.childTwo.value = value;
    },
    childToParThree(value) {
      console.log('打印的内容是:--->', value);
      this.childThree.value = value;
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
    },
    getCarApi() {
      http.get('https://api.thecatapi.com/v1/images/search').then(res => {
        if (res.status === 200) {
          this.catData = {
            height: res.data[0].height.metric,
            width: res.data[0].width.metric,
            url: res.data[0].url
          };
        } else {
          this.$toast(res.statusText);
        }
      });
    },
    bigPicClick() {
      this.bigPic.images = [this.catData.url];
      this.bigPic.show = true;
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
    },
    // 借助mapState生成计算属性，从state中读取数据。（数组写法）
    ...mapState('xixihaha', ['xxx']),
    ...mapGetters('xixihaha', ['personMsg'])
  },
  // beforeDestroy() {
  //   console.log('⚠️测试打印的内容:--->', 'beforeDestroy');
  //   //清除定时器
  //   clearInterval(this.timer);
  // },
  activated() {
    // 只有页面设置了keep-alive页面被缓存，进入页面时，会触发activated钩子函数
    console.log('✅测试打印的内容:--->', 'activated');

    // 因为通过keep-alive页面缓存了,所以定时器写在这里创建,clearInterval则写在deactivated中。
    this.timer = setInterval(() => {
      console.log('timer')
      this.timeCount++;
      this.nowDateTime = dayjs().format('YYYY-MM-DD HH:mm:ss');
    }, 1000);
  },
  deactivated() {
    // 只有页面设置了keep-alive页面被缓存，离开页面时，会触发deactivated钩子函数
    console.log('❌测试打印的内容:--->', 'deactivated');
    clearInterval(this.timer);
  },
};
</script>

<style scoped lang='less'>
.container {
  padding: 10px;

  .btn-common-style {
    padding: 0 10px;
    margin: 5px;
    //height: 40px;
    min-height: 40px;
    background-color: rgb(255, 4, 4);
    border: 2px solid rgb(2, 2, 2);
    border-radius: 10px;
    color: white;
    font-size: 18px;
  }

  .btn-common-style2 {
    background-color: red;
    color: yellow;
    border-radius: 15px;
    font-size: 20px;
    margin: 5px;
  }

  .text-common-style {
    font-size: 20px;
    font-weight: 450;
  }

  .radio-group-style {
    display: flex;
    margin-top: 10px;
  }
}
</style>