<template>
  <div>
    <header-bar></header-bar>
    <nav-bar :deliverParent1=''></nav-bar>
  </div>
</template>

<script>
import { findContype } from "@/api/index";

import HeaderBar from "components/common/headerbar/HeaderBar.vue";
import NavBar from "components/common/navbar/NavBar.vue";
export default {
  data() {
    return {
      msg: "",
    };
  },
  methods: {
    async handleFindContype() {
      let result = await findContype();
      console.log(result);
      this.namsg = [...result.data.data.item];
      console.log(this.namsg);
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
