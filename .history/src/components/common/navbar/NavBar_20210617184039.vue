<template>
  <div>
    <navigation-bar :deliverParent="deliverParent1"></navigation-bar>
  </div>
</template>

<script>
import { findContype } from "@/api/index";

import NavigationBar from "components/common/navigation/NavigationBar.vue";
export default {
  data() {
    return {
      namsg: [],
    };
  },
  props: {
    deliverParent1: Array,
  },
  components: {
    NavigationBar,
  },
  methods: {

  },
};
</script>

<style>
</style>
