<template>
  <div class="content3">
    <el-card class="box-card">
      <div v-for="item in menuContent" :key="item.id">
        {{ item.title }}
        {{ item.id }}
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
        contypeId: 3,
        categoryId: 6,
        p: 1,
      });
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
