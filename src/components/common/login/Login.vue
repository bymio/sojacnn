<template>
  <div class="login">
    <div class="login-box">
      <h1>登陆</h1>
      <div class="input-box">
        <div class="input-text">
          <span class="iconfont icon-yonghu"></span>
          <input id="user" type="text" placeholder="用户名" />
        </div>
        <div class="input-text">
          <span class="iconfont icon-icon-mima"></span>
          <input id="password" type="password" placeholder="密码" />
        </div>
        <div class="input-btn" @click="LoginClick">登陆</div>
        <div class="sign-up">还没账户？<a href="#">立即注册</a></div>
      </div>
    </div>
  </div>
</template>
 
<script>
import { login } from "@/api/index";

export default {
  data() {
    return {
      msg: "",
      path: "/home",
    };
  },
  mounted() {
    // this.handleLogin();
  },
  methods: {
    async handleLogin(user, password) {
      let data = {
        account: "181360226",
        password: "pyb***20000112",
        remember: 0,
      };
      var result;
      if (user == data.account && password == data.password) {
        result = await login(data);
        this.$router.push(this.path);
        console.log(result);
      } else {
        alert("账号或者密码错误");
      }
    },

    

      LoginClick() {
        let user = document.getElementById("user").value;
        let password = document.getElementById("password").value;
  
        // this.$router.push(this.path);
        this.handleLogin(user, password);
      },
    },

  

};
</script>

<style>
@import "./css/index.css";
@import "../../../assets/iconfont/iconfont.css";
</style>
