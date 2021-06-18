<template>
  <div class="content2">
    <el-card class="box-card">
      <!-- categoryId: 1
contypeId: 2
coverPath: "1.png"
createTime: "2021-06-02 20:06:38"
dataString: "测试内容"
id: 1400062803305308200
title: "测试"
updateTime: "2021-06-02 20:06:38" -->
      <div v-for="item in menuContent" :key="item.id">
        <a hr>{{ item.title }}</a>
        <h1>{{ item.createTime }}</h1>
      </div>
    </el-card>
  </div>
</template>

<script>
import { findNewsByTypeAndCategory } from "@/api/index";

export default {
  data() {
    return {
      menuContent: [],
    };
  },
  mounted() {
    this.initMenuContent();
  },
  methods: {
    async initMenuContent() {
      let result = await findNewsByTypeAndCategory({
        contypeId: 2,
        categoryId: 1,
        p: 1,
      });
      // this.menuContent = [...result.data.data.item];
      console.log(result);
      this.menuContent = [...result.data.data.items];

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
.box-card {
  height: 580px;
  width: 880px;
}
</style>
