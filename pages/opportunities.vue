<template>
  <section class="opps">
    <div class="section">
      <div class="columns">
        <!-- Not the best implementation -->
        <div class="column is-one-half">
          <div v-for="opp in opps.slice(0,(opps.length/2)+1)" :key="opp.id">
            <OpportunityCard  :obj=opp></OpportunityCard>
            <br>
          </div>
        </div>
        <div class="column is-one-half">
          <div v-for="opp in opps.slice((opps.length/2)+1,opps.length)" :key="opp.id">
            <OpportunityCard  :obj=opp></OpportunityCard>
            <br>
          </div>
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
import { db } from '../plugins/firebase'
import OpportunityCard from '../components/OpportunityCard.vue'

export default {
  name: 'opportunities',
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
