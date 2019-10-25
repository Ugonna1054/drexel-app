<template>
<div>
      <section class='view image'>
          <div class="mask  flex-center" >
            <div class="text-center px-4 mt-n5 container">
                <div class="parent">
                <div class="div1">  <p class="font-bold main-title" style="color:gainsboro"><strong>WELCOME TO DREXEL</strong></p> </div>
                <div class="div2">  <p class="mx-5 mb-5 text-white">Drexel allows you to search for and download a wide variety of pictures from a robust picture Library provided by Pexels.com! </p> 
                </div>
                <div class="div3">
                        <div class="arrow bounce">
                        <a class="fa  fa-arrow-down fa-2x" style="color:white" href="#"></a>
                        </div>

                        <div  @click="getStarted" class="btn btn-lg rounded-pill text-white">Get Started  </div>
                </div>
                </div>
               
               
                
            </div>
          
          </div>
      </section>
</div>

</template>

<script>
import {mdbCard, mdbJumbotron,mdbFormInline, mdbBtn , mdbCardTitle, mdbView, mdbMask, mdbIcon} from 'mdbvue'
export default {
    name:'HomeBackground',
    components:{
        mdbCard,
        mdbJumbotron, 
        mdbBtn,
        mdbCardTitle, 
        mdbView,
        mdbMask,
        mdbIcon,
        mdbFormInline

    },
    data () {
      return {
      }
    },

    methods : {
         getStarted () {
             this.$router.push('/results')
      }
    }
}
</script>

<style scoped>
.image{
    background: url('../assets/image.png') center ;
    background-size:cover;
    background-repeat:no-repeat;
    height:100vh;
}

.arrow {
  text-align: center;
  margin: 2% 0;
}
.bounce {
  -moz-animation: bounce 2s infinite;
  -webkit-animation: bounce 2s infinite;
  animation: bounce 2s infinite;
}

@keyframes bounce {
  0%, 20%, 50%, 80%, 100% {
    transform: translateY(0);
  }
  40% {
    transform: translateY(-30px);
  }
  60% {
    transform: translateY(-15px);
  }
}

.btn {
      background-color:chocolate
}

.btn:hover {
    background-color:midnightblue 
}

.main-title {
    font-size:30px;
     margin-top:-100px
}

.parent {
    display: grid;
    grid-template-columns: 1fr;
    grid-template-rows: repeat(3, 1fr);
    grid-column-gap: 0px;
    grid-row-gap: 0px;
}

.div1 { grid-area: 2 / 1 / 2 / 2; }
.div2 { grid-area: 2 / 1 / 3 / 2; }
.div3 { grid-area: 3 / 1 / 4 / 2; }

@media screen and (min-width:768px) {
 .main-title {
      font-size:50px; 
  }
}

</style>
