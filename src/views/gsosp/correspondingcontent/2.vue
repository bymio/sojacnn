<template>
  <div class="content2">
    <el-card class="box-card">
      <!-- <div v-for="o in 4" :key="o" class="text item">
        <h2>列表内容</h2>
      </div> -->
      <div>22222222222222</div>
    </el-card>
  </div>
</template>

<script>
// import { findNewsByTypeAndCategory } from "@/api/index";
export default {
  data() {
    return {
      msg: "",
    };
  },
  mounted() {
    // this.initMenu();
  },
  methods: {
    // async initMenu() {
    //   let result = findNewsByTypeAndCategory({ contypeId: 2, categoryId: 1, p: 1 });
    //   console.log(result);
    // },
  },
};
</script>

<style>
.content2 {
  /* width: 1000px;
  height: 800px;
  position: absolute;
  top: 70px;
  left: 200px; */
}
.text {
  font-size: 14px;
}

.item {
  padding: 18px 0;
}
.el-aside {
    overflow: hidden;
    box-sizing: border-box;
    flex-shrink: 0;
}
.box-card {
  height: 580px;
  width: 880px;
}
</style>
