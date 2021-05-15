<template>
  <div class="popular-science">
    <current-location></current-location>
    <navigation></navigation>
    <corresponding-content></corresponding-content>
  </div>
</template>

<script>
import CurrentLocation from "views/popularscience/header/current-location/CurrentLocation.vue";
import Navigation from "views/popularscience/bottom/navigation/Navigation.vue";
import CorrespondingContent from "views/popularscience/bottom/correspondingcontent/CorrespondingContent.vue";
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
.popular-science {
  width: 1215px;
  width: 1200px;
  min-width: 1200px;
  height: 2000px;
  /* background: yellowgreen; */
  position: absolute;
  left: 0;
  right: 0;
  top: 183px;
  margin: 0 auto;
}
</style>
