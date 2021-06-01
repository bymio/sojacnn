<template>
  <div>
    <navigation-bar :navinfo="navmsg"></navigation-bar>
  </div>
</template>

<script>
import { findContype } from "@/api/index";
import NavigationBar from "components/common/navigation/NavigationBar.vue";
export default {
  data() {
    return {
      navmsg: [],
    };
  },
  components: {
    NavigationBar,
  },
  methods: {
    async handleFindContype() {
      let result = await findContype();
      this.navmsg = result.data.data.item;
      // console.log(this.navmsg);
    },
  },
  mounted() {
    this.handleFindContype();
  },
};
</script>

<style>
</style>
