<template>
  <div>
    <navigation-bar :deliverParent='namsg'></navigation-bar>
    
   
  </div>
</template>

<script>
import { findContype } from "@/api/index";

import NavigationBar from "components/common/navigation/NavigationBar.vue";
export default {
  data() {
    return {
      namsg:[],
    };
  },
  components: {
    NavigationBar,
  },
  methods: {
     async handleFindContype() {
      let result = await findContype();
      console.log(result);
      this.namsg = [...result.data.data.item];
      console.log(this.namsg);
    },
  },
  mounted() {
  },
  created() {
    this.handleFindContype();
    
  },
};
</script>

<style>
</style>
