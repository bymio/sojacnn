<template>
  <div class="policy">
    <current-location></current-location>
    <navigation></navigation>
    <corresponding-content></corresponding-content>
  </div>
</template>

<script>
import CurrentLocation from "views/policy/header/current-location/CurrentLocation.vue";
import Navigation from "views/policy/bottom/navigation/Navigation.vue";
import CorrespondingContent from "views/policy/bottom/correspondingcontent/CorrespondingContent.vue";
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

<style>
.policy {
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
