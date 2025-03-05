<!-- 结构 -->
<template>
  <div>
    <!-- 子组件导航栏 -->
    <MyNavBar :navBarTitle="nav.title" :navBarLeftText="nav.leftButtonText" @leftClick="handleLeftClick"
      :navBarRightText="nav.rightButtonText" @rightClick="handleRightClick" />

    <div class="app-box">
      <div v-for="(item, index) in vcArr" :key="index">
        <van-button class="button-box" color="linear-gradient(to right, #ff6034, #ee0a24)"
          @click="onClickButton(index)">
          跳转到{{ item }}
        </van-button>
      </div>
      <p class="text-box" v-html="msg"></p>
      <img class="img-box" alt="" src="https://img-xhpfm.xinhuaxmt.com/News/202412/105012024121700012391.gif">
    </div>

    <div class="bottom-box">
      <van-goods-action>
        <van-goods-action-icon icon="chat-o" text="客服" @click="onClickIcon(1)" />
        <van-goods-action-icon icon="cart-o" text="购物车" @click="onClickIcon(2)" />
        <van-goods-action-icon icon="shop-o" text="店铺" @click="onClickIcon(3)" />
        <van-goods-action-button type="danger" text="立即购买" @click="onClickIcon(4)" />
      </van-goods-action>
    </div>
  </div>

</template>

<!-- 逻辑处理 -->
<script>
import MyNavBar from '@/components/MyNavBar.vue';

export default {
  name: 'HomePage',
  components: {
    MyNavBar
  },
  data() {
    return {
      nav: {
        title: "我是首页",
        leftButtonText: "返回",
        rightButtonText: "地址"
      },
      msg: '&nbsp;&nbsp;&nbsp;&nbsp;春耕备耕时节，总书记走进湖南省常德市鼎城区谢家铺镇港中坪村粮食生产万亩综合示范片区，察看秧苗培育和春耕备耕进展，听取高质量推进农业现代化情况介绍。一辆辆收割机穿梭在农田中，展现着现代化农业全链条作业的魅力。<br>&nbsp;&nbsp;&nbsp;&nbsp;新型职业农民、新型经营主体、新的技术理念，孕育着更加丰硕的未来。良好生态环境是农村最大优势和宝贵财富。渔获时节，总书记时隔23年再来东山，指出做好“海”的文章。福建省漳州市东山县澳角村近年来扎实推进海洋生态保护修复，坚持“陆海统筹”思路，海域生态环境明显好转。<br>&nbsp;&nbsp;&nbsp;&nbsp;农业农村工作，说一千、道一万，增加农民收入是关键。丰收时节，总书记走进甘肃省天水市麦积区南山花牛苹果基地。红彤彤的花牛苹果挂满枝头，他鼓励大家“把这个特色产业做得更大，带动更多群众增收致富”。广袤乡村，一个个看似普通的土特产正变成乡亲们增收致富的新引擎。在湖北省咸宁市潘家湾镇十里蔬菜长廊，总书记走进田间，察看蔬菜长势，叮嘱当地“把蔬菜种植这个富民产业进一步做好”。通过“公司+合作社+农户”生产模式，十里蔬菜长廊目前已带动周边1.7万农民参与经营、务工，帮助农民增收。',
      radio: '1',
      vcArr: ['TestOne', 'TestTwo', 'TestThree'],

    }
  },
  methods: {
    handleLeftClick(data) {
      console.log('父组件接收到左侧按钮点击事件数据：', data);
    },
    handleRightClick(data) {
      console.log('父组件接收到右侧按钮点击事件数据：', data);
      this.$router.push({
        path: '/addressPage'
      });
    },
    onClickButton(index) {
      console.log(index);
      let page = this.vcArr[index];
      this.$router.push({
        path: page
      });
    },
    onClickIcon(tag) {
      switch (tag) {
        case 1:
          console.log('我是客服');
          break;
        case 2:
          console.log('我是购物车');
          break;
        case 3:
          console.log('我是店铺');
          break;
        case 4:
          console.log('我是立即购买');
          break;
        default:
          break
      }
    }
  },
}
</script>

<!-- 样式 -->
<style scoped lang='less'>
.app-box {
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
}

.nav-box {
  display: flex;
}

.text-box {
  padding: 0 10px;
  text-align: left;
  font-size: 20px;
}

.img-box {
  width: 95%;
  height: 200px;
  margin-top: 10px;
  margin-bottom: 10px;
}

.button-box {
  width: 200px;
  height: 50px;
  border-radius: 25px;
  font-size: 18px;
  margin: 5px;
}

.bottom-box {
  margin-bottom: 60px;
}
</style>