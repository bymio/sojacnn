<template>
  <div class="academic-exchange">
    <current-location></current-location>
    <navigation></navigation>
    <corresponding-content></corresponding-content>
  </div>
</template>

<script>
import CurrentLocation from "views/academic-exchange/header/current-location/CurrentLocation.vue";
import Navigation from "views/academic-exchange/bottom/navigation/Navigation.vue";
import CorrespondingContent from "views/academic-exchange/bottom/correspondingcontent/CorrespondingContent.vue";

export default {
  data() {
    return {
      msg: "",
    };
  },
  methods: {},
  components:{
    CurrentLocation,
    Navigation,
    CorrespondingContent,
  }
};
</script>

<style scoped>
.academic-exchange {
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
