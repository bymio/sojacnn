<template>
  <div>
    <el-card>
      <el-tabs v-model="addParams.contypeId" @tab-click="handleClick">
        <el-tab-pane v-for="(item,id) in newsXing" :key="id" 
        :label="item.contypeName" 
        :name="item.id.toString()">
          <el-button class="bieButton" type="primary" @click="addNewsBie()">添加新闻类别</el-button>
          <el-table :data="newsBie" stripe border style="width: 100%" max-height="300">
            <el-table-column prop="id" label="ID" width="40px"> </el-table-column>
            <el-table-column prop="categoryName" label="新闻类别"> </el-table-column>
            <el-table-column label="操作" width="130">
              <template slot-scope="scope">
                <el-button
                  type="primary"
                  icon="el-icon-edit"
                  size="mini"
                  @click="editNewsBie(scope.row)"
                ></el-button>
                <!-- {{ scope.row }} -->
                <el-button
                  type="danger"
                  icon="el-icon-delete"
                  size="mini"
                  @click="deleteNewsBie(scope.row.id)"
                ></el-button>
              </template>
            </el-table-column>
          </el-table>
        </el-tab-pane>
      </el-tabs>
    </el-card>
     <!-- 添加新闻类别对话框 -->
    <el-dialog title="提示" :visible.sync="addNewsBieDialog" width="30%">
      <div class="news">添加新闻类别</div>
      <el-input v-model="addParams.categoryName" placeholder="请填写新闻类别"></el-input>
      <span slot="footer" class="dialog-footer">
        <el-button @click="addNewsBieDialog = false">取 消</el-button>
        <el-button type="primary" @click="addNews">确 定</el-button>
      </span>
    </el-dialog>
     <!-- 添加修改新闻类别对话框 -->
    <el-dialog title="提示" :visible.sync="editNewsBieDialog" width="30%">
      <div class="news">修改新闻类别</div>
      <el-input v-model="editParams.categoryName" placeholder="请重新填写新闻类别"></el-input>
      <span slot="footer" class="dialog-footer">
        <el-button @click="editNewsBieDialog = false">取 消</el-button>
        <el-button type="primary" @click="editNews">确 定</el-button>
      </span>
    </el-dialog>
  </div>
</template>

<script>
import { findContype ,findCategoryByContypeId ,updateNewsBie,removeNewsBie ,newsBie} from "@/api/index";
export default {
  name: "newsList4",
  components: {},
  data() {
    return {
      // 存放新闻类型
      newsXing: [],
      // 存放新闻类别
      newsBie:[],
      // 控制修改类别对话框
      editNewsBieDialog:false,
      // 修改类别所需参数
      editParams:{
        //类别名称
        categoryName:'',
        // 类型id
        contypeId:'',
        // 类别id
        id:''
      },
      // 添加类别所需参数
      addParams:{
        contypeId:'2',
        categoryName:'',
      },
      // 控制添加对话框隐藏
      addNewsBieDialog:false
    };
  },
  created(){
    // 获取新闻类型
    this.findNewsXing()
    // 获取新闻类别
    this.getNewsBie()
  },
  methods:{
    handleClick(tab,event) {//点击每个新闻类型触发
    // 将新闻类型保存到this.addParams.contypeId
      this.addParams.contypeId = tab.name
      // 调用获取新闻类别函数
      this.getNewsBie()
    },
    async findNewsXing() {//请求所有新闻类型
      const res = await findContype();
      // console.log(res);
      this.newsXing = res.data.data.item;
    },
    async getNewsBie(){//根据新闻类型id获取类别
      const res = await findCategoryByContypeId(this.addParams)
      this.newsBie = res.data.data.items
    },
    editNewsBie(data){//点击修改按钮触发
      this.editNewsBieDialog = true
      this.editParams.categoryName = data.categoryName
      this.editParams.contypeId = data.contypeId
      this.editParams.id = data.id
    },
    async editNews(){//点击修改确定按钮完成修改请求
      const res = await updateNewsBie(this.editParams)
      console.log(res)
      if(res.data.code !== 200)return this.$message.error('请求出错')
      this.$message.success('修改成功')
      this.getNewsBie()
      this.editNewsBieDialog = false
    },
    async deleteNewsBie(id){//点击删除按钮删除对应新闻类别
      const resultConfirm = await this.$confirm(
        "此操作将永久删除该文件, 是否继续?",
        "提示",
        {
          confirmButtonText: "确定",
          cancelButtonText: "取消",
          type: "warning",
        }
      ).catch((err) => err);
      if (resultConfirm !== "confirm") return this.$message.info("已取消删除");
      const res = await removeNewsBie(id);
      console.log(res);
      this.$message.success('删除成功')
      this.getNewsBie();
    },
    addNewsBie(){//点击添加按钮显示添加对话框
      this.addNewsBieDialog = true
    },
    async addNews(){//点击添加确定按钮完成添加
      const res = await newsBie(this.addParams)
      // console.log(res)
      if(res.data.code !== 200)return this.$message.error('请求失败')
      this.$message.success('添加成功')
      this.addNewsBieDialog = false
      this.getNewsBie()
    }
  }
};
</script>
<style scoped>
.bieButton{
  margin-bottom: 10px;
}
.news{
  margin-bottom: 10px;
}
</style>