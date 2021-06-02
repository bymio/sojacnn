<template>
  <div id="home">
    <main-tab-bar :navInfo="res">
    </main-tab-bar>
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
// import { findContype } from "@/api/index";
// import { saveNewsContype } from "@/api/index";

import Banner from "views/home/header/banner/Banner.vue";
import Notice from "views/home/header/notice/Notice.vue";
import WorkNews from "views/home/bottom/work-news/WorkNews.vue";
import CollegeNews from "views/home/bottom/college-news/CollegeNews.vue";
import Links from "views/home/bottom/links/Links.vue";
import MainTabBar from "components/content/mainTabbar/MainTabBar.vue";

export default {
  data() {
    return {
      res:{},
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
  methods: {
    //注释
    // async saveNewsContype(name) {
    //   let data = {
    //     contypeName: name,
    //   };
    //   var result;
    //   result = await saveNewsContype(data);
    //   console.log(result);
    // },
  },
  mounted() {
    // this.saveNewsContype("333");
  },
};
</script>

<style>
.home {
  width: 1200px;
  /* width: 60%; */
  min-width: 1200px;
  height: 2000px;
  /* background: yellowgreen; */
  position: absolute;
  left: 18.5%;
  top: 181px;
  /* margin: 0 auto; */
}
</style>
