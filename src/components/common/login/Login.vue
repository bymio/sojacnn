<template>
  <div class="login">
    <div class="login-box">
      <h1>登陆</h1>
      <div class="input-box">
        <div class="input-text">
          <span class="iconfont icon-yonghu"></span>
          <input type="text" placeholder="用户名" />
        </div>
        <div class="input-text">
          <span class="iconfont icon-icon-mima"></span>
          <input type="password" placeholder="密码" />
        </div>
        <div class="input-btn" @click="LoginClick">登陆</div>
        <div class="sign-up">还没账户？<a href="#">立即注册</a></div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      msg: "",
      path: "/home",
    };
  },
  methods: {
    LoginClick() {
      this.$router.push(this.path);
    },
  },
};
</script>

<style>
@import "./css/index.css";
@import "../../../assets/iconfont/iconfont.css";
</style>
