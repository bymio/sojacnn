<template>
  <div id="app" class="wrapper">
    <router-view />
    <!-- <div class="mec">

    <HelloWorld />
    </div> -->

  </div>
</template>

<script>

export default {
  name: "app",
  data() {
    return {
      
    }
  },
  components: {
    MainTabBar,
    // HelloWorld,
  },
};
</script>

<style>
@import "assets/css/base.css";
</style>
