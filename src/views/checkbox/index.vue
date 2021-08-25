<template>
	<div>
		<i-checkbox v-model="single">单独选项</i-checkbox>
		<span>{{ single }}</span>
	</div>
</template>
<script>
import ICheckbox from '../../components/checkbox/checkbox'
export default {
	components: {
		ICheckbox,
	},
	data() {
		return {
			single: false,
		}
	},
}
</script>
