<template>
  <div>
    <header-bar></header-bar>
    <nav-bar></nav-bar>
  </div>
</template>

<script>
import HeaderBar from "components/common/headerbar/HeaderBar.vue";
import NavBar from "components/common/navbar/NavBar.vue";
export default {
  data() {
    return {
      msg: "",
    };
  },
  methods: {},
  components: {
    HeaderBar,
    NavBar,
  },
};
</script>

<style scoped>
</style>
