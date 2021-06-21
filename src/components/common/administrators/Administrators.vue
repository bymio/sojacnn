<template>
  <!-- 内容区域 -->
    <el-container class="home-container">
      <!-- 侧边栏 -->
      <el-aside :width="isCollapse ? '64px' : '160px'">
        <div class="aside-top">
          <img class="schoolIcon" src="@/assets/img/houtai.jpg" alt="平顶山学院" />
          <span>后台管理</span>
        </div>
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
      <el-container>
        <el-header class="header" style="height: 40px;">
          <el-dropdown trigger="click" class="dropdown" @command="loginOut">
            <div class="el-dropdown-link">
              {{userName}}
              <i class="el-icon-caret-bottom el-icon--right"></i>
            </div>
            <el-dropdown-menu slot="dropdown">
              <el-dropdown-item class="clearfix">
                退出登录
              </el-dropdown-item>
            </el-dropdown-menu>
          </el-dropdown>
        </el-header>

         <!-- 右侧主体区域 -->
        <el-main class="main">
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
      // 用户名
      userName:''
    };
  },
  created(){
    this.getUserName()
  },
  methods: {
    getUserName(){//页面创建之后获得用户名
      this.userName =  window.sessionStorage.getItem('userName')
    },
    toggleCollapse() {//点击按钮，进行展开与收缩
      this.isCollapse = !this.isCollapse;
    },
    loginOut() {//点击退出按钮退出登录
      console.log('hello')
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
      // 清除userName
      window.sessionStorage.clear()
      this.$message.info("已退出登录状态");
    },
  },
};
</script>

<style >
#main-tabbar{
  display: none;
}
.home-container {
  height: 100%;
  width: 100%;
  /* overflow: hidden; */
}
.header{
  line-height: 40px;
}
.main{
  background-color: #fff;
  padding: 0 10px;
  /* height: calc(100vh-100px); */
  height: 400px;
}
.el-dropdown{
  float: right;
}
.el-dropdown-link:hover{
  color: rgb(39, 121, 32);
}
.aside-top{
  margin: 10px 0;
  display: flex;
  justify-content:space-evenly;
  align-items: center;
  color: #fff;
  font-size: 20px;
}
.schoolIcon {
  width: 30px;
  height: 30px;
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
  height: 100vh;
  background-color: #333744;
  transition: 0.5s;
  overflow: hidden;
}
.el-aside .el-menu {
  border-right: none;
}

/* 给一级菜单图标设置右边距 */
.iconfont {
  margin-right: 10px;
}
</style>
