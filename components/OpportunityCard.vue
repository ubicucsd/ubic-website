<template>
  <div class="card has-text-centered">
    <div class="card-image">
      <br>
      <figure class="image">
        <img v-if="imgLink" :src=imgLink>
        <img v-else src="../assets/images/opp_default.jpeg">
      </figure>
    </div>
    <div class="card-content">
      <div class="media">
        <div class="media-content has-text-centered">
          <div class="title"> <h1>{{name}}</h1> </div>
          <div class="subtitle"> <h3>{{dept}}</h3> </div>
        </div>
      </div>
      <transition-expand>
        <div class="content" v-if="expanded">
          <hr>
          <p>{{desc}}</p> 
          <p>Time commitment: {{hrs}} per week</p>
          <hr>
          <p>Preferred qualifications: {{reqs}}</p>
          <hr>
          <b-tooltip type="is-light" size="is-medium" :multilined=true :label="email">
            <button class="button is-info is-medium">
              <a class="has-text-white" :href="`mailto:${email}`">Apply</a>
            </button>
          </b-tooltip>
        </div>
      </transition-expand>
    </div>
    <footer class="card-footer">
      <p class="card-footer-item">
        <a class="button is-success" @click="expanded = !expanded">
          <span>
            Expand
          </span>
          <span class="icon">
            <i class="fas fa-arrow-down"/>
          </span>
        </a>
      </p>
    </footer>
  </div>
</template>

<script>
import TransitionExpand from '../components/TransitionExpand.vue';

export default {
  name: 'opportunity',
  props: ['obj'],
  components: {
    TransitionExpand,
  },
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
      email: '"' + this.obj[9] + '"',
      expanded: false
    }
  },
  methods: {
    enter(element) {
      const width = getComputedStyle(element).width;

      element.style.width = width;
      element.style.position = 'absolute';
      element.style.visibility = 'hidden';
      element.style.height = 'auto';

      const height = getComputedStyle(element).height;

      element.style.width = null;
      element.style.position = null;
      element.style.visibility = null;
      element.style.height = 0;

      // Trigger the animation.
      // We use `setTimeout` because we need
      // to make sure the browser has finished
      // painting after setting the `height`
      // to `0` in the line above.
      setTimeout(() => {
        element.style.height = height;
      });
    },
    afterEnter(element) {
      element.style.height = 'auto';
    },
    leave(element) {
      const height = getComputedStyle(element).height;
      
      element.style.height = height;

      setTimeout(() => {
        element.style.height = 0;
      });
    }
  }
}
</script>

<style lang="scss" scoped>

* {
  will-change: height;
  transform: translateZ(0);
  backface-visibility: hidden;
  perspective: 1000px;
}

.image {
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
