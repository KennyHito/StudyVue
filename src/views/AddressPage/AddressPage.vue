<!-- 结构 -->
<template>
  <div>
    <!-- 子组件导航栏 -->
    <MyNavBar :navBarTitle="nav.title" :navBarLeftText="nav.leftButtonText" @leftClick="handleLeftClick"
      :navBarRightText="nav.rightButtonText" @rightClick="handleRightClick" />

    <van-address-list v-model="chosenAddressId" :list="list" :disabled-list="disabledList" disabled-text="以下地址超出配送范围"
      default-tag-text="默认" @add="onAdd" @edit="onEdit" />
  </div>
</template>

<!-- 逻辑处理 -->
<script>
import MyNavBar from '@/components/MyNavBar.vue';

export default {
  name: "AddressPage",
  components: {
    MyNavBar
  },
  data() {
    return {
      nav: {
        title: "地址列表",
        leftButtonText: "",
        rightButtonText: ""
      },
      chosenAddressId: '1',
      list: [
        {
          id: '1',
          name: '张三',
          tel: '13000000000',
          province: '浙江省',
          city: '杭州市',
          county: '西湖区',
          addressDetail: '文三路138号东方通信大厦7楼501室',
          address: '浙江省杭州市西湖区文三路138号东方通信大厦7楼501室',
          postalCode: 100000,
          isDefault: true,
        },
        {
          id: '2',
          name: '李四',
          tel: '1310000001',
          province: '浙江省',
          city: '杭州市',
          county: '拱墅区',
          addressDetail: '莫干山路50号',
          address: '浙江省杭州市拱墅区莫干山路50号',
          postalCode: 200000,
        },
      ],
      disabledList: [
        {
          id: '3',
          name: '王五',
          tel: '1320000000',
          address: '浙江省杭州市滨江区江南大道 15 号',
        },
      ],
    };
  },
  methods: {
    handleLeftClick() {
      this.$router.back();
    },
    handleRightClick() {

    },
    onAdd() {
      this.$router.push({
        path: '/editAddress'
      });
    },
    onEdit(item, index) {
      console.log('编辑地址:' + JSON.stringify(item) + "<---->" + index);
      this.$router.push({
        path: '/editAddress',
        query: item
      });
    },
  },
}
</script>


<!-- 样式 -->
<style scoped lang='less'></style>