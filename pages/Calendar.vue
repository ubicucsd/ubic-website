<template>
  <section class="calendar">
    <div class="section">
      <div class="container">
        <full-calendar :config="config" :events="events" ref="calendar" />
      </div>
    </div>
  </section>
</template>

<script>
import { FullCalendar } from 'vue-full-calendar'
import 'fullcalendar/dist/gcal.js'
window.jQuery = window.$ = require('jquery')

export default {
  name: 'Calendar',
  data () {
    return {
      msg: 'Supporting the discipline of bioinformatics throughout the University of California, San Diego.',
      config: {
        googleCalendarApiKey: 'AIzaSyD9VcoF3cUM1dM13V5a0RUImGP4BRLIH5A',
        events: {
          googleCalendarId: 'jj0278t9epcqh2iv3i4gjuu98o@group.calendar.google.com'
        },
        height: 550,
        defaultView: 'month'
      },
      events: []
    }
  },
  components: {
    FullCalendar
  }
}
</script>


<style lang="scss" scoped>
@import '~fullcalendar/dist/fullcalendar.css';

.title, .subtitle {
  color: white !important;
}

.additional-bar {
  padding: 15px;
}

</style>

<style type="text/css">
h2 {
  font-size: 24px !important;
}
</style>
