<template>
  <div>
    <header-bar></header-bar>
    <nav-bar></nav-bar>
  </div>
</template>

<script>
import HeaderBar from "components/common/headerbar/HeaderBar.vue";
import NavBar from "components/common/navbar/NavBar.vue";
export default {
  data() {
    return {
      msg: "",
    };
  },
  methods: {
    async handleFindContype() {
      let result = await findContype();
      console.log(result);
      this.namsg = [...result.data.data.item];
      console.log(this.namsg);
    },
  },
  components: {
    HeaderBar,
    NavBar,
  },
};
</script>

<style scoped>
</style>
