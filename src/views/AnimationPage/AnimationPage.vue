<template>
	<div>
		<!-- 子组件导航栏 -->
		<MyNavBar :navBarTitle="nav.title" :navBarLeftText="nav.leftButtonText" @leftClick="handleLeftClick"
			:navBarRightText="nav.rightButtonText" @rightClick="handleRightClick" />

		<AnimationOne />
		<AnimationTwo />
		<AnimationThree />
	</div>
</template>

<script>
import MyNavBar from '@/components/MyNavBar.vue';
import AnimationOne from './components/AnimationOne'
import AnimationTwo from './components/AnimationTwo'
import AnimationThree from './components/AnimationThree'

export default {
	name: 'AnimationPage',
	components:
	{
		MyNavBar,
		AnimationOne,
		AnimationTwo,
		AnimationThree
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

		}
	},
	methods: {
		handleLeftClick() {
			this.$router.back();
		},
		handleRightClick() {

		},
	}
}
</script>
