<template>
  <div class="navigation">
    <el-menu
      :default-active="activeIndex"
      class="el-menu-demo"
      mode="horizontal"
      @select="handleSelect"
    >
      <!-- <el-menu-item index="1">处理中心</el-menu-item>
      <el-submenu index="2">
        <template slot="title">我的工作台</template>
        <el-menu-item index="2-1">选项1</el-menu-item>
        <el-menu-item index="2-2">选项2</el-menu-item>
        <el-menu-item index="2-3">选项3</el-menu-item>
        <el-submenu index="2-4">
          <template slot="title">选项4</template>
          <el-menu-item index="2-4-1">选项1</el-menu-item>
          <el-menu-item index="2-4-2">选项2</el-menu-item>
          <el-menu-item index="2-4-3">选项3</el-menu-item>
        </el-submenu>
      </el-submenu>
      <el-menu-item index="3" disabled>消息中心</el-menu-item> -->
      <!-- target="_blank" -->
      <el-menu-item  @click="itemClick()" index="1">
        <a href="/home"> 首页 </a>
      </el-menu-item>
      <el-menu-item @click="itemClick()" index="2">
        <a href="/gsosp"> 科普概况 </a>
      </el-menu-item>
      <el-menu-item @click="itemClick()" index="3">
        <a href="javascript;"> 订单管理 </a>
      </el-menu-item>
      <el-menu-item @click="itemClick()" index="4">
        <a href="javascript;"> 订单管理 </a>
      </el-menu-item>
      <el-menu-item index="5">
        <a href="javascript;"> 订单管理 </a>
      </el-menu-item>
      <el-menu-item index="6">
        <a href="javascript;"> 订单管理 </a>
      </el-menu-item>
      <el-menu-item index="7">
        <a href="javascript;"> 订单管理 </a>
      </el-menu-item>
      <el-menu-item index="8">
        <a href="javascript;"> 订单管理 </a>
      </el-menu-item>
      <el-menu-item index="9">
        <a href="javascript;"> 订单管理 </a>
      </el-menu-item>
    </el-menu>
  </div>
</template>

<script>
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
    itemClick() {
      this.$router.replace(this.path);
    },
  },
  props: {
    path: String,
    activeColor: {
      type: String,
      default: "white",
    },
  },
  computed: {
    isActive() {
      // /home -> item1(/home) = true
      // /home -> item1(/category) = false
      // /home -> item1(/cart) = true
      // /home -> item1(/profile) = true
      return this.$route.path.indexOf(this.path) !== -1;
    },
    activeStyle() {
      return this.isActive
        ? { color: this.activeColor, backgroundColor: "#006fd8" }
        : {};
    },
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
.el-menu--horizontal > .el-menu-item.is-active {
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
}

</style>
