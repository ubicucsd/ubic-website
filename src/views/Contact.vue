<template>
  <section class="contact">
    <div class="section">
      <div class="columns">
        <div class="column" v-for="officer in officers.slice(0,3)">
          <OfficerCard :obj=officer></OfficerCard>
        </div>
      </div>
      <div class="columns">
        <div class="column" v-for="officer in officers.slice(3,6)">
          <OfficerCard :obj=officer></OfficerCard>
        </div>
      </div>
      <div class="columns">
        <div class="column" v-for="officer in officers.slice(6,9)">
          <OfficerCard :obj=officer></OfficerCard>
        </div>
      </div>
      <div class="columns">
        <div class="column" v-for="officer in officers.slice(9,12)">
          <OfficerCard :obj=officer></OfficerCard>
        </div>
      </div>
      <div class="columns">
        <div class="column is-one-third" v-for="officer in officers.slice(12,13)">
          <OfficerCard :obj=officer></OfficerCard>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import { db } from '../firebase'
import OfficerCard from '../components/layout/OfficerCard.vue'

export default {
  name: 'Contact',
  data () {
    return {
      officers: []
    }
  },
  components: {
    'OfficerCard': OfficerCard
  },
  firestore () {
    return {
      officers: db.collection('officers').orderBy('index')
    }
  }
}
</script>


<style lang="scss" scoped>

.title, .subtitle {
  color: white !important;
}

.additional-bar {
  padding: 15px;
}


</style>
