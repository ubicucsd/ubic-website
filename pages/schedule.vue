<template>
  <section class="section podcast">
    <div class="container">
      <article class="message is-info">
        <div class="message-header">
          <p>UBIC Bioinformatics Chalk Talks</p>
        </div>
        <div class="message-body">
          <p> The Chalk Talks are a research seminar series hosted in collaboration with the Graduate Bioinformatics Club (GBIC) (we have consulted with Professor Subramaniam in the Bioinformatics Program to organize this series). The purpose of the talk should be to convey the general idea of the research to a broad audience of undergraduate and graduate students. Each talk is scheduled for 1 hour to be used as you see fit. </p>
          <br>
          <p> To enable us to better understand potential research opportunities in bioinformatics, we request you to use a chalkboard format in an informal setting as opposed to a formal PowerPoint presentation. </p>
          <br>
          <p> To schedule a time for your chalk talk, please click the button below. Please do not schedule a chalk talk at the same time as another individual. </p>
          <br>
          <div class="has-text-centered">
            <a class="button" href="https://cozycal.com/ubic-chalk-talks">
              <span>Schedule</span>
              <span class="icon">
                <i class="fas fa-calendar-check"></i>
              </span>
            </a>
          </div>
        </div>
      </article>
    </div>
  </section>
</template>

<script>

export default {
  name: 'schedule',
  mounted() {
    const plugin = document.createElement("script");
    plugin.setAttribute(
      "src",
      "https://static.cozycal.com/embed/v1/3713.js"
    );
    plugin.async = true;
    document.head.appendChild(plugin);
  }
}
</script>

<style lang="scss" scoped>

</style>