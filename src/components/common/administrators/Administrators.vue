<template>
    <!-- 内容区域 -->
  <el-container class="home-container">
    <!-- 头部区域 -->
    <el-header>
      <div>
        <span>后台管理</span>
      </div>
      <el-button type='info'>退出</el-button>
    </el-header>
    <el-container>
      <!-- 侧边栏 -->
      <el-aside :width="isCollapse ? '64px' : '200px' ">
        <!-- 展开 收缩 -->
        <div class="toggle-button" @click="toggleCollapse">|||</div>
        <!-- 侧边栏菜单 -->
        <el-menu
          background-color="#333744"
          text-color="#fff"
          active-text-color="#409EFF"
          :unique-opened = 'true'
          :collapse-transition = 'false'
          :collapse = 'isCollapse'
          :router = 'true'>
          <!-- 一级菜单 -->
          <el-submenu index="1">
            <!-- 一级菜单模板区域 -->
            <template slot="title">
              <!-- 一级图标 -->
              <i class="el-icon-menu"></i>
              <!-- 一级文本 -->
              <span>导航一</span>
            </template>

            <el-menu-item>
              <template slot="title">
                <!-- 二级图标 -->
                <i class=""></i>
                <!-- 二级文本 -->
                <span></span>
              </template>
            </el-menu-item>
          </el-submenu>

           <el-menu-item index="/list">
              <i class="el-icon-menu"></i>
              <span slot="title">导航二</span>
            </el-menu-item>
            <el-menu-item index="3" disabled>
              <i class="el-icon-document"></i>
              <span slot="title">导航三</span>
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
  name:'Administrators',
  components:{},
  data() {
    return{
      // 菜单栏折叠
      isCollapse:false
    }
  },
  methods:{
    toggleCollapse(){//点击按钮，进行展开与收缩
      this.isCollapse = !this.isCollapse
    },
  }
};
</script>

<style scoped>
.home-container{
  height: 100%;
  width: 100%;
}
.el-header {
    background-color: #373d41;
    color: #000;
    display: flex;
    justify-content:space-between;
    align-items: center;
    color: #fff;
    font-size: 20px;
}
.el-header div{
  display: flex;
  align-items: center;
}
.el-header div span{
  margin-left: 15px;
}
/* .el-header div img{
  width: 40px;
  height: 40px;
} */
/* 菜单栏收缩与展开 */
.toggle-button{
  background-color: #4A5064;
  text-align: center;
  color: #fff;
  height: 24px;
  /* 设置间距 */
  letter-spacing: .2em;
  /* 鼠标移上去变为小手形态 */
  cursor: pointer;
}
.el-aside {
  height: 800px;
  background-color: #333744;
  color: #000;
  transition: .5s;
}
.el-aside .el-menu{
  border-right: none;
}

.el-main {
  background-color: #EAEDF1;
  color: #000;
}
/* 给一级菜单图标设置右边距 */
.iconfont{
  margin-right: 10px;
}
</style>
