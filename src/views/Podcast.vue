<template>
  <section class="podcast">
    <div class="section">
      <article class="message is-info">
        <div class="message-header">
          <p>The UCSD Bioinformatics Podcast</p>
        </div>
        <div class="message-body">
          The UCSD Bioinformatics Podcast is a platform to allow UCSD researchers, professors, and alumni in bioinformatics to communicate their ideas with undergraduates and answer common questions, present unique experiences, and generate early passion in the rapidly growing field of bioinformatics. The UCSD Bioinformatics Podcast is a UBIC production hosted by <router-link :to="{ name: 'Contact' }">Neha Pursala and Ginny Wu.</router-link>
        </div>
      </article>
      <div class="columns">
        <div class="column is-half">
          <div class="card has-text-centered">
            <iframe width="100%" height="300" scrolling="no" frameborder="no" allow="autoplay" src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/426939063&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true"></iframe>
          </div>
        </div>
        <div class="column is-half">
          <div class="card has-text-centered">
            <iframe width="100%" height="300" scrolling="no" frameborder="no" allow="autoplay" src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/381933440&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true"></iframe>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>

export default {
  name: 'Podcast'
}
</script>

<style lang="scss" scoped>
.column {
  margin-left: auto;
  margin-right: auto;
}
</style>