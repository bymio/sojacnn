<template>
  <div class="work">
    <sunstance></sunstance>
  </div>
</template>

<script>
import Substance from "views/home/work/substance/Substance.vue";

export default {
  data() {
    return {
      msg: "",
    };
  },
  methods: {},
  components: {
    Substance,
  },
};
</script>

<style scoped>
.work {
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
