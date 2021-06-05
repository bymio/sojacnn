<template>
  <div class="content3">
    <el-card class="box-card">
      <div>
        {{ menuContent.title }}
      </div>
    </el-card>
  </div>
</template>

<script>
import { findNewsByTypeAndCategory } from "@/api/index";

export default {
  data() {
    return {
      menuContent: {},
    };
  },
  mounted() {
    this.initMenuContent();
  },
  methods: {
    async initMenuContent() {
      let result = await findNewsByTypeAndCategory({
        contypeId: 3,
        categoryId: 7,
        p: 1,
      });
      // this.menuContent = [...result.data.data.item];
      console.log(result);
      this.menuContent = result.data.data.item;
      console.log(this.menuContent);
    },
  },
};
</script>

<style>
.el-aside {
  overflow: hidden;
  box-sizing: border-box;
  flex-shrink: 0;
}
.text {
  font-size: 14px;
}

.item {
  padding: 18px 0;
}
.el-col-12 {
  width: 100%;
}
.box-card {
  height: 580px;
  width: 880px;
}
</style>
