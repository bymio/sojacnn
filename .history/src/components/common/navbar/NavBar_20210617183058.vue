<template>
  <div>
    <navigation-bar :deliverParent='namsg'></navigation-bar>
    
   
  </div>
</template>

<script>
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
      
      this.navmsg = [...result.data.data.item];
      console.log(this.navmsg);
    },
  },
  mounted() {
    this.handleFindContype()
  },
};
</script>

<style>
</style>
