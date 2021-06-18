<template>
  <div class="navigation">
    <div class="tab-item">
      <el-menu
        class="el-menu-demo"
        mode="horizontal"
        background-color="#1675e2"
        active-text-color="#fff"
        text-color="#fff"
        :default-active="$route.path"
        :router="true"
      >
        <el-menu-item
          v-for="item in deliverParent"
          :key="item.id"
          :index="'/nav/' + item.id"
          >{{ item.contypeName }}</el-menu-item
        >
        <!-- <el-menu-item index="/gsosp">科普概况</el-menu-item>
        <el-menu-item index="/policy">政策法规</el-menu-item>
        <el-menu-item index="/scienceproject">科普项目</el-menu-item>
        <el-menu-item index="/academicexchange">学术交流</el-menu-item>
        <el-menu-item index="/businessguide">办事指南</el-menu-item>
        <el-menu-item index="/popularscience">科普风采</el-menu-item>
        <el-menu-item
          ><a href="https://www.pdsu.edu.cn/">学校中心</a></el-menu-item
        >
        <el-menu-item index="/contact">联系我们</el-menu-item> -->
      </el-menu>
    </div>

  </div>
</template>

<script>

export default {
  data() {
    return {
      navmsg: [],
      // activeIndex: "",
    };
  },
  props:{
    deliverParent: Array,
  },
  mounted() {
  },
  methods: {
  
  },

  components: {
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
  background: #1c4d85 !important;
}
</style>
