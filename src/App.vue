<template>
  <div class="app">
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
    <el-input prefix-icon="el-icon-search"  @change="search"
      placeholder="search"
       style="width: 300px;position:absolute;margin-top: 20px;right: 30%;"
      v-model="keywords" >
      
    </el-input>
    
    <!-- <button 
      @click="search"></button> -->
    <div v-if="token === '' || token === 'undefined' || token == null">
      <button class="register" v-on:click="register">REGISTER</button>
      <button class="login" v-on:click="login">LOGIN</button>
    </div>
    <div v-else>
      <div class="el-icon-s-custom">{{username}}</div>
      <button @click="logout" class="logout">LOG OUT</button>
    </div>
    
 </el-menu>
 <div>
   <router-view></router-view>
</div>
</div>
</template>
<script>
export default{
  name:'App',
  data () {
    return {
      navList: [
        {name: '/home', navItem: 'HOME'},
        {name: '/libary', navItem: 'MY LIBARY'},
        {name: '/genres', navItem: 'GENRES'},
        {name: '/about', navItem: 'ABOUT'}
      ],
      keywords: '',
      token: '',
      username:'',
    }
  },
  mounted:function(){
    this.init();
  },
  methods:{
    register(){
      this.$register();
      this.init();
    },
    login(){
      // this.$router.push({path:'/login'})
      this.$login();
      this.init();
      
    },
    init(){
      this.token = sessionStorage.getItem("token");
      this.username = sessionStorage.getItem("username");
    },
    logout(){
      sessionStorage.removeItem("token");
      sessionStorage.removeItem("username");
      this.init();
    },
    search(){
      console.log(this.keywords);
      sessionStorage.setItem("searchWord", this.keywords);
      this.$router.push({path:'/home/searchnovel', query:{key: this.keywords}});
    }
  },
  watch:{
    token:'init'
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
.el-icon-s-custom{
  position: absolute;
  padding-top: 28px;
  left: 85%;
  font-size: 20px;
  padding-top: -10%;
}
.logout{
  position: absolute;
  padding-top: 28px;
  right: 2%;
  font-size: 15px;
  font-weight: bold;
  border:none;
  background:#96A28C;
}
</style>
