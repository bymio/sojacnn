<template>
  <div class="scienceproject">
    <current-location></current-location>
    <forms></forms>
  </div>
</template>

<script>
import CurrentLocation from "views/scienceproject/header/current-location/CurrentLocation.vue";
import Forms from "views/scienceproject/bottom/forms/Forms.vue";
export default {
  name: "Profile",
  components: {
    CurrentLocation,
    Forms,
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
  left: 351.5px;
  right: 351.5px;
  top: 181px;
  text-align: center;
}
</style>
