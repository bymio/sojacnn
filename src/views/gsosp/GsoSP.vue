<template>
  <div class="gsosp">
    <current-location></current-location>
    <navigation></navigation>
    <corresponding-content></corresponding-content>
  </div>
</template>

<script>
import CurrentLocation from 'views/gsosp/header/current-location/CurrentLocation.vue'
import Navigation from 'views/gsosp/bottom/navigation/Navigation.vue'
import CorrespondingContent from 'views/gsosp/bottom/correspondingcontent/CorrespondingContent.vue'
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
.gsosp {
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
