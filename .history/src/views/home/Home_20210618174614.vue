<template>
  <div id="home">
    <!-- <main-tab-bar :navInfo="res"> </main-tab-bar> -->
    <div class="home">
      <banner></banner>
      <router-view></router-view>
      <notice></notice>
      <work-news></work-news>
      <college-news></college-news>
      <links></links>
      <contact-information-bar></contact-information-bar>
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
import ContactInformationBar from "components/common/contact-information/ContactInformationBar.vue";

export default {
  data() {
    return {
      res: {},
    };
  },
  components: {
    Banner,
    Notice,
    WorkNews,
    CollegeNews,
    Links,
    MainTabBar,
    ContactInformationBar,
  },
  methods: {},
  mounted() {},
};
</script>

<style>
.home {
  width: 1200px;
  min-width: 1200px;
  height: 2000px;
  position: absolute;
  left: 0;
  right: 0;
  top: 181px;
  margin: 0 auto;
}
</style>
