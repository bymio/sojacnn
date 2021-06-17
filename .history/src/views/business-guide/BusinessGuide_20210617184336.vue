<template>
  <div>
    <!-- <main-tab-bar></main-tab-bar> -->

    <div class="business-guide">
      <current-location></current-location>
    </div>
  </div>
</template>

<script>
import CurrentLocation from "views/business-guide/header/current-location/CurrentLocation.vue";
import MainTabBar from "components/content/mainTabbar/MainTabBar.vue";

export default {
  data() {
    return {
      msg: "",
    };
  },
  methods: {},
  components: {
    CurrentLocation,
    MainTabBar,
  },
};
</script>

<style scoped>
.business-guide {
  width: 1200px;
  min-width: 1200px;
  height: 2000px;
  /* background: yellowgreen; */
  position: absolute;
  left: 0;
  right: 0;
  margin: 0 auto;
  top: 181px;
}
</style>
