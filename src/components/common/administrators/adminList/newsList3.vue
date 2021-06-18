<template>
  <div>
    <el-card shadow="hover">
      <el-breadcrumb separator="/">
        <el-breadcrumb-item :to="{ path: '/administrators/newsList3' }">新闻类型</el-breadcrumb-item>
      </el-breadcrumb>
      <el-button class="addButton" type="primary" @click="showNewsXingDialog">添加新闻类型</el-button>
      <el-table :data="newsXing" stripe border style="width: 100%"  >
        <!-- v-loading.fullscreen.lock="loading"
        element-loading-text="拼命加载中" element-loading-spinner="el-icon-loading"
        element-loading-background="rgba(0, 0, 0, 0.8)" -->
        <el-table-column  type="expand" width="40px">
          <template slot-scope="scope">
            <!-- {{scope.row}} -->
            <el-button type="primary" @click="showNewsBie(scope.row)">查看类别</el-button>
          </template>
        </el-table-column>
        <el-table-column prop="id" label="ID" width="40px"> </el-table-column>
        <el-table-column prop="contypeName" label="新闻类型"> </el-table-column>
        <el-table-column label="操作" width="130">
          <template slot-scope="scope">
            <el-button
              type="primary"
              icon="el-icon-edit"
              size="mini"
              @click="editNewsXing(scope.row)"
            ></el-button>
            <!-- {{ scope.row }} -->
            <el-button
              type="danger"
              icon="el-icon-delete"
              size="mini"
              @click="deleteNewsXing(scope.row.id)"
            ></el-button>
          </template>
        </el-table-column>
      </el-table>
      <!-- 分页 -->
      <el-pagination background l
        ayout="prev, pager, next" 
        :total="this.newsXing.length"
        :page-size="queryInfo.pagesize"
        :current-page="queryInfo.pagenum">
      </el-pagination>
    </el-card>

    <!-- 添加新闻类型对话框 -->
    <el-dialog title="提示" :visible.sync="addNewsXingDialog" width="30%">
      <div class="news">添加新闻类型</div>
      <el-input v-model="newsValue" placeholder="请添加新闻类型"></el-input>
      <span slot="footer" class="dialog-footer">
        <el-button @click="addNewsXingDialog = false">取 消</el-button>
        <el-button type="primary" @click="addNews">确 定</el-button>
      </span>
    </el-dialog>
    <!-- 添加修改新闻类型对话框 -->
    <el-dialog title="提示" :visible.sync="editNewsXingDialog" width="30%">
      <div class="news">修改新闻类型</div>
      <el-input v-model="editParams.editValue" placeholder="请重新填写新闻类型"></el-input>
      <span slot="footer" class="dialog-footer">
        <el-button @click="editNewsXingDialog = false">取 消</el-button>
        <el-button type="primary" @click="editNews">确 定</el-button>
      </span>
    </el-dialog>
  </div>
</template>

<script>
import { findContype, newsXing, removeNewsXing ,updateNewsXing, getNewsBie} from "@/api/index";
export default {
  name: "newsList3",
  components: {},
  data() {
    return {
      // 存放新闻类型
      newsXing: [],
      // 控制添加新闻对话框显示与隐藏
      addNewsXingDialog: false,
      // 控制修改新闻对话框显示与隐藏
      editNewsXingDialog:false,
      // 与添加新闻类型双向绑定
      newsValue: "",
      // 修改新闻类型参数
      editParams:{
        id:'',
        // 与输入框双向绑定
        editValue:''
      },
      // 参数信息
      queryInfo:{
        query:'',//查询关键字
        pagenum:1,//当前页码
        pagesize:5//一页5条数据
      },
      // 请求父类型所需参数
      newsXingParms:{
      // 父类型id
        contypeId:'',
        p:1
      },
      // 存放新闻类别数据
      newsBie:[],
      // 加载
      loading:true
    };
  },
  created() {
    // 查找新闻类型
    this.findNewsXing();
    // 查找新闻类别
    this.findNewsBie()
  },
  methods: {
    async findNewsXing() {
      //请求所有新闻类型
      const res = await findContype();
      // console.log(res);
      if(res.data.code !== 200)return
      this.newsXing = res.data.data.item;
      // console.log(this.newsXing);
    },
    showNewsXingDialog() {
      //点击添加新闻类型按钮触发
      this.addNewsXingDialog = true;
    },
    async addNews() {
      //点击对话框确定按钮完成添加新闻类型
      const res = await newsXing(this.newsValue);
      console.log(res);
      if(res.data.code !== 200)return this.$message.error('请求出错')
      this.$message.success('添加成功')
      this.addNewsXingDialog = false;
      this.findNewsXing();
    },
    async deleteNewsXing(id) {
      //点击删除按钮删除对应新闻类型
      const resultConfirm = await this.$confirm(
        "此操作将永久删除该文件, 是否继续?",
        "提示",
        {
          confirmButtonText: "确定",
          cancelButtonText: "取消",
          type: "warning",
        }
      ).catch((err) => err);
      if (resultConfirm !== "confirm") return this.$message.info('已取消删除');
      const res = await removeNewsXing(id);
      console.log(res);
      this.$message.success("删除成功");
      this.findNewsXing();
    },
    editNewsXing(data){//点击修改按钮，修改新闻类型
      this.editNewsXingDialog = true
      this.editParams.id =data.id
      this.editParams.editValue =data.contypeName
    },
    async editNews(){//点击修改新闻类型对话框确定按钮
      const res = await updateNewsXing(this.editParams)
      console.log(res)
      if(res.data.code !== 200)this.$message.error("请求出错");
      this.$message.success("修改成功");
      this.editNewsXingDialog = false
      this.findNewsXing()

    },

    showNewsBie(data){//获取父类型id
      this.newsXingParms.contypeId = data.id
      console.log(this.newsXingParms)
    },
    async findNewsBie(){
      const res = await getNewsBie(this.newsXingParms)
      // console.log(res)
      this.newsBie = res.data.data.items
    }
  },
};
</script>
<style scoped>
.addButton{
  margin: 10px 0;
}
.news {
  margin-bottom: 10px;
}
</style>