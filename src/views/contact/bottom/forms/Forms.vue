<template>
  <div class="table">
    <h2>学校管理人员</h2>
    <el-table :data="tableData" height="450" border style="width: 100%">
      <el-table-column prop="number" label="序号" width="180">
      </el-table-column>
      <el-table-column prop="duty" label="职责" width="180">
      </el-table-column>
      <el-table-column prop="name" label="姓名"> </el-table-column>
      <el-table-column prop="phone" label="联系电话"> </el-table-column>
      <el-table-column prop="email" label="邮箱"> </el-table-column>
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
          duty: "老师",
          name: "cobe",
          phone: "111111111",
          email: "123@qq.com",
        },
        {
          number: "001",
          duty: "老师",
          name: "cobe",
          phone: "111111111",
          email: "123@qq.com",
        },
        {
          number: "001",
          duty: "老师",
          name: "cobe",
          phone: "111111111",
          email: "123@qq.com",
        },
        {
          number: "001",
          duty: "老师",
          name: "cobe",
          phone: "111111111",
          email: "123@qq.com",
        },
        {
          number: "001",
          duty: "老师",
          name: "cobe",
          phone: "111111111",
          email: "123@qq.com",
        },
        {
          number: "001",
          duty: "老师",
          name: "cobe",
          phone: "111111111",
          email: "123@qq.com",
        },
        {
          number: "001",
          duty: "老师",
          name: "cobe",
          phone: "111111111",
          email: "123@qq.com",
        },
        {
          number: "001",
          duty: "老师",
          name: "cobe",
          phone: "111111111",
          email: "123@qq.com",
        },
        {
          number: "001",
          duty: "老师",
          name: "cobe",
          phone: "111111111",
          email: "123@qq.com",
        },
        {
          number: "001",
          duty: "老师",
          name: "cobe",
          phone: "111111111",
          email: "123@qq.com",
        },
        {
          number: "001",
          duty: "老师",
          name: "cobe",
          phone: "111111111",
          email: "123@qq.com",
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
