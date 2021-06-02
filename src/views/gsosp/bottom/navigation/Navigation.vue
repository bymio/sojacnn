<template>
  <div class="navigation">
    <el-row class="tac">
      <el-col :span="12">
        <el-menu
          default-active="2"
          class="el-menu-vertical-demo"
          text-color="#fff"
          active-text-color="#409EFF"
        >
          <el-menu-item v-for="item in MenuList" :key="item.id">
            <i class="el-icon-menu"></i>
            <span slot="title">{{ item.categoryName }}</span>
          </el-menu-item>
        </el-menu>
      </el-col>
    </el-row>
  </div>
</template>

<script>
import { findCategoryByContypeId } from "@/api/index";
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
      let result = await findCategoryByContypeId({ contypeId: 2 });
      this.MenuList = [...result.data.data.items];
      // console.log(this.MenuList);
    },
  },
};
</script>

<style scoped>
.navigation {
  position: relative;
  top: 20px;
  left: 0;
  width: 300px;
}
</style>
