<template>
  <div class="myClass">
    <el-menu 
    :default-active="'/index'"
    router
    mode="horizontal"
    background-color="#96A28C"
    text-color="#222"
    active-text-color="red"
    height="10000px"
    >
    <span style="position: absolute;padding-top: 15px;right: 87%;font-size: 40px;font-weight: bold">yayanovel</span>
    <el-menu-item v-for="(item,i) in navList" :key="i" :index="item.name">
      {{ item.navItem }}
    </el-menu-item>
    <el-input
      placeholder="search"
      prefix-icon="el-icon-search"
      style="width: 300px;position:absolute;margin-top: 20px;right: 18%;"
      v-model="keywords">
    </el-input>
    <button class="register" v-on:click="register">REGISTER</button>
    <button class="login" v-on:click="login">LOGIN</button>
 </el-menu>
</div>
</template>

<script>
export default {
  name: 'NavMenu',
  data () {
    return {
      navList: [
        {name: '/index', navItem: 'HOME'},
        {name: '/libary', navItem: 'MY LIBARY'},
        {name: '/genres', navItem: 'GENRES'},
        {name: '/about', navItem: 'ABOUT'}
      ],
      keywords: ''
    }
  },
  methods:{
    register(){
      console.log('fff');
      this.$router.push({path:'/register'})
    },
    login(){
      console.log("login");
    }
  }
}
</script>

<style scoped>
  a{
    text-decoration: none;
  }

  span {
    pointer-events: none;
  }
  /* .myClass.el-menu--horizontal el-menu{
      background-color: red;
  } */
  .el-menu--horizontal{
      background-color: red;
      height: 80px;
  }
  .el-menu--horizontal>.el-menu-item{
      font-size: 20;
      height: 80px;
  }
  .el-menu-item{
      font-size: 30px;
      left:400px;
      text-align:center;
      padding: 10px 30px;
      height: 80px;
      
  }
  .el-menu-item.is-active{
    height: 80px;
  }
  .el-menu--horizontal>.el-menu-item.is-active{
    height: 80px;
  }
  .register{
    position: absolute;
    padding-top: 28px;
    right: 10%;
    font-size: 20px;
    font-weight: bold;
    border:none;
    background:#96A28C;
  }
  
  .login{
    position: absolute;
    padding-top: 28px;
    right: 5%;
    font-size: 20px;
    font-weight: bold;
    border:none;
    background:#96A28C;
  }
</style>

