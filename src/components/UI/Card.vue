<!-- @format -->

<template>
	<div class="card">
		<div v-if="imgUrl" class="card-img__wrapper">
			<img :src="imgUrl" :alt="title" class="card-img" />
		</div>
		<span class="card-name">{{ name }}</span>
		<span class="card-title">{{ title }}</span>
		<div class="card-body">
			<slot name="body"></slot>

			<router-link
				v-if="link"
				:to="link"
				class="link"
				style="display: block; margin-top: 16px"
				>{{ title }}
			</router-link>
		</div>
		<slot name="footer"></slot>
	</div>
</template>

<script>
export default {
	props: {
		name: {
			type: String,
			required: true
		},
		title: {
			type: String,
			required: true
		},
		imgUrl: {
			type: String
		},
		link: {
			type: String
		}
	}
}
</script>

<style lang="scss">
.card {
	margin: 20px 0px;
}
</style>
