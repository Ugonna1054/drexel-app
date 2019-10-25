<template>
  <div class="container">
       <!-- Search form -->
       <div class="input-group md-form form-sm form-2 pl-0">
            <input class="form-control my-0 py-1 " type="text" placeholder="Search" aria-label="Search">
            <div class="input-group-append">
                <span class="input-group-text amber lighten-3" id="basic-text1"><i class="fas fa-search text-grey" style="cursor:pointer" aria-hidden="true"></i></span>
            </div>
       </div>
  </div>
</template>

<script>
export default {
    name:'search'
}
</script>

<style scoped> 
.container{
    position:absolute;
    top:-100px;
    z-index:3
}

input {
border: 2px solid whitesmoke !important;
border-radius:3px !important

}


</style>