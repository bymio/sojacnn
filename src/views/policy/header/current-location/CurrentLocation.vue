<template>
  <div class="current-location">
    <h2>政策法规</h2>
    <p>
      <a href="/policy">政策法规</a>
      <span>/</span>
      当前位置: <a href="/home">首页</a>
      
    </p>
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
.current-location {
  width: 1200px;
  height: 50px;
  background: rgb(255, 255, 255);
  margin-top: 10px;
  line-height: 50px;
}
.current-location h2{
  display: inline-block;
  color: #1675e2;
}
.current-location p{
  float: right;
}
.current-location p a{
  float: right;
}
.current-location p a:hover{
  color: #1675e2;
}
.current-location span{
  float: right;
}
</style>
