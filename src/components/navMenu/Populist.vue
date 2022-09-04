<template>
  <div class="popular">
    <p>POPULAR LIST</p>
    <br>
    <router-link :to="{path:'/home/choices'}" class="choice">Our choices</router-link>
    <router-link :to="{path:'/home/topnovel'}" class="top">Top novels</router-link>   
    <p></p>
    <br>
    <p></p>
  </div>
</template>

<script>
export default {
  name:'Populist'
}
</script>

<style scoped>
  .popular{
    border:2px solid rgb(228, 227, 227);
    margin-top: 5%; 
  }
  p{
    position: relative;
    top:10%;
    font-size: 20px;
    left:5%;
    font-weight:bolder;
  }
  .choice{
    left:5%;
    position: relative;
    font-size: 18px;
    font-weight:bolder;
    text-decoration: none;
    top: 10%;
    color:blueviolet;
  }
  .top{
    margin-left: 30%;
    margin-top: 10%;
    font-size: 18px;
    font-weight:bolder;
    text-decoration: none;
    color:blueviolet;
  }
</style>