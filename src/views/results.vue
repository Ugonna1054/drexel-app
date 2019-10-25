<template>
  <div class="">
      <HeaderNav/>
      <search class="mb-5" style="margin-top:-57vh"/> 
      <div class="container">
       
        <p class="text container search-text" v-if="images.page">Based on your search</p>
        <span style="color:chocolate" class="container"  v-if="images.page">Page {{images.page}}</span>
       
        <section class="container section">
            <div class="row">
                <div class="col-md-4 col-6 padding-0  mb-3 " v-for="(item, index) in images.photos" :key="index">
                        <div class="card">
                            <img :src="item.src.original" @click="imageDetails(item)" style="height:300px; cursor:pointer"  class="card-img-to img-fluid" alt="image">
                        </div>
                </div>
            </div>
            <span style="color:chocolate" class="mb-5"  v-if="images.page">Page {{images.page}}</span>
            <div class="d-flex justify-content-between mb-5 mt-sm-3 mt-n2 ">
                <div class="btn text-white" style="background:chocolate"   v-if="images.prev_page" @click="previous_page"><i class="fas fa-angle-left"></i> Previous <span v-if="loading2"> <i class="fa fa-spinner fa-spin fa-1x fa-fw"></i> </span> </div>
                <div class="btn text-white" style="background:chocolate"  v-if="images.next_page" @click="next_page">Next <i class="fas fa-angle-right"></i>  <span v-if="loading"> <i class="fa fa-spinner ml-1 fa-spin fa-1x fa-fw"></i> </span></div>
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
import { loadavg } from 'os'
export default {
    name:'results',
    data () {
        return {
             loading:false,
             loading2:false
        }
    },
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
            this.loading=true
            this.$store.dispatch('getImages', {
               url: this.images.next_page
            })
            .then (_ => this.loading=false)
            .catch(_ => this.loading=false)
        },
        previous_page () {
           this.loading2=true
           this.$store.dispatch('getImages', {
              url: this.images.prev_page
            })
            .then (_ => this.loading2=false)
            .catch(_ => this.loading2=false)
        }
    }
}
</script>

<style scoped>
p {
    color:chocolate;
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