<template>
  <!-- 内容区域 -->
  <el-container class="home-container">
    <!-- 头部区域 -->
    <el-header>
      <div>
        <img src="@/assets/img/houtai.jpg" alt="平顶山学院" />
        <span>后台管理</span>
      </div>
      <el-button type="info" @click="loginOut">退出</el-button>
    </el-header>
    <el-container class="container">
      <!-- 侧边栏 -->
      <el-aside :width="isCollapse ? '64px' : '200px'">
        <!-- 展开 收缩 -->
        <div class="toggle-button" @click="toggleCollapse">|||</div>
        <!-- 侧边栏菜单 -->
        <el-menu
          background-color="#333744"
          text-color="#fff"
          active-text-color="#409EFF"
          :unique-opened="true"
          :collapse-transition="false"
          :collapse="isCollapse"
          :router="true"
          :default-active="$route.path"
        >
          <el-menu-item index="/administrators/newsList">
            <i class="el-icon-user-solid"></i>
            <span slot="title">角色管理</span>
          </el-menu-item>
          <el-submenu index="/administrators/newsList2">
            <template slot="title">
              <i class="el-icon-menu"></i>
              <span>新闻主体</span>
            </template>

            <el-menu-item index="/administrators/newsList2/push">
              <i class="el-icon-circle-plus"></i>
              <span slot="title">发布新闻</span>
            </el-menu-item>
            <el-menu-item index="/administrators/newsList2/find">
              <i class="el-icon-zoom-in"></i>
              <span slot="title">查找新闻</span>
            </el-menu-item>
          </el-submenu>
          <el-menu-item index="/administrators/newsList3">
            <i class="el-icon-document"></i>
            <span slot="title">新闻类型</span>
          </el-menu-item>
          <el-menu-item index="/administrators/newsList4">
            <i class="el-icon-document"></i>
            <span slot="title">新闻类别</span>
          </el-menu-item>
        </el-menu>
      </el-aside>
      <!-- 右侧主体区域 -->
      <el-main>
        <!-- 路由占位符 -->
        <router-view></router-view>
      </el-main>
    </el-container>
  </el-container>
</template>

<script>
export default {
  name: "Administrators",
  components: {},
  data() {
    return {
      // 菜单栏折叠
      isCollapse: false,
    };
  },
  methods: {
    toggleCollapse() {
      //点击按钮，进行展开与收缩
      this.isCollapse = !this.isCollapse;
    },
    loginOut() {
      //点击退出按钮退出登录
      // 把cookie以'='分割，取key值
      const cookie = document.cookie.split("=")[0];
      function clearCookie(cname, cvalue, exdays) {
        //清除cookie
        var d = new Date();
        d.setTime(d.getTime() + exdays * 24 * 60 * 60 * 1000);
        var expires = "expires=" + d.toUTCString();
        document.cookie = cname + "=" + cvalue + "; " + expires + "; path=/"; //path=/是根路径
      }
      clearCookie(cookie, "", -1);

      this.$router.push("/login");
      this.$message.info("已退出登录状态");
    },
  },
};
</script>

<style scoped>
.home-container {
  height: 100%;
  width: 100%;
}
.el-header {
  background-color: #373d41;
  color: #000;
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: #fff;
  font-size: 20px;
}
.el-header div {
  display: flex;
  align-items: center;
}
.el-header div span {
  margin-left: 15px;
}
.el-header div img {
  width: 40px;
  height: 40px;
  border-radius: 50%;
}
/* 菜单栏收缩与展开 */
.toggle-button {
  background-color: #4a5064;
  text-align: center;
  color: #fff;
  height: 24px;
  /* 设置间距 */
  letter-spacing: 0.2em;
  /* 鼠标移上去变为小手形态 */
  cursor: pointer;
}
.el-aside {
  height: 750px;
  background-color: #333744;
  color: #000;
  transition: 0.5s;
}
.el-aside .el-menu {
  border-right: none;
}

.el-main {
  background-color: #eaedf1;
  color: #000;
}
/* 给一级菜单图标设置右边距 */
.iconfont {
  margin-right: 10px;
}
.main-tabbar{
  display:none;
}
</style>
