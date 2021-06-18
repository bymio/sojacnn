<template>
  <div class="main">
    <main-tab-bar></main-tab-bar>
    <home></home>
  </div>
</template>

<script>
import Home from 'views/home/Home.vue'
export default {
  data () {
    return {
      msg: ''
    }
  },
  methods: {

  },
  components:{
    Home,
  }
}
</script>

<style scoped>

</style>
