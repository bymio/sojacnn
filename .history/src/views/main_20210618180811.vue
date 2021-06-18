<template>
  <div class="main">
    <main-tab-bar></main-tab-bar>
    <home></home>
    <!-- <gsosp></gsosp> -->
  </div>
</template>

<script>
import Home from "views/home/Home.vue";
import Gsosp from "views/gsosp/GsoSP.vue";
import MainTabBar from "components/content/mainTabbar/MainTabBar.vue";

export default {
  data() {
    return {
      msg: "",
    };
  },
  methods: {},
  components: {
    Home,
    Gsosp,
    MainTabBar,
  },
};
</script>

<style scoped>
</style>
