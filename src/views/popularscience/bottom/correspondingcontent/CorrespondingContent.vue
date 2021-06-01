<template>
  <div class="content5">
    <el-card class="box-card">
      <!-- <div v-for="o in 4" :key="o" class="text item">
        <h2>列表内容</h2>
      </div> -->
      <div>
        <h2>内容</h2>
      </div>
    </el-card>
  </div>
</template>

<script>
export default {
  data() {
    return {
      msg: "",
    };
  },
  methods: {},
};
</script>

<style>
.content5 {
  width: 1000px;
  height: 800px;
 position: absolute;
  top: 70px;
  left: 200px;
}
.text {
  font-size: 14px;
}

.item {
  padding: 18px 0;
}

.box-card {
  width: 900px;
  height: 600px;
}
</style>
