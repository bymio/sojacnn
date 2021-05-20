<template>
  <div id="home">
    <main-tab-bar></main-tab-bar>
    <div class="home">
      <banner></banner>
      <router-view></router-view>
      <notice></notice>
      <work-news></work-news>
      <college-news></college-news>
      <links></links>
    </div>
  </div>
</template>

<script>
import Banner from "views/home/header/banner/Banner.vue";
import Notice from "views/home/header/notice/Notice.vue";
import WorkNews from "views/home/bottom/work-news/WorkNews.vue";
import CollegeNews from "views/home/bottom/college-news/CollegeNews.vue";
import Links from "views/home/bottom/links/Links.vue";
import MainTabBar from "components/content/mainTabbar/MainTabBar.vue";

export default {
  data() {
    return {
      msg: "",
    };
  },
  components: {
    Banner,
    Notice,
    WorkNews,
    CollegeNews,
    Links,
    MainTabBar,
  },
  methods: {},
};
</script>

<style>
.home {
  width: 1200px;
  min-width: 1200px;
  height: 2000px;
  /* background: yellowgreen; */
  position: absolute;
  left: 351.5px;
  right: 351.5px;
  top: 181px;
  /* margin: 0 auto; */
}
</style>
