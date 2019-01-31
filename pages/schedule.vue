<template>
  <section class="section podcast">
    <div class="container">
      <article class="message is-info">
        <div class="message-header">
          <p>UBIC Bioinformatics Chalk Talks</p>
        </div>
        <div class="message-body">
          <p> The Chalk Talks are a research seminar series hosted in collaboration with the Graduate Bioinformatics Club (GBIC) and Dr. Shankar Subramaniam. Each talk is scheduled for 30 minutes with another 30 minutes allocated for questions. The purpose of the talk should be to convey the general idea of the research to a broad audience of undergraduate, graduate, and professional bioinformaticians. </p>
          <br>
          <p> To prioritize understanding over research minutiae, the lectures will consist of access to only a whiteboard or blackboard. No PowerPoint, no projector, no electronic devices. </p>
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