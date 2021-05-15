<template>
  <div id="right-fixed">
    <a href="#" target="_self">
      <img src="~assets/img/fiexd/bszn.jpg" alt="官方微博" />
    </a>
    <a href="#" target="_self">
      <img src="~assets/img/fiexd/xzzx.jpg" alt="官方公众号" />
    </a>
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
#right-fixed {
  position: fixed;
  width: 65px;
  height: auto;
  right: 0;
  top: 50%;
  margin-top: -100px;
  z-index: 999;
}
</style>
