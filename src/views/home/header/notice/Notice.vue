<template>
  <div class="notice">
    <el-card class="box-card">
      <div slot="header" class="clearfix">
        <span>卡片名称</span>
        <!-- <el-button style="float: right; padding: 3px 0" type="text">操作按钮</el-button> -->
      </div>
      <div v-for="o in 4" :key="o" class="text item">
        <a href="#">列表内容</a> {{+ o }}
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

<style scoped>
.notice {
  width: 580px;
  height: 300px;
  position: absolute;
  top: 0px;
  right: 0px;
}

.text {
  font-size: 14px;
}

.item {
  margin-bottom: 18px;
}

.clearfix:before,
.clearfix:after {
  display: table;
  content: "";
}
.clearfix:after {
  clear: both;
}

.box-card {
  width: 580px;
  height: 300px;

}

</style>
