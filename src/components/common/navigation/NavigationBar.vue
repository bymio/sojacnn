<template>
  <div class="navigation">
    <tab-bar>
      <tab-bar-item path="/home">
        <div slot="item-text">本站首页</div>
      </tab-bar-item>
      <tab-bar-item path="/gsosp">
        <div slot="item-text">科普概况</div>
      </tab-bar-item>
      <tab-bar-item path="/policy">
        <div slot="item-text">政策法规</div>
      </tab-bar-item>
      <tab-bar-item path="/1">
        <div slot="item-text">科普项目</div>
      </tab-bar-item>
      <tab-bar-item path="/1">
        <div slot="item-text">学术交流</div>
      </tab-bar-item>
      <tab-bar-item path="/1">
        <div slot="item-text">办事指南</div>
      </tab-bar-item>
      <tab-bar-item path="/1">
        <div slot="item-text">科普风采</div>
      </tab-bar-item>
      <tab-bar-item path="/1">
        <div slot="item-text">学校首页</div>
      </tab-bar-item>
      <tab-bar-item path="/1">
        <div slot="item-text">联系我们</div>
      </tab-bar-item>
    </tab-bar>
  </div>
  <!-- <div class="navigation">
    <el-menu
      :default-active="activeIndex"
      class="el-menu-demo"
      mode="horizontal"
      @select="handleSelect"
    >
      <el-menu-item index="1">
        <a href="/home"> 首页 </a>
      </el-menu-item>
      <el-menu-item index="2">
        <a href="/gsosp"> 科普概况 </a>
      </el-menu-item>
      <el-menu-item index="3">
        <a href="/policy"> 政策法规 </a>
      </el-menu-item>
      <el-menu-item index="4">
        <a href="javascript;"> 科普项目 </a>
      </el-menu-item>
      <el-menu-item index="5">
        <a href="javascript;"> 学术交流 </a>
      </el-menu-item>
      <el-menu-item index="6">
        <a href="javascript;"> 办事指南 </a>
      </el-menu-item>
      <el-menu-item index="7">
        <a href="javascript;"> 科普风采 </a>
      </el-menu-item>
      <el-menu-item index="8">
        <a href="javascript;"> 学校首页 </a>
      </el-menu-item>
      <el-menu-item index="9">
        <a href="javascript;"> 联系我们 </a>
      </el-menu-item>
    </el-menu>
  </div> -->
</template>

<script>
import TabBar from "components/common/tabbar/TabBar";
import TabBarItem from "components/common/tabbar/TabBarItem";
export default {
  data() {
    return {
      activeIndex: "1",
      activeIndex2: "1",
    };
  },
  methods: {
    handleSelect(key, keyPath) {
      console.log(key, keyPath);
    },
  },
  components: {
    TabBar,
    TabBarItem,
  },
}; 
</script>

<style scoped>
.navigation {
  position: absolute;
  width: 1903px;
  height: 61px;
  background: #1675e2;
}
/* .el-menu--horizontal > .el-menu-item.is-active {
  border-bottom: 2px solid #f4f4f5;
}

.el-menu-demo {
  width: 1200px;
  display: flex;
  background: #1675e2;
  margin: 0 auto;
}

.el-menu-item {
  text-align: center;
  height: 61px;
  flex: 1;
}

.el-menu-item a {
  display: block;
  color: #ffffff;
  font-size: 16px;
} */
</style>
