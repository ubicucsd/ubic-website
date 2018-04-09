<template>
  <section class="calendar">
    <div class="container">
      <full-calendar :config="config" :events="events" ref="calendar" />
    </div>
  </section>
</template>

<script>
import { FullCalendar } from 'vue-full-calendar'
import 'fullcalendar/dist/gcal.js'
window.jQuery = window.$ = require('jquery')

export default {
  name: 'MiniCalendar',
  data () {
    return {
      config: {
        googleCalendarApiKey: 'AIzaSyD9VcoF3cUM1dM13V5a0RUImGP4BRLIH5A',
        events: {
          googleCalendarId: 'jj0278t9epcqh2iv3i4gjuu98o@group.calendar.google.com'
        },
        height: 550,
        defaultView: 'listWeek'
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
#calendar {
    width: 100%;
    margin: 0 auto;
}

h2 {
  font-size: 30px !important;
}
</style>
