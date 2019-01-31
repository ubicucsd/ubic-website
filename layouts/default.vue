<template>
  <div>
    <nav-bar/>
    <nuxt/>
    <footer-bar/>
  </div>
</template>

<script>
import NavBar from '~/components/NavBar.vue'
import FooterBar from '~/components/FooterBar.vue'

export default {
  components: {
    NavBar, FooterBar
  }
}

</script>

<style lang="scss">



</style>
