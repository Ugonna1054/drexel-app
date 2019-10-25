<template>
  <div class="">
      <HeaderNav/>
      <search class="mb-5" style="margin-top:-57vh"/> 
      <div class="container">
        <p class="text container search-text">Based on your search</p>
        <section class="container section">
            <div class="row">
                <div class="col-md-4 col-6 padding-0  mb-3 " v-for="(item, index) in images.photos" :key="index">
                        <div class="card">
                            <img :src="item.src.original" @click="imageDetails(item)" style="height:300px; cursor:pointer"  class="card-img-to img-fluid" alt="...">
                            <!-- <div class="card-body">
                                <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                            </div> -->
                        </div>
                </div>
            </div>

            <div class="d-flex justify-content-between mb-5 mt-sm-3 mt-n2 ">
                <div class="btn" style="background:chocolate" @click="previous_page"><i class="fas fa-angle-left"></i> Previous</div>
                <div class="btn" style="background:chocolate" @click="next_page">Next <i class="fas fa-angle-right"></i></div>
            </div>
        </section>
      </div>

      <Footer/>
  </div>
</template>

<script>
import search from '@/components/search.vue'
import Footer from '@/components/Footer.vue'
import HeaderNav from '@/components/HeaderNav.vue'
export default {
    name:'results',
    components : {
        Footer,
        search,
        HeaderNav
    },
    computed : {
        images () {
            return this.$store.state.images
        }
    },
    methods : {
        imageDetails (item)  {
            this.$store.commit('setImageDetails', item);
            this.$router.push('/details')
        },
        next_page () {
            this.$store.dispatch('getImages', {
               url: this.images.next_page
            })
        },
        previous_page () {
           this.$store.dispatch('getImages', {
              url: this.images.prev_page
            })
        }
    }
}
</script>

<style scoped>
p {
    color:tomato;
    font-size:20px;
    font-weight:bold;
    margin-top:25vh
}

.card {
    width:10rem
}

.section {
   margin-top:5vh
}

@media screen and (min-width:768px) {
    .card {
        width:20rem
    }
}

</style>