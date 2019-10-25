<template>
<div>
    <mdb-navbar position='bottom' class="footer text-white font-weight-bold">
    <div class="ml-5">
        Made with <span style="color:red; font-size:18px"> &#10084; </span> by Ugonna  &trade; <a href="https://github.com/Ugonna1054/drexel-app"><i class="fab fa-github text-white" ></i></a>
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
