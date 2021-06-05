<template>
  <div class="content3">
    <el-card class="box-card">
      <!-- categoryId: 1
contypeId: 2
coverPath: "1.png"
createTime: "2021-06-02 20:06:38"
dataString: "测试内容"
id: 1400062803305308200
title: "测试"
updateTime: "2021-06-02 20:06:38" -->
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
        categoryId: 16,
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
