<template>
  <div class="main">
    <main-tab-bar></main-tab-bar>
    <home></home>
  </div>
</template>

<script>
import Home from "views/home/Home.vue";
import Gosop from "views/gosop/Gosop.vue";
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
    Gosop
    MainTabBar,
  },
};
</script>

<style scoped>
</style>
