<template>
	<div class="student">
		<h2>学生姓名：{{ name }}</h2>
		<h2>学生性别：{{ sex }}</h2>
		<button @click="sendStudentlName">把学生名给App</button>
	</div>
</template>

<script>
export default {
	name: 'Student',
	data() {
		return {
			name: '张三',
			sex: '男',
		}
	},
	methods: {
		sendStudentlName() {
			//触发Student组件实例身上的atguigu事件
			this.$emit('atguigu', this.name, 666, 888, 900)
		},
	},
}
</script>

<style scoped lang='less'>
.student {
	background-color: pink;
	padding: 5px;
	margin-top: 10px;
}
</style>
