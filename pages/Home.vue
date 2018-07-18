<template>
  <section class="home">
    <div class="hero is-primary is-medium">
      <div class="hero-body">
        <div class="container has-text-centered">
          <h1 class="title">
            UBIC at UCSD
          </h1>
          <h2 class="subtitle">
            {{ msg }}
          </h2>
          <!-- <a class="button is-success">Start Here</a> -->
        </div>
      </div>
    </div>
    <div class="section">
      <div class="container">
        <div class="content">
          <p> UBIC at UCSD represents the undergraduates studying and interested in the diverse field of bioinformatics. Through a combination of events, programs, and projects our mission is to educate and contribute to the education and aspirations of every bioinformatics student at UC San Diego. </p>
        </div>
      </div>
    </div>
    <div class="section">
      <div class="container">
        <div class="content">
          <p> If you’re a student, use the calendar below to find our upcoming events and programs. </p>
          <p> If you’re a faculty interested in presenting on a topic, or are interested in advertising to our student body please email our Academic Relations Chair, Kritin Karkare (link to contact page). </p>
          <p> If you’re an industry representative interested in discussing an opportunity with our student body, please email our Industry Relations Chair, Miko Liu (link to contact page).
          </p>
        </div>
      </div>
    </div>
    <div class="section calendar">
      <hr>
      <div class="container">
        <div class="columns">
          <div class="column">
            <MiniCalendar></MiniCalendar>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import MiniCalendar from '../components/layout/MiniCalendar.vue'

export default {
  name: 'Home',
  data () {
    return {
      msg: 'Supporting the discipline of bioinformatics throughout the University of California, San Diego.'
    }
  },
  components: {
    'MiniCalendar': MiniCalendar
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

.hero {
  background: #0B486B;  //fallback for old browsers
  background: -moz-linear-gradient(0deg, rgba(242,128,15,1) 0%, rgba(8,140,163,1) 100%); /* ff3.6+ */
  background: -moz-linear-gradient(0deg, rgba(255,135,15,1) 0%, rgba(7,114,133,1) 100%); /* ff3.6+ */
  background: -webkit-gradient(linear, left top, right top, color-stop(0%, rgba(255,135,15,1)), color-stop(100%, rgba(7,114,133,1))); /* safari4+,chrome */
  background: -webkit-linear-gradient(0deg, rgba(255,135,15,1) 0%, rgba(7,114,133,1) 100%); /* safari5.1+,chrome10+ */
  background: -o-linear-gradient(0deg, rgba(255,135,15,1) 0%, rgba(7,114,133,1) 100%); /* opera 11.10+ */
  background: -ms-linear-gradient(0deg, rgba(255,135,15,1) 0%, rgba(7,114,133,1) 100%); /* ie10+ */
  background: linear-gradient(90deg, rgba(255,135,15,1) 0%, rgba(7,114,133,1) 100%); /* w3c */
}
</style>

