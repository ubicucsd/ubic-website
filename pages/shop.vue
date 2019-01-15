<template>
  <section class="shop">
    <div class="section">
      <div class="container has-text-centered">
        <article class="message is-success">
          <div class="message-header">
            <p> The UBIC Store </p>
          </div>
          <div class="message-body">
            Help support UBIC by purchasing one of our shirts or stickers!
            <br>
            Members receive a discount on shirts. Contact <router-link :to="{ name: 'contact' }">Lucas Patel</router-link> for more info.
          </div>
        </article>
        <div class="columns">
          <div class="column">
            <div class="card notification">
              <div class="card-content">
                <figure class="image is-4by5">
                  <img src="~/assets/images/blackshirt.png">
                </figure>
                <a class="button is-success" href="https://www.amazon.com/UBIC-Shirt-2018-2019/dp/B07K9S4VTR/ref=sr_1_1?s=grocery&ie=UTF8&qid=1546471618&sr=8-1&keywords=ubic+t-shirt"> 
                  <span> Buy on Amazon </span>
                  <span class="icon is-small">
                    <i class="fab fa-amazon"></i>
                  </span>
                </a>
              </div>
            </div>
          </div>
          <div class="column">
            <div class="card notification">
              <div class="card-content">
                <figure class="image is-4by5">
                  <img src="~/assets/images/whiteshirt.png">
                </figure>
                <a class="button is-success" href="https://www.amazon.com/UBIC-Shirt-2018-2019/dp/B07K99PBW1/ref=pd_sbs_193_1?_encoding=UTF8&pd_rd_i=B07K99PBW1&pd_rd_r=f71663d0-0ee5-11e9-b0e5-b7a8889fd845&pd_rd_w=phVdh&pd_rd_wg=0CEoK&pf_rd_p=763ccc93-bfa2-47be-85ae-0cdd7e00b3da&pf_rd_r=TEF6VHWE05V3TQQAMHSS&psc=1&refRID=TEF6VHWE05V3TQQAMHSS"> 
                  <span> Buy on Amazon  </span>
                  <span class="icon is-small">
                    <i class="fab fa-amazon"></i>
                  </span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>

export default {
  name: 'shop'
}
</script>

<style lang="scss" scoped>
.column {
  margin-left: auto;
  margin-right: auto;
}
</style>