<template>
  <div class="navigation">
    <el-row class="tac">
      <el-col :span="12">
        <el-menu
          default-active="1"
          class="el-menu-vertical-demo"
        >
          <el-menu-item v-for="items in menuList" :key="items.id" index="1">
            <i class="el-icon-menu"></i>
            <span slot="title">{{items.categoryName}}</span>
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
      menuList: [],
    };
  },
  mounted() {
    this.initMenu();
  },
  methods: {
    async initMenu() {
      let result = await findCategoryByContypeId({contypeId:7});
      this.menuList = [...result.data.data.items];
      console.log(this.menuList);
    },

  },
};
</script> 

<style scoped>
.navigation {
  position: relative;
  top: 20px;
  left: 0;
  width: 400px;
}
</style>
