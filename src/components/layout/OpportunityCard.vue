<template>
  <div class="card has-text-centered">
    <div class="card-image">
      <br>
      <figure class="icon image">
        <img v-if="imgLink" :src=imgLink>
        <img v-else src="../../assets/images/opp_default.jpg">
      </figure>
    </div>
    <div class="card-content">
      <div class="title"> <h1>{{name}}</h1> </div>
      <div class="subtitle"> <h3>{{dept}}</h3> </div>
      <hr>
      <p>{{desc}}</p> 
      <p>Time commitment: {{hrs}} per week</p>
      <hr>
      <p>Preferred qualifications: {{reqs}}</p>
      <hr>
      <b-tooltip type="is-light" size="is-medium" :multilined=true :label="email">
        <button class="button is-info is-medium" :href=>
            Apply
        </button>
      </b-tooltip>
    </div>
  </div>
</template>

<script>
export default {
  name: 'opportunity',
  props: ['obj'],
  data () {
    return {
      name: this.obj[1],
      dept: this.obj[2],
      hrs: this.obj[3],
      desc: this.obj[4],
      reqs: this.obj[5],
      reqsToApply: this.obj[6],
      yrs: this.obj[7],
      imgLink: this.obj[8].replace('open', 'uc'),
      email: this.obj[9]
    }
  }
}
</script>

<style lang="scss" scoped>

.icon {
  overflow: hidden;
  margin-left: auto;
  margin-right: auto;
  color: #4a4a4a;
  text-align: center;
  border-radius: 100px;
  border: 3px solid gray;
  width: 100px !important;
  height: 100px !important;
}

img {
  width: 100% !important;
  height: 100% !important;
}

</style>
