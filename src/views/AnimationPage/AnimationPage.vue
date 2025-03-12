<template>
	<div>
		<!-- 子组件导航栏 -->
		<MyNavBar :navBarTitle="nav.title" :navBarLeftText="nav.leftButtonText" @leftClick="handleLeftClick"
			:navBarRightText="nav.rightButtonText" @rightClick="handleRightClick" />

		<Animation />
		<Animation2 />
		<Animation3 />
	</div>
</template>

<script>
import MyNavBar from '@/components/MyNavBar.vue';
import Animation from './components/Animation'
import Animation2 from './components/Animation2'
import Animation3 from './components/Animation3'

export default {
	name: 'AnimationPage',
	components:
	{
		MyNavBar,
		Animation,
		Animation2,
		Animation3
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
