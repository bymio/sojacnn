<template>
  <div class="links">
    <div class="links-header">
      <div class="links-header-title">
        <h2>友情链接</h2>
      </div>
    </div>
    <div class="body">
      <div class="body-item">
        <p>
          <a href="#" title="">中国科班</a>
        </p>
      </div>
      <div class="body-item">
        <p>
          <a href="#" title="">中国科班</a>
        </p>
      </div>
      <div class="body-item">
        <p>
          <a href="#" title="">中国科班</a>
        </p>
      </div>
      <div class="body-item">
        <p>
          <a href="#" title="">中国科班</a>
        </p>
      </div>
      <div class="body-item">
        <p>
          <a href="#" title="">中国科班</a>
        </p>
      </div>
      <div class="body-item">
        <p>
          <a href="#" title="">中国科班</a>
        </p>
      </div>
      <div class="body-item">
        <p>
          <a href="#" title="">中国科班</a>
        </p>
      </div>
      <div class="body-item">
        <p>
          <a href="#" title="">中国科班</a>
        </p>
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
.links {
  width: 285px;
  height: 370px;
  /* background: yellowgreen; */
  position: absolute;
  top: 400px;
  right: 0px;
}
.links .links-header {
  width: 285px;
  height: 35px;
  background-color: transparent;
  border: 0;
  padding: 0 0 8px;
  position: relative;
  border-bottom: 2px solid #006ed7;
}

.links .links-header .links-header-title h2 {
  font-size: 20px;
  font-family: "微软雅黑", Arial, sans-serif;
  font-weight: 600;
  color: #006ed7;
  display: block;
  padding-left: 15px;
  position: relative;
}
.links .links-header .links-header-title h2::before {
  width: 5px;
  height: 15px;
  content: "";
  position: absolute;
  left: 0;
  top: 50%;
  margin-top: -7px;
  margin-left: 5px;
  background-color: #006ed7;
}

.body {
  width: 285px;
  height: 320px;
  padding-top: 10px;
}
.body .body-item {
  padding: 0;
  height: 35px;
  line-height: 35px;
  margin-bottom: 5px;
  border: 0;
  text-align: center;
  background-color: #f2f3f4;
}
</style>
