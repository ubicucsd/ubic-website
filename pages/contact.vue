<template>
  <section class="section contact">
    <div class="container">
     <b-tabs position="is-centered" class="block">
      <b-tab-item label="2018-2019">
        <div>
          <div class="columns is-multiline">
            <div class="column is-one-quarter" v-for="officer in officers.filter(off => off.officeryear == 2018)" :key="officer.name">
              <OfficerCard :obj=officer></OfficerCard>
            </div>   
          </div>
        </div>
      </b-tab-item>
      <b-tab-item label="2017-2018">
        <div>
          <div class="columns is-multiline">
            <div class="column is-one-quarter" v-for="officer in officers.filter(off => off.officeryear == 2017)" :key="officer.name">
              <OfficerCard :obj=officer></OfficerCard>
            </div>   
          </div>
        </div> 
      </b-tab-item>
    </b-tabs>

    </div>
  </section>
</template>

<script>
import { db } from '../plugins/firebase'
import OfficerCard from '../components/OfficerCard.vue'

export default {
  name: 'contact',
  data () {
    return {
      officers: [],
      officers_2017: [],
      officers_2018: []
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
