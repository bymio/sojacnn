<template>
  <div>
    <main-tab-bar></main-tab-bar>
    <div class="popular">
      <el-container>
        <el-header>
          <div class="current-location">
            <h2>科普风采</h2>
            <p>
              <a href="/popularscience">科普风采</a>
              <span>/</span>
              当前位置: <a href="/home">首页</a>
            </p>
          </div>
        </el-header>
        <el-container>
          <el-aside width="200px">
            <el-row class="tac">
              <el-col :span="12">
                <el-menu
                  default-active="2"
                  class="el-menu-vertical-demo"
                  text-color="#fff"
                  active-text-color="#409EFF"
                >
                  <el-menu-item
                    @click="getPath(item.id)"
                    v-for="item in MenuList"
                    :key="item.id"
                  >
                    <i class="el-icon-menu"></i>
                    <span slot="title">{{ item.categoryName }}</span>
                  </el-menu-item>
                </el-menu>
              </el-col>
            </el-row>
          </el-aside>
          <el-main>
            <router-view></router-view>
          </el-main>
        </el-container>
      </el-container>
    </div>
  </div>
</template>

<script>
import { findCategoryByContypeId } from "@/api/index";
import MainTabBar from "components/content/mainTabbar/MainTabBar.vue";

export default {
  data() {
    return {
      MenuList: [],
    };
  },
  mounted() {
    this.initMenu();
  },
  methods: {
    async initMenu() {
      let result = await findCategoryByContypeId({ contypeId: 7 });
      this.MenuList = [...result.data.data.items];
      console.log(this.MenuList);
    },
    getPath(id) {
      switch (id) {
        case 15:
          this.$router.push("/pu1");
          break;
        case 16:
          this.$router.push("/pu2");
          break;
        // case 3:
        //   this.$router.push('/gsnavigation')
        //   break;
        // case 4:
        //   this.$router.push('/gsnavigation')
        //   break;
        // case 5:
        //   this.$router.push('/gsnavigation')
        //   break;

        default:
          break;
      }
    },
  },
  components: {
    MainTabBar,
  },
};
</script>

<style>
.popular {
  width: 1200px;
  min-width: 1200px;
  height: 2000px;
  /* background: yellowgreen; */
  position: absolute;
  left: 0px;
  right: 0px;
  margin: 0 auto;
  top: 181px;
}
.popular .el-col-12 {
  width: 100%;
}
.current-location {
  width: 1200px;
  height: 50px;
  background: rgb(255, 255, 255);
  margin-top: 10px;
  line-height: 50px;
}
.current-location h2 {
  display: inline-block;
  color: #1675e2;
}
.current-location p {
  float: right;
}
.current-location p a {
  float: right;
}
.current-location p a:hover {
  color: #1675e2;
}
.current-location span {
  float: right;
}
</style>
