<template>
  <section class="opps">
    <div class="section">
      <div class="columns">
        <!-- Not the best implementation -->
        <div class="column is-one-third" v-for="opp in opps.slice(0,3)">
          <OpportunityCard :obj=opp></OpportunityCard>
        </div>
        <div class="column is-one-third" v-for="opp in opps.slice(3,6)">
          <OpportunityCard :obj=opp></OpportunityCard>
        </div>
        <div class="column is-one-third" v-for="opp in opps.slice(6,9)">
          <OpportunityCard :obj=opp></OpportunityCard>
        </div>
      </div>
      <article class="message is-info">
        <div class="message-header">
          <p>UBIC Opportunities</p>
        </div>
        <div class="message-body">
          If you would like to post an opportunity to the UBIC opportunities page, please send an email to our Academic Relations Chair, <router-link :to="{ name: 'Contact' }">Kritin Karkare.</router-link>
        </div>
      </article>
    </div>
  </section>
</template>

<script>
import { db } from '../firebase'
import OpportunityCard from '../components/layout/OpportunityCard.vue'

export default {
  name: 'Opportunities',
  data () {
    return {
      opps: []
    }
  },
  components: {
    'OpportunityCard': OpportunityCard
  },
  firestore () {
    return {
      opps: db.collection('opportunities')
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
