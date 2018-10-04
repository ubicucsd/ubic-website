<template>
  <section class="login">
    <section class="hero is-fullheight">
      <div class="hero-body">
        <div class="container has-text-centered">
          <div class="column is-4 is-offset-4">
            
            <div class="box">
              <figure class="avatar image is-128x128">
                <img src="~/assets/images/opp_default.jpg">
              </figure>

              <div class="form">
                <div class="field">
                  <div class="control">
                    <input class="input" type="email" placeholder="Your Email" autofocus="" v-model="email">
                  </div>
                </div>

                <div class="field">
                  <div class="control">
                    <input class="input" type="password" placeholder="Your Password" v-model="password">
                  </div>
                </div>
                <div class="field">
                  <label class="checkbox">
                    <input type="checkbox">
                    Remember me
                  </label>
                </div>
                <button class="button is-block is-info is-fullwidth" @click="showError" disabled>Login</button>
                <hr>
                <button class="button is-block is-info is-fullwidth" @click="$auth.loginWith('google')">Login with UCSD</button>
              </div>
                              

            </div>
            <p class="has-text-grey">
              <a @click="showError">Sign Up</a> &nbsp;·&nbsp;
              <a @click="showError">Forgot Password</a>
            </p>
          </div>
        </div>
      </div>
    </section>
  </section>
</template>

<script>
import { db } from '../plugins/firebase'
import 'buefy'

export default {
  name: 'login',
  middleware: ['auth'],
  data () {
    return {
      email: '',
      password: '',
      error: null
    }
  },
  methods: {
    showError() {
      this.$toast.open({
        duration: 5000,
        message: `This button is currently disabled!`,
        position: 'is-bottom',
        type: 'is-danger'
      })
    },
    async login() {
      this.error = null
      return this.$auth
        .loginWith('local', {
          data: {
            username: this.username,
            password: this.password
          }
        })
        .catch(e => {
          this.error = e + ''
        })
    }
  },
  computed: {
    redirect() {
      return (
        this.$route.query.redirect &&
        decodeURIComponent(this.$route.query.redirect)
      )
    },
    isCallback() {
      return Boolean(this.$route.query.callback)
    }
  },
  firestore () {
    return {
      officers: db.collection('officers').orderBy('index')
    }
  }
}
</script>


<style lang="scss" scoped>

.hero.is-success {
  
}
.hero .nav, .hero.is-success .nav {
  -webkit-box-shadow: none;
  box-shadow: none;
}
.box {
  margin-top: 5rem;
}
.avatar {
  margin-top: -80px;
  padding-bottom: 150px;
  margin-left: auto;
  margin-right: auto;
}
.avatar img {
  padding: 5px;
  background: #fff;
  border-radius: 50%;
  -webkit-box-shadow: 0 2px 3px rgba(10,10,10,.1), 0 0 0 1px rgba(10,10,10,.1);
  box-shadow: 0 2px 3px rgba(10,10,10,.1), 0 0 0 1px rgba(10,10,10,.1);
}
input {
  font-weight: 300;
}
p {
  font-weight: 700;
}
p.subtitle {
  padding-top: 1rem;
}

.hero {
  margin-top: -50px;
}

</style>
