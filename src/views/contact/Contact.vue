<template>
  <div class="contact">
    <current-location></current-location>
    <forms></forms>
  </div>
</template>

<script>
import CurrentLocation from "views/contact/header/current-location/CurrentLocation.vue";
import Forms from "views/contact/bottom/forms/Forms.vue";
export default {
  data() {
    return {
      msg: "",
    };
  },
  methods: {},
  components: {
    CurrentLocation,
    Forms,
  },
};
</script>
<style scoped>
.contact {
  width: 1200px;
  min-width: 1200px;
  height: 2000px;
  /* background: yellowgreen; */
  position: absolute;
  left: 0;
  right: 0;
  top: 183px;
  margin: 0 auto;
  text-align: center;
}
</style>
