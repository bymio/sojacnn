<template>
  <div class="substance">
    <div class="substance-header">
      <div class="substance-header-title">
        <h2>工作动态</h2>
      </div>
    </div>
    <div class="body">
      <ul class="list-group">
        <li class="list-group-item">
          <a href="#" title="">内容.....................</a>
          <span class="time">2021-3-3</span>
        </li>
        <li class="list-group-item">
          <a href="#" title="">内容.....................</a>
          <span class="time">2021-3-3</span>
        </li>
        <li class="list-group-item">
          <a href="#" title="">内容.....................</a>
          <span class="time">2021-3-3</span>
        </li>
        <li class="list-group-item">
          <a href="#" title="">内容.....................</a>
          <span class="time">2021-3-3</span>
        </li>
        <li class="list-group-item">
          <a href="#" title="">内容.....................</a>
          <span class="time">2021-3-3</span>
        </li>
        <li class="list-group-item">
          <a href="#" title="">内容.....................</a>
          <span class="time">2021-3-3</span>
        </li>
        <li class="list-group-item">
          <a href="#" title="">内容.....................</a>
          <span class="time">2021-3-3</span>
        </li>
        <li class="list-group-item">
          <a href="#" title="">内容.....................</a>
          <span class="time">2021-3-3</span>
        </li>
        <li class="list-group-item">
          <a href="#" title="">内容.....................</a>
          <span class="time">2021-3-3</span>
        </li>
        <li class="list-group-item">
          <a href="#" title="">内容.....................</a>
          <span class="time">2021-3-3</span>
        </li>
        <li class="list-group-item">
          <a href="#" title="">内容.....................</a>
          <span class="time">2021-3-3</span>
        </li>
        <li class="list-group-item">
          <a href="#" title="">内容.....................</a>
          <span class="time">2021-3-3</span>
        </li>
        <li class="list-group-item">
          <a href="#" title="">内容.....................</a>
          <span class="time">2021-3-3</span>
        </li>
        <li class="list-group-item">
          <a href="#" title="">内容.....................</a>
          <span class="time">2021-3-3</span>
        </li>
        <li class="list-group-item">
          <a href="#" title="">内容.....................</a>
          <span class="time">2021-3-3</span>
        </li>
        <li class="list-group-item">
          <a href="#" title="">内容.....................</a>
          <span class="time">2021-3-3</span>
        </li>
      </ul>
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
.substance {
  width: 1200px;
  min-width: 1200px;
  height: 2000px;
  /* background: yellowgreen; */
  position: absolute;
  left: 351.5px;
  right: 351.5px;
  top: 181px;
}
.substance .substance-header .substance-header-title {
  margin-top: 20px;
  background-color: transparent;
  border: 0;
  padding: 0 0 10px;
  position: relative;
  border-bottom: 2px solid #006ed7;
}
.substance .substance-header .substance-header-title h2 {
  font-size: 20px;
  font-family: "微软雅黑", Arial, sans-serif;
  font-weight: 600;
  color: #006ed7;
  display: block;
  padding-left: 15px;
  position: relative;
}
.substance .substance-header .substance-header-title h2::before {
  width: 5px;
  height: 15px;
  content: "";
  position: absolute;
  left: 0;
  top: 50%;
  margin-top: -7px;
  background-color: #006ed7;
}

.body {
  padding: 10px 0 0;
  flex: 1 1 auto;
}
.body .list-group {
  display: flex;
  -webkit-box-orient: vertical;
  -webkit-box-direction: normal;
  flex-direction: column;
  padding-left: 0;
  margin-bottom: 0;
}
.body .list-group-item {
  margin-bottom: 0;
  border: 0;
  border-bottom: 1px dashed #ddd;
  position: relative;
  display: block;
  padding: 13px 18px;
}
.body .list-group-item::before {
  content: "";
  width: 6px;
  height: 6px;
  background-color: #b6bccb;
  position: absolute;
  left: -1px;
  top: 50%;
  margin-top: -4px;
}
.body .list-group-item a:hover {
  color: #006ed7;
}
.body .list-group-item span {
  position: absolute;
  right: 0;
  color: #999;
}
</style>
