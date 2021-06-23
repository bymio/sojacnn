<template>
  <div id="app" class="wrapper">
    <router-view />
    <main-tab-bar></main-tab-bar>

  </div>
</template>

<script>
import MainTabBar from "components/content/mainTabbar/MainTabBar.vue";

export default {
  name: "app",
  data() {
    return {
      
    }
  },
  components: {
    MainTabBar,
  },
};
</script>

<style>
@import "assets/css/base.css";
</style>
