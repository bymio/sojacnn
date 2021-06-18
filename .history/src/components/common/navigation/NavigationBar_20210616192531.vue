<template>
  <div class="navigation">
    <div class="tab-item">
      <el-menu
        class="el-menu-demo"
        mode="horizontal"
        background-color="#1675e2"
        active-text-color="#fff"
        text-color="#fff"
        :router="true"
        v-for="item in navmsg" :key="item.id"
      >
        <el-menu-item index="/{item.id}">{{item.contypeName}}</el-menu-item>
        <!-- <el-menu-item index="/gsosp">科普概况</el-menu-item>
        <el-menu-item index="/policy">政策法规</el-menu-item>
        <el-menu-item index="/scienceproject">科普项目</el-menu-item>
        <el-menu-item index="/academicexchange">学术交流</el-menu-item>
        <el-menu-item index="/businessguide">办事指南</el-menu-item>
        <el-menu-item index="/popularscience">科普风采</el-menu-item>
        <el-menu-item
          ><a href="https://www.pdsu.edu.cn/">学校中心</a></el-menu-item
        >
        <el-menu-item index="/contact">联系我们</el-menu-item>
      </el-menu> -->
    </div>

    <contact-information-bar></contact-information-bar>
  </div>
</template>

<script>
import { findContype } from "@/api/index";

import TabBar from "components/common/tabbar/TabBar";
import ContactInformationBar from "components/common/contact-information/ContactInformationBar";
import TabBarItem from "components/common/tabbar/TabBarItem";
export default {
  data() {
    return {
      navmsg: [],
    };
  },
  mounted() {
    this.handleFindContype();
  },
  methods: {
    async handleFindContype() {
      let result = await findContype();
      this.navmsg = result.data.data.item;
      console.log(this.navmsg);
    },
  },

  components: {
    TabBar,
    TabBarItem,
    ContactInformationBar,
  },
};
</script>

<style scoped>
.el-menu {
  display: flex;
}
.el-menu-item {
  text-align: center;
  flex: 1;
  font-size: 16px;
  padding: 0 20px;
  cursor: pointer;
  transition: border-color 0.3s, background-color 0.3s, color 0.3s;
  box-sizing: border-box;
}
.tab-item {
  flex: 1;
  background: #1675e2;
  margin: 0 auto;
  height: 61px;
  line-height: 61px;
}
.el-menu-demo {
  width: 1200px;
  display: flex;
  background: #1675e2;
  margin: 0 auto;
}
.el-menu-item.is-active {
  background: #125eb5 !important;
}
</style>
