<template>
 <div>
      <!-- <body id = poster>
  <el-form class="login-container" label-position="left"
           label-width="0px">
    <h3 class="login_title">Login</h3>
    <el-form-item>
      <el-input type="text" v-model="loginForm.username"
                auto-complete="off" placeholder="username"></el-input>
    </el-form-item>
    <el-form-item>
      <el-input type="password" v-model="loginForm.password"
                auto-complete="off" placeholder="password"></el-input>
    </el-form-item>
    <el-form-item style="width: 100%">
      <el-button type="primary" style="width: 100%;background: #505458;border: none" v-on:click="login">login</el-button>
    </el-form-item>
  </el-form>
  </body> -->

<el-dialog title="REGISTER" :visible.sync= "dialogFormVisible" :append-to-body="true" width="25%" @click="close">
  <el-form class="login-container" label-position="left"
           label-width="0px">
    
    <el-form-item>
      <el-input type="text" v-model="loginForm.username"
                auto-complete="off" placeholder="email"></el-input>
    </el-form-item>
    <el-form-item>
      <el-input type="password" v-model="loginForm.password"
                auto-complete="off" placeholder="password"></el-input>
    </el-form-item>
    <el-form-item>
      <el-input type="text" v-model="loginForm.code"
                auto-complete="off" placeholder="verification code"  style="width: 40%;"></el-input>
                 <el-button type="primary" style="width: 40%;position: absolute; left: 60%; background: #505458;border: none" v-on:click="getcode">Get the verification code</el-button>
    </el-form-item>
   
    <el-form-item style="width: 100%">
      <el-button type="primary" style="width: 100%;background: #505458;border: none" v-on:click="register">register</el-button>
    </el-form-item>
  </el-form>
   

</el-dialog>

  </div>
</template>
<script>
export default {
    name: "Register",
    data() {
        return {
            loginForm: {
                username: "",
                password: "",
                code:"",
            },
            dialogFormVisible: true,
        };
    },
    methods: {
        getcode(){
          this.$axios
                .post("/getcode", {
                userEmail: this.loginForm.username,
                userPassword: this.loginForm.password
            })
                .then(successResponse => {
                console.log(successResponse)
                if (successResponse.data.code === 200) {
                    this.$alert(successResponse.data.msg);
                }else{
                    this.$alert(successResponse.data.msg);
                }

            })
                .catch(failResponse => {
            });
        },
        init(){
          dialogFormVisible = true;
          console.log(this.dialogFormVisible);
        },
        close(){
          console.log(sessionStorage.getItem('token'));
          console.log("刷新当前界面");
          this.dialogFormVisible = false;
          location.reload()
          this.router.go(0);
        },
        register() {
            this.$axios
                .post("/register", {
                userEmail: this.loginForm.username,
                userPassword: this.loginForm.password,
                activeCode: this.loginForm.code,
            })
                .then(successResponse => {
                console.log(successResponse)
                if (successResponse.data.code === 200) {
                    this.$alert(successResponse.data.msg);
                    this.close();
                }else{
                    this.$alert(successResponse.data.msg);
                }

            })
                .catch(failResponse => {
            });
        
        }
    },
    mounted:function(){
      this.init();
    }
    
}
</script>
<style>
  .el-dialog{
    position: relative;
    margin: 0 auto 50px;
    background: #FFF;
    border-radius: 2px;
    box-shadow: 0 1px 3px rgb(0 0 0 / 30%);
    box-sizing: border-box;
    width: 30%;
  }
  .login_title {
    margin: 0px auto 40px auto;
    text-align: center;
    color: #505458;
  }
  body{
    margin: 0px;
  }
  .login-container{
    left:5%;
    position: relative;
    width: 90%;
    font-size: 20px;
  }
</style>
