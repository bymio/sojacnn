<template>
  <div class="main-tabbar">
    <header-bar></header-bar>
    <nav-bar :deliverParent1='msg'></nav-bar>
  </div>
</template>

<script>
import { findContype } from "@/api/index";

import HeaderBar from "components/common/headerbar/HeaderBar.vue";
import NavBar from "components/common/navbar/NavBar.vue";
export default {
  data() {
    return {
      msg: [],
    };
  },
  methods: {
    async handleFindContype() {
      let result = await findContype();
      console.log(result);
      this.msg = [...result.data.data.item];
      console.log(this.msg);
    },
  },
  components: {
    HeaderBar,
    NavBar,
  },
  mounted() {
    this.handleFindContype();
  },
};
</script>

<style scoped>
</style>
