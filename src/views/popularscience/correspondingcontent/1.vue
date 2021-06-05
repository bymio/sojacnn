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
        contypeId: 7,
        categoryId: 15,
        p: 1,
      });
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
.el-col-12 {
  width: 100%;
}
.item {
  padding: 18px 0;
}

.box-card {
  height: 580px;
  width: 880px;
}
</style>
