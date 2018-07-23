<template>
  <section class="calendar">
    <div class="container">
      <no-ssr>
        <full-calendar :config="config" :events="events" ref="calendar" />
      </no-ssr>
    </div>
  </section>
</template>

<script>

export default {
  name: 'Calendar',
  props: ['view'],
  data () {
    return {
      config: {
        height: 550,
        defaultView: this.view || 'month',
        header: {
          left: 'prev,today,next', 
          center: 'title',
          right: 'month,list,basic'
        },
        buttonText: {
          today: 'today',
          month: 'month',
          list: 'week',
          basic: 'day'
        }
      },
      events: []
    }
  },
  methods: {
    async getEvents() {
      const ip = await this.$axios.$get('https://www.googleapis.com/calendar/v3/calendars/jj0278t9epcqh2iv3i4gjuu98o@group.calendar.google.com/events?key=AIzaSyD9VcoF3cUM1dM13V5a0RUImGP4BRLIH5A');
      //this.events= ip.items;
      
      //parse
      let events = ip.items.map((val, i, arr) => {
        return {
          title: val.summary,
          start: val.start.dateTime,
          end: val.end.dateTime,
          url: val.htmlLink,
          color: '#393D90',
        };
      });

      this.events = events;
    }
  },
  beforeMount() {
    this.getEvents();
  }
}
</script>


<style lang="scss" scoped>
@import "bulma/sass/utilities/_all.sass";
@import "bulma/sass/utilities/mixins.sass";

.title, .subtitle {
  color: white !important;
}

.additional-bar {
  padding: 15px;
}

.fc-right {
  display: none;
} 

</style>

<style type="text/css">

h2 {
  font-size: 24px !important;
}

@media only screen and (max-width: 480px) {
   .fc-right {
     display: none;
   } 
}

</style>
