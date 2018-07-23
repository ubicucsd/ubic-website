<template>
  <div class="section calendar">
    <cal></cal>
  </div>
</template>

<script>
import Cal from '../components/Cal.vue'

export default {
  name: 'calendar',
  data () {
    return {
      msg: 'Supporting the discipline of bioinformatics throughout the University of California, San Diego.'
    }
  },
  components: {
    Cal
  }
}
</script>

<style lang="scss" scoped>

</style>