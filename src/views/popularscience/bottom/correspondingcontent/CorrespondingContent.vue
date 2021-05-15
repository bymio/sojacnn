<template>
  <div class="content">
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
.content {
  width: 1000px;
  height: 800px;
  position: relative;
  top: -260px;
  left: 250px;
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
