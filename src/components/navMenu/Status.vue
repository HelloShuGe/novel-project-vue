<template>
  <div class="status">
    <p>STATUS</p>
    <br>
    <router-link :to="{path:'/home/ongoingnovel'}" class="ongoing">Ongoing</router-link>
    <router-link :to="{path:'/home/completednovel'}" class="completed">Completed</router-link>   
    <p></p>
    <br>
    <p></p>
  </div>
</template>

<script>
export default {
  name:'Status'
}
</script>

<style>
  .status{
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
  .ongoing{
    left:5%;
    position: relative;
    font-size: 18px;
    font-weight:bolder;
    text-decoration: none;
    top: 10%;
    color:blueviolet;
  }
  .completed{
    margin-left: 30%;
    margin-top: 10%;
    font-size: 18px;
    font-weight:bolder;
    text-decoration: none;
    color:blueviolet;
  }
</style>