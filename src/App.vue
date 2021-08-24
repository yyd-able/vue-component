<template>
	<div>
    <!-- 导航 -->
		<div>
      <router-link v-for="(item,index) in routes" :key="index" :to="item.path">{{item.meta.title}}</router-link>
    </div>
    <router-view></router-view>
	</div>
</template>

<script>
import { routes } from './router/index'
export default {
	name: 'App',
	components: {},
	data() {
		return { routes }
	},
}
</script>

<style></style>
