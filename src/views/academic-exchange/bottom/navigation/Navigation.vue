<template>
  <div class="navigation">
    <el-row class="tac">
      <el-col :span="12">
        <el-menu default-active="1" class="el-menu-vertical-demo">

          <el-menu-item index="1">
            <i class="el-icon-menu"></i>
            <span slot="title">学术信息</span>
          </el-menu-item>
          <el-menu-item index="2">
            <i class="el-icon-menu"></i>
            <span slot="title">科技竞赛</span>
          </el-menu-item>
          <el-menu-item index="3">
            <i class="el-icon-menu"></i>
            <span slot="title">。。。。</span>
          </el-menu-item>

        </el-menu>
      </el-col>
    </el-row>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },
  methods: {
    addTag() {
      var list = []; //声明一个集合
      var userName = document.getElementById("el-menu-item").value;
      var money = document.getElementById("money").value;
      var obj = new Object();
      obj.name = userName;
      obj.money = money;
      list.push(obj); //对象放入集合
      var info = document.getElementById("info");
      var inner = "";
      //动态添加元素
      for (i = 0; i < list.length; i++) {
        inner += "<tr>";
        inner +=
          '<td align="center">' +
          list[i].name +
          '</td><td align="center">' +
          list[i].money +
          '</td><td align="center"><a name="' +
          i +
          '" onclick="functiondel(this)">' +
          "删除" +
          "</a></td>";
        inner += "</tr>";
      }
      info.innerHTML = inner;
    },
  },
};
</script> 

<style scoped>
.navigation {
  position: relative;
  top: 20px;
  left: 0;
  width: 400px;
}
</style>
