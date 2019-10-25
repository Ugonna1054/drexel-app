<template>
    <div class='nav mb-5'>
      <mdb-navbar id="main-navba" dark position="top"  class="navbar">
          <mdb-navbar-brand waves class="font-weight-bold" to ='/'>
            <span>DREXEL</span>
          </mdb-navbar-brand>
     </mdb-navbar>
    </div>
</template>

<script>
import{mdbNavbar, mdbNavbarBrand} from 'mdbvue'
export default {
    name:'Navigation',
    components : {
    mdbNavbar,
    mdbNavbarBrand
    },

    data () {
        return {
        }
    },

    computed : {
      isAuthenticated () {
        return this.$store.state.isAuthenticated;
      }
    },

    methods : {
      userSignOut () {
        this.$store.dispatch('userSignOut')
      }
    },
   
}
</script>

<style scoped>

 
.navbar {
    background: midnightblue
}

</style>
