<template>
  <section class="opps">
    <div class="section">
      <div class="container">
        <div v-if="!$auth.loggedIn" class="columns">
          <div class="column is-half is-offset-one-quarter" >
            <div class="card notification">
              <div class="content">
                <p> UBIC Opportunities, internships, and job postings are only avaliable to UBIC members. If you'd like to become a member, please contant a member of UBIC board. </p>
              </div>
            </div>
          </div>
        </div>
        <div v-else class="columns">
          <div class="column">
            <div v-for="opp in opps.slice(0,(opps.length/2)+1)" :key="opp.id">
              <OpportunityCard  :obj=opp></OpportunityCard>
              <br>
            </div>
          </div>
          <div class="column">
            <div v-for="opp in opps.slice((opps.length/2)+1,opps.length)" :key="opp.id">
              <OpportunityCard  :obj=opp></OpportunityCard>
              <br>
            </div>
          </div>
        </div>
      </div>
      <section class="section">
        <article class="message is-info">
          <div class="message-header">
            <p>UBIC Opportunities</p>
          </div>
          <div class="message-body">
            If you would like to post an opportunity to the UBIC opportunities page, please send an email to our Academic Relations Chair, <router-link :to="{ name: 'contact' }">York Zhang.</router-link>
          </div>
        </article>
      </section>
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
    var d = (new Date()).toLocaleDateString('en-US');
    console.log(d);
    console.log(d >= "11/01/2018")
    return {
      opps: db.collection('opportunities').where("10", '>=', d)
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
