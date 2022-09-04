<template>
    <div>
        <div class="aside">
           <Populist></Populist>
           <br>
           <Status></Status>
           <br>
           <Catogary></Catogary>
        </div>
        <div class="main">
           <router-view></router-view>
        </div>
    </div>
</template>

<script>

import Populist from './navMenu/Populist.vue'
import Status from './navMenu/Status.vue'
import Catogary from './navMenu/Catogary.vue'
import Novel from './navMenu/Novel.vue'

export default {
  name: 'Home',
  components: {
    Populist,
    Status,
    Catogary,
    Novel
 },
 mounted: function(){
    console.log("转发");
    //this.loaderNovel();
 },
 methods:{
    loaderNovel(){
        this.$router.push({
            path:'/home/allnovel'
        })
    }
 }
}
</script>

<style>
 .aside{
     position:absolute;
     top:9%;
     left:5%;
     background-color:white;
     width: 600px;
     height: max-content;
 }
 /* .aside.popularlist{
     margin-top: 2%;
 } */
 .main{
     position:absolute;
     top:9%;
     left: 35%;
     background-color:white;
     width: 1200px;
 }
</style>