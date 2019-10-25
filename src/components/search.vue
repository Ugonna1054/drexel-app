<template>
  <div class="container">
       <!-- Search form -->
       <div class="input-group md-form form-sm ml-xl-n5 form-2 pl-0">
            <input class="form-control my-0 py-1" v-model="search" type="text" placeholder="Search for high quality beautiful and free photos......" aria-label="Search">
            <div class="input-group-append">
                <span style="background:midnightblue" @click="searchPhoto" class="input-group-text" id="basic-text1"><i class="fas fa-search text-white"  style=";cursor:pointer" aria-hidden="true"></i></span>
            </div>
       </div>
  </div>
</template>

<script>
export default {
    name:'search',
    data () {
        return {
            search : ""
        }
    },

    methods : {
        searchPhoto () {
            this.$store.dispatch('getImages', {
            url : `https://api.pexels.com/v1/search/?query=${this.search}&per_page=20&page=1`
        })

        this.$router.push('/results')
      }
    }

   
}
</script>

<style scoped> 


input {
border: 2px solid whitesmoke !important;
border-radius:3px !important;
background:white !important

}

@media screen and (min-width:768px) {
  .container{
    position:absolute;
    top:67vh;
     left:3vw;
    margin:0 10vw;
    z-index:3
}
}

@media (min-width:577px) and (max-width:768px) {
.container{
    position:absolute;
    top:67vh;
    left:5vw;
     margin:0 3vw;
    z-index:3
}
}


@media screen and (max-width:576px) {
.container{
    position:absolute;
    top:67vh;
    left:-10vw;
     margin:0 10vw;
    z-index:3
}
}




</style>