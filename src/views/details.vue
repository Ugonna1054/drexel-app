<template>
    <div class="container mt-5">
        <div class="row">
            <div class="col-md-6 col-12 mb-5">
                <ul class="list-group mb-3">
                    <li class="list-group-item bg-info text-white">Photo by {{imageDetails.photographer}}, with <i class="fas fa-heart text-danger"></i> from Pexels</li>
                    <li class="list-group-item">Photographer id: {{imageDetails.photographer_id}} </li>
                    <li class="list-group-item">Photographer: {{imageDetails.photographer}}</li>
                    <li class="list-group-item">Photographer url: {{imageDetails.photographer_url}}</li>
                    <li class="list-group-item">Image height: {{imageDetails.height}}</li>
                    <li class="list-group-item">Image width: {{imageDetails.width}}</li>
                    <li class="list-group-item"><a :href="imageDetails.src.original" download> <span class="btn btn-primary">Download <i class="fa fa-download" aria-hidden="true"></i></span></a></li>
                </ul>
                 <div class="btn btn-dark" @click="back"> <i class="fas fa-chevron-left mr-2"></i> Back</div>

            </div>
           
            <div class="col-md-6 12">
                <img :src="imageDetails.src.original" class="img-fluid" alt="">
            </div>
        </div>
    </div>
    
</template>

<script>
export default {
name:'details',

 computed : {
    imageDetails () {
       return this.$store.state.imageDetails;
 }
 },
 methods: {
     back () {
         this.$router.go(-1)
   } 
 }
}
</script>

<style>


.fa-angle-double-left {
    font-size:19.5px;
    margin-left: 10px;
    position: absolute;
}
.btnn{
    font-size:20px
}



</style>
