<template>
  <div class="table">
    <h2>平顶山学院xx年度河南省社科普立项名单</h2>
    <el-table :data="tableData" height="450" border style="width: 100%">
      <el-table-column prop="number" label="序号" width="180">
      </el-table-column>
      <el-table-column prop="projectnumber" label="立项编号" width="180">
      </el-table-column>
      <el-table-column prop="name" label="项目名称"> </el-table-column>
      <el-table-column prop="projectform" label="项目形式"> </el-table-column>
      <el-table-column prop="person" label="项目负责人"> </el-table-column>
      <el-table-column prop="time" label="结项时间"> </el-table-column>
      <el-table-column prop="remarks" label="备注"> </el-table-column>
    </el-table>
  </div>
</template>

<script>
export default {
  data() {
    return {
      tableData: [
        {
          number: "001",
          projectnumber: "10001",
          name: "sojac",
          projectform: "平台",
          person: "@zl",
          time: "2021",
          remarks: "....................",
        },
        {
          number: "001",
          projectnumber: "10001",
          name: "sojac",
          projectform: "平台",
          person: "@zl",
          time: "2021",
          remarks: "....................",
        },
        {
          number: "001",
          projectnumber: "10001",
          name: "sojac",
          projectform: "平台",
          person: "@zl",
          time: "2021",
          remarks: "....................",
        },
        {
          number: "001",
          projectnumber: "10001",
          name: "sojac",
          projectform: "平台",
          person: "@zl",
          time: "2021",
          remarks: "....................",
        },
        {
          number: "001",
          projectnumber: "10001",
          name: "sojac",
          projectform: "平台",
          person: "@zl",
          time: "2021",
          remarks: "....................",
        },
        {
          number: "001",
          projectnumber: "10001",
          name: "sojac",
          projectform: "平台",
          person: "@zl",
          time: "2021",
          remarks: "....................",
        },
        {
          number: "001",
          projectnumber: "10001",
          name: "sojac",
          projectform: "平台",
          person: "@zl",
          time: "2021",
          remarks: "....................",
        },
        {
          number: "001",
          projectnumber: "10001",
          name: "sojac",
          projectform: "平台",
          person: "@zl",
          time: "2021",
          remarks: "....................",
        },
        {
          number: "001",
          projectnumber: "10001",
          name: "sojac",
          projectform: "平台",
          person: "@zl",
          time: "2021",
          remarks: "....................",
        },
        {
          number: "001",
          projectnumber: "10001",
          name: "sojac",
          projectform: "平台",
          person: "@zl",
          time: "2021",
          remarks: "....................",
        },
      ],
    };
  },
  methods: {},
};
</script>

<style scoped>
.table{
  margin-top: 30px;
}
.el-table{
  margin-top: 30px;
}
</style>
