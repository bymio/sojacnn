<template>
  <div class="header">
    <div class="w1200">
      <div class="logo">
        <a href="#">
          <img src="~assets/img/logo.png" alt="" />
        </a>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      msg: "",
    };
  },
  methods: {},
};
</script>

<style scoped>

.header {
  width: 1903px;
  background: #014899;
  height: 120px;
}
.w1200 {
  height: 120px;
  width: 1200px;
  margin: 0 auto;
  background: url(~assets/img//topbg2.png) no-repeat right bottom;
}
.w1200 .logo a img {
  border: 0;
  padding: 0px;
  margin: 0px;
  width: 393px;
  height: 93px;
  margin-top: 12px;
}
.w1200 .logo{
  width: 393px;
  height: 97px;
  /* background: #000; */
}
a:hover {
  color: #01438d;
}
</style>
