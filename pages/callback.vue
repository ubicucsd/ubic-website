<template>
	<section class="section">
		<div class="container has-text-centered">
			<br>
			<h1 class="title">Logging in...</h1>
			<LoadingIcon/>
		</div>
	</section>
</template>

<script>
import LoadingIcon from '../components/LoadingIcon.vue'

export default {
  name: 'callback',
  components: {
    LoadingIcon
  },
  mounted() {
    this.$router.push({
    	path: '/'
		})
	}
}
</script>


<style scoped>

</style>