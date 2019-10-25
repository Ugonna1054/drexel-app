<template>
<div>
    <mdb-navbar position='bottom' class="footer text-white font-weight-bold">
    <div class="ml-5">
        Made with <span style="color:red; font-size:18px"> &#10084; </span> by Ugonna &trade;
    </div>
    </mdb-navbar>
</div>
</template>

<script>
import{mdbNavbar, mdbNavItem, mdbNavbarNav, mdbBtn, mdbNavbarToggler, mdbNavbarBrand, mdbFooter} from 'mdbvue'
export default {
    name:'Footer',
   components : {
       mdbNavbar
   }
    
}
</script>

<style scoped>
.footer{
    background: midnightblue;
    display: flex;
    justify-content: space-around

}
</style>
