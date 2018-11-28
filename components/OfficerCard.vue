<template>
  <div class="card">
    <div class="card-image">
      <figure class="image">
        <img :src="imgPath" alt="Image not found" onerror="this.onerror=null;this.src='https://via.placeholder.com/1333x2000';">
      </figure>
    </div>
    <div class="card-content">
      <div class="media">
        <div class="media-content">
          <p class="subtitle is-6">{{title}}</p>
          <p class="title is-4">{{name}}
            <a target="_blank" v-if="linkedinURL !== undefined" :href="linkedinURL">
              <b-icon pack="fa" icon="linkedin-square" size="is-small"/>
            </a>
            <a target="_blank" v-if="twitterURL !== undefined" :href="twitterURL">
              <b-icon pack="fa" icon="twitter-square" size="is-small"/>
            </a>
          </p>
          <p class="subtitle is-6">{{email}}
            <a target="_blank" v-if="email !== undefined" :href="twitterURL">
              <b-icon pack="fa" icon="envelope-square"/>
            </a>
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'officer',
  props: ['obj'],
  data () {
    return {
      name: this.obj.name,
      img: this.obj.img,
      title: this.obj.title,
      email: this.obj.ucsdemail,
      linkedinURL: this.obj.linkedinURL,
      twitterURL: this.obj.twitterURL,
      imgPath: require('../assets/images/officers/' + this.obj.img)
    }
  }
}
</script>

<style>
.icon {
  margin-left: .1rem;
  margin-right: .1rem;
  color: #4a4a4a;
  vertical-align: middle;
}
</style>

<style lang="scss" scoped>
.media-content {
  overflow: none;
}
</style>
