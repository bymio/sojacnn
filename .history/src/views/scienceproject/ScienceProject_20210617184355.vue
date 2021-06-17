<template>
  <div>
    <!-- <main-tab-bar></main-tab-bar>  -->
    <div class="scienceproject">
      <current-location></current-location>
      <forms></forms>
    </div>
  </div>
</template>

<script>
import CurrentLocation from "views/scienceproject/header/current-location/CurrentLocation.vue";
import Forms from "views/scienceproject/bottom/forms/Forms.vue";
import MainTabBar from "components/content/mainTabbar/MainTabBar.vue";
export default {
  name: "Profile",
  components: {
    CurrentLocation,
    Forms,
    MainTabBar,
  },
};
</script>

<style>
.scienceproject {
  width: 1200px;
  min-width: 1200px;
  height: 2000px;
  /* background: yellowgreen; */
  position: absolute;
  left: 0;
  right: 0;
  margin: 0 auto;
  top: 181px;
  text-align: center;
}
</style>
