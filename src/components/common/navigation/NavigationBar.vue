<template>
  <!--  -->
  <div class="navigation">
    <!-- <tab-bar >
      <tab-bar-item path="/home">
        <div class="title" value='1' slot="item-text">本站首页</div>
      </tab-bar-item>
      <tab-bar-item path="/gsosp">
        <div class="title" value='2' slot="item-text">科普概况</div>
      </tab-bar-item>
      <tab-bar-item path="/policy">
        <div class="title" value='3' slot="item-text">政策法规</div>
      </tab-bar-item>
      <tab-bar-item path="/scienceproject">
        <div class="title" value='4' slot="item-text">科普项目</div>
      </tab-bar-item>
      <tab-bar-item path="/academicexchange">
        <div class="title" value='5' slot="item-text">学术交流</div>
      </tab-bar-item>
      <tab-bar-item path="/businessguide">
        <div class="title" value='6' slot="item-text">办事指南</div>
      </tab-bar-item>
      <tab-bar-item path="/popularscience">
        <div class="title" value='7' slot="item-text">科普风采</div>
      </tab-bar-item>
      <tab-bar-item>
        <div value='8' class="title" slot="item-text">
          <a href="https://www.pdsu.edu.cn/">学校首页</a>
        </div>
      </tab-bar-item>
      <tab-bar-item path="/contact">
        <div class="title" value='9' slot="item-text">联系我们</div>
      </tab-bar-item>
    </tab-bar> -->
    <div class="tab-item">
      <el-menu
        :default-active="activeIndex"
        class="el-menu-demo"
        mode="horizontal"
        background-color="#1675e2"
        active-text-color="#fff"
        text-color="#fff"
        :router = 'true'
      >
        <el-menu-item index="/home">本站首页</el-menu-item>
        <el-menu-item index="/gosop">科普概况</el-menu-item>
        <el-menu-item index="/policy">政策法规</el-menu-item>
        <el-menu-item index="/scienceproject">科普项目</el-menu-item>
        <el-menu-item index="/academicexchange">学术交流</el-menu-item>
        <el-menu-item index="/businessguide">办事指南</el-menu-item>
        <el-menu-item index="/popularscience">科普风采</el-menu-item>
        <el-menu-item
          ><a href="https://www.pdsu.edu.cn/">学校中心</a></el-menu-item
        >
        <el-menu-item index="/contact">联系我们</el-menu-item>
      </el-menu>
    </div>
    <contact-information-bar></contact-information-bar>
  </div>
</template>

<script>
import TabBar from "components/common/tabbar/TabBar";
import ContactInformationBar from "components/common/contact-information/ContactInformationBar";
import TabBarItem from "components/common/tabbar/TabBarItem";
export default {
  data() {
    return {
      current: [],
      index: 2,
      activeIndex: "1",
    };
  },
  mounted() {},
  methods: {},

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
  color: #303133;
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
</style>
