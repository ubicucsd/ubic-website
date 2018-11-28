<template>
  <div class="home">
    <section class="hero">
      <div class="hero-body is-paddingless">
        <div class="is-fullhd">
          <figure class="image">
            <img class="is-pulled-left" id="setting" src="~/static/home2.svg">
          </figure>
        </div>
      </div>
    </section>
    <section class="section">
      <div class="container">
        <div class="content">
          <p> UBIC at UCSD represents our undergraduates who are studying in or interested in the diverse field of bioinformatics. Through a combination of events, programs, and projects our mission is to educate and contribute to the education and aspirations of every bioinformatics student at UC San Diego. </p>
          <hr>
          <p> If you’re a student, use the calendar below to find our upcoming events and programs. </p>
          <p> If you’re a faculty interested in presenting on a topic, or are interested in advertising to our student body please email our Academic Relations Chair, <a href="/contact">York Zhang</a>. </p>
          <p> If you’re an industry representative interested in discussing an opportunity with our student body, please email our Industry Relations Chair, <a href="/contact">Alex Tran</a>.
          </p>
        </div>
      </div>
    </section>
    <div class="section calendar">
      <div class="container">
        <hr>
        <div class="columns">
          <div class="column">
            <cal></cal>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { db } from '../plugins/firebase'
import Cal from '../components/Cal.vue'

export default {
  name: 'home',
  data () {
    return {
      msg: 'Supporting the discipline of bioinformatics throughout the University of California, San Diego.',
      members: [],
      email: (typeof this.$auth.user != 'undefined' && this.$auth.user && this.$auth.user.email === 'undefined') ? "this.$auth.user.email" : "test@ubic.org" 
    }
  },
  components: {
    Cal
  },
  mounted() {
  },
  firestore () {
    members: db.collection('members').where("1","==",this.$data.email)
    this.checkAuth();
  },
  methods: {
    checkAuth: function() {
      //if object is null, email doesn't exist in member list
      if (this.$data.members == null) {
        return false;
      } else {
        this.$auth.$storage.setCookie("member", "true", true)
      }
    }
  }
}
</script>

<style lang="scss" scoped>

.hero {
  background-color: #F3B990;
}

#jumbotron {
  background-color: #F7C8A5;

}

#setting {
  height: auto;
  width: 500px;

  border: none;
}

.section.calendar {
  padding-top: 0;
}


</style>

