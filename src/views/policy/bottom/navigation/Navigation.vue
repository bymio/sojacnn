<template>
  <div class="navigation">
    <el-row class="tac">
      <el-col :span="12">
        <el-menu
          default-active="2"
          class="el-menu-vertical-demo"
          @open="handleOpen"
          @close="handleClose"
        >
          <el-menu-item index="1">
            <i class="el-icon-menu"></i>
            <span slot="title">中国科协政策法规</span>
          </el-menu-item>
          <el-menu-item index="2">
            <i class="el-icon-menu"></i>
            <span slot="title">地方科协政策法规</span>
          </el-menu-item>
          <el-menu-item index="3">
            <i class="el-icon-menu"></i>
            <span slot="title">社团管理文件</span>
          </el-menu-item>
          <el-menu-item index="4">
          </el-menu-item>
          <el-menu-item index="5">
          </el-menu-item>


        </el-menu>
      </el-col>
    </el-row>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },
  methods: {
    handleOpen(key, keyPath) {
      console.log(key, keyPath);
    },
    handleClose(key, keyPath) {
      console.log(key, keyPath);
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
