<template>
  <div class="home">
    <!-- <HeaderNav/> -->
    <HomeBackground/>
    <!-- <search/> -->
   </div>
</template>

<script>
// @ is an alias to /src
import HeaderNav from "@/components/HeaderNav.vue";
import HomeBackground from "@/components/HomeBackground.vue";
import search from "@/components/search.vue";


export default {
  name: "home",
  components: {
    HeaderNav,
    HomeBackground,
    search

  }
};
</script>
