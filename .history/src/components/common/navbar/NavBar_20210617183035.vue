<template>
  <div>
    <navigation-bar :deliverParent=''></navigation-bar>
    
   
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
    
  },
  mounted() {
  },
};
</script>

<style>
</style>
