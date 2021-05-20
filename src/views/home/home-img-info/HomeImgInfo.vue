<template>
  <div class="home-img-info">
    <current-location></current-location>
    <navigation></navigation>
    <corresponding-content></corresponding-content>
  </div>
</template>

<script>
import CurrentLocation from "views/home/home-img-info/header/current-location/CurrentLocation.vue";
import Navigation from "views/home/home-img-info/bottom/navigation/Navigation.vue";
import CorrespondingContent from "views/home/home-img-info/bottom/correspondingcontent/CorrespondingContent.vue";
export default {
  data() {
    return {
      msg: "",
    };
  },
  methods: {},
  components: {
    CurrentLocation,
    Navigation,
    CorrespondingContent,
  },
};
</script>

<style scoped>
.home-img-info {
  width: 1200px;
  min-width: 1200px;
  height: 2000px;
  /* background: yellowgreen; */
  position: absolute;
  left: 351.5px;
  right: 351.5px;
  top: 181px;
}
</style>
