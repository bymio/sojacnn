<template>
  <div class="navigation">
    <el-row class="tac">
      <el-col :span="12">
        <el-menu
          default-active="1"
          class="el-menu-vertical-demo"
          @open="handleOpen"
          @close="handleClose"
        >
          <el-menu-item index="1">
            <i class="el-icon-menu"></i>
            <span slot="title">平顶山学院科普活动</span>
          </el-menu-item>
          <el-menu-item index="2">
            <i class="el-icon-menu"></i>
            <span slot="title">平顶山市政协科普活动</span>
          </el-menu-item>
          <el-menu-item index="3">
            <i class="el-icon-menu"></i>
            <span slot="title">。。。。。。</span>
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
