<template>
  <header class="navbar has-shadow">
    <div class="container">
      <div class="navbar-brand">
        <a class="navbar-item">
          <router-link :to="{ name: 'Home' }">
            <img src="../../assets/logo.png"></img>
          </router-link>
        </a>
        <div class="navbar-burger burger" data-target="navbarDropdown">
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>
      <div id="navbarDropdown" class="navbar-menu">
        <div class="navbar-start">
          <div class="navbar-item has-dropdown is-hoverable">
            <a class="navbar-link" href="#">
              Resources
            </a>
            <div class="navbar-dropdown is-boxed">
              <a class="navbar-item" href="#">
                Education
              </a>
              <a class="navbar-item" href="#">
                Four Year Plan
              </a>
              <a class="navbar-item" href="#">
                 <router-link :to="{ name: 'Opportunities' }" @click.native="closeMenu ()">Opportunities</router-link>
              </a>
              <a class="navbar-item" href="#">
                Careers
              </a> 
            </div>
          </div>
          <div class="navbar-item has-dropdown is-hoverable">
            <a class="navbar-link" href="#">
              Get Involved
            </a>
            <div class="navbar-dropdown is-boxed">
              <a class="navbar-item" href="#">
                Events
              </a>
              <a class="navbar-item" href="#">
                Outreach
              </a>
              <a class="navbar-item" href="#" >
                <router-link :to="{ name: 'Podcast' }" @click.native="closeMenu ()">Podcast</router-link>
              </a>
              <a class="navbar-item" href="#">
                Sponsorship
              </a>
              <hr class="navbar-divider">
              <a class="navbar-item" href="#">
                <router-link :to="{ name: 'Calendar' }" @click.native="closeMenu ()">Calendar</router-link>
              </a>
              <a class="navbar-item" href="#">
                <router-link :to="{ name: 'Contact' }" @click.native="closeMenu ()">Contact</router-link>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </header>
</template>

<script>
export default {
  methods: {
    closeMenu () {
      var $navbarBurgers = Array.prototype.slice.call(document.querySelectorAll('.navbar-burger'), 0)
      if ($navbarBurgers.length > 0) {
        // Add a click event on each of them
        $navbarBurgers.forEach(function ($el) {
          var target = $el.dataset.target
          var $target = document.getElementById(target)
          $el.classList.toggle('is-active')
          $target.classList.toggle('is-active')
        })
      }
    }
  }
}

/* burger navigation */
document.addEventListener('DOMContentLoaded', function () {
  // Get all "navbar-burger" elements
  var $navbarBurgers = Array.prototype.slice.call(document.querySelectorAll('.navbar-burger'), 0)
  // Check if there are any navbar burgers
  if ($navbarBurgers.length > 0) {
    // Add a click event on each of them
    $navbarBurgers.forEach(function ($el) {
      $el.addEventListener('click', function () {
        // Get the target from the "data-target" attribute
        var target = $el.dataset.target
        var $target = document.getElementById(target)
        // Toggle the class on both the "navbar-burger" and the "navbar-menu"
        $el.classList.toggle('is-active')
        $target.classList.toggle('is-active')
      })
    })
  }
})
</script>

<style lang="scss" scoped>
.navbar {
  border-bottom: 1px solid dark-grey;
}

.navbar-item {
  color: #0a0a0a !important;
}

img {
  margin-top: 5%;
}
</style>

