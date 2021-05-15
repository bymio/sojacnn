<template>
  <div class="business-guide">
    <current-location></current-location>
  </div>
</template>

<script>
import CurrentLocation from "views/business-guide/header/current-location/CurrentLocation.vue";
export default {
  data() {
    return {
      msg: "",
    };
  },
  methods: {},
  components: {
    CurrentLocation,
  },
};
</script>

<style scoped>
.business-guide {
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
