<template>
  <div class="login">
    <div class="login-box">
      <h1>登陆</h1>
      <div class="input-box">
        <div class="input-text">
          <span class="iconfont icon-yonghu"></span>
          <input id="user" type="text" placeholder="username" />
        </div>
        <div class="input-text">
          <span class="iconfont icon-icon-mima"></span>
          <input id="password" type="password" placeholder="password" />
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
      path: "/administrators",
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
      if (user === data.account && password === data.password) {
        const result = await login(data);
        if(result.data.code !== 200)return this.$message.error('用户名或密码输入错误')
        this.$message.success('登录成功')
        console.log(document.cookie)
        this.$router.push(this.path);
      } else {
        this.$message.error('用户名或密码输入错误')
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
