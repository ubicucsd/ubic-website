<template>
  <section>
    <section class="hero is-primary">
      <div class="hero-body">
        <div class="container">
          <p class="title">Industry Job Opportunites</p>
          <p class="subtitle">Below is a table of open positions and their requirements.</p>
        </div>
      </div>
    </section>
    <section class="joblist">
      <section class="section">
        <div class="container">
          <div v-if="!this.$auth.$storage.getCookie('member')">
            <div class="content">
              <p> UBIC Opportunities, internships, and job postings are only avaliable to UBIC members. If you'd like to become a member, please contant a member of UBIC board. </p>
            </div>
          </div>
          <div v-else>
            <table class="table is-responsive">
              <thead>
              	<tr>
	                <th>Company</th>
	                <th>Title</th>
	                <th>Field</th>
	                <th>Time Frame</th>
	                <th>Preferred Skills</th>
	                <th>Link</th>
	              </tr>
	            </thead>
	            <tbody>
	            	<tr v-for="job in jobs" :key="job.id">
	            	  <td>{{ job[1] }}</td>
	            	  <td>{{ job[2] }}</td>
	            	  <td>{{ job[3]  }}</td>
	            	  <td>{{ job[4] }}</td>
	            	  <td>{{ job[5] }}</td>
                  <td>
                    <button class="button is-info">
                      <a class="has-text-white" :href="job[6]">More Info</a>
                    </button>
                  </td>
	            	</tr>
	            </tbody>
            </table>
          </div>
        </div>
      </section>
    </section>
  </section>
</template>

<script>
import { db } from '../plugins/firebase'
import JobRow from '../components/JobRow.vue'

export default {
  name: 'jobs',
  components: {
    'JobRow': JobRow
  },
  data () {
    return {
      jobs: [],
    }
  },
  
  firestore () {
    return {
      jobs: db.collection('jobs')
    }
  }
}
</script>


<style lang="css" scoped>
  @charset "UTF-8";
  .hero .title a {
    text-decoration: underline;
  }

  h1 {
    font-size: 2em;
  }

  @media screen and (max-width: 800px) {
    .is-responsive {
      width: 100%;
      border-collapse: collapse;
      border-spacing: 0;
      display: block;
      position: relative;
    }
    .is-responsive td:empty:before {
      content: " ";
    }
    .is-responsive th,
    .is-responsive td {
      margin: 0;
      vertical-align: top;
      font-size: 1em;
    }
    .is-responsive th {
      text-align: left;
    }
    .is-responsive thead {
      border-right: solid 2px #dbdbdb;
      display: block;
      float: left;
    }
    .is-responsive thead tr {
      display: block;
      padding: 0 10px 0 0;
    }
    .is-responsive thead tr th::before {
      content: " ";
    }
    .is-responsive thead td,
    .is-responsive thead th {
      border-width: 0 0 1px;
    }
    .is-responsive tbody {
      display: block;
      width: auto;
      position: relative;
      overflow-x: auto;
      white-space: nowrap;
    }
    .is-responsive tbody tr {
      display: inline-block;
      vertical-align: top;
    }
    .is-responsive th {
      display: block;
      text-align: right;
    }
    .is-responsive td {
      display: block;
      min-height: 1.25em;
      text-align: left;
    }
    .is-responsive th:last-child,
    .is-responsive td:last-child {
      border-bottom-width: 0;
    }
    .is-responsive tr:last-child td:not(:last-child) {
      border: 1px solid #dbdbdb;
      border-width: 0 0 1px;
    }
    .is-responsive.is-bordered td,
    .is-responsive.is-bordered th {
      border-width: 1px;
    }
    .is-responsive.is-bordered tr td:last-child,
    .is-responsive.is-bordered tr th:last-child {
      border-bottom-width: 1px;
    }
    .is-responsive.is-bordered tr:last-child td,
    .is-responsive.is-bordered tr:last-child th {
      border-width: 1px;
    }
  }

</style>