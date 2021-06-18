<template>
  <div>
    <el-card>
       <!-- 新闻类型 -->
      <el-select
        v-model="value"
        filterable
        clearable
        placeholder="请先选择新闻类型"
        @change="getValue"
      >
        <el-option
          v-for="item in newsXing"
          :key="item.id"
          :label="item.contypeName"
          :value="item.id"
        >
          <span style="float: left">{{ item.contypeName }}</span>
          <span style="float: right; color: #8492a6; font-size: 13px">{{
            item.id
          }}</span>
        </el-option>
      </el-select>
      <!-- 新闻类别 -->
      <el-select
        v-model="value2"
        filterable
        clearable
        placeholder="请选择新闻类别"
        @change="getValue2"
        style="margin-left: 20px"
      >
        <el-option
          v-for="item in newsBie"
          :key="item.id"
          :label="item.categoryName"
          :value="item.id"
        >
          <span style="float: left">{{ item.categoryName }}</span>
          <span style="float: right; color: #8492a6; font-size: 13px">{{
            item.id
          }}</span>
        </el-option>
      </el-select>
      <el-button type="primary" style="margin-left: 20px" @click="getNewsTi">查找新闻</el-button>
      <!-- 新闻数据表格 -->
      <el-table class="table" :data="news" stripe border style="width: 100%">
        <el-table-column type='index' label="#"></el-table-column>
        <el-table-column prop="title" label="新闻标题"></el-table-column>
        <el-table-column prop="id" label="新闻ID"></el-table-column>
        <el-table-column prop="createTime" label="添加时间" width="200px"></el-table-column>
        <el-table-column label="操作"  width="130px">
          <template slot-scope="scope">
            <el-button type="danger" icon="el-icon-delete" size='mini'
            @click="deleteNewsDialog(scope.row.id)">删除</el-button>
          </template>
        </el-table-column>
      </el-table>
    </el-card>
  </div>
</template>

<script>
import { findContype, getNewsBie ,findNewsByTypeAndCategory ,removeNews} from "@/api/index";
export default {
  name:'newsList2find',
  components:{},
  data(){
    return {
       // 默认存放输入框内容
      newsXing: [],
      newsBie: [],
      // 新闻类型输入框值
      value: "",
      // 新闻类别输入框值
      value2: "",
      // 请求新闻类别参数
      newsXingParms: {
        contypeId: "",
        p: 1,
      },
      // 请求新闻主体参数
      newsTi:{
        contypeId:'2',
        categoryId:'1',
        p: 1,
      },
      // 存放新闻
      news:[]
    }
  },
  created() {
    // 查找新闻类型
    this.findNewsXing();
  },
  methods: {
    
    async findNewsXing() {//请求所有新闻类型
      const res = await findContype();
      // console.log(res);
      this.newsXing = res.data.data.item;
    },
    async getValue() {//点击新闻类型输入框触发
      // console.log(this.value);
      this.newsXingParms.contypeId = this.value;
      this.newsTi.contypeId = this.value
      // console.log(this.value)
      this.clearInputContent()
      const res = await getNewsBie(this.newsXingParms);
      // console.log(res)
      this.newsBie = res.data.data.items;
    },
    getValue2() {//点击新闻类别输入框触发
      // console.log(this.value2);
      this.newsTi.categoryId = this.value2
    },
    async getNewsTi(){//点击查找新闻按钮触发
      const res = await findNewsByTypeAndCategory(this.newsTi)
      console.log(res)
      if(res.data.code !== 200)return this.$message.error('查询失败')
      this.$message.success('查询成功')
      this.news = res.data.data.items
    },
    async deleteNewsDialog(id){//点击删除按钮实现删除
      const resultConfirm = await this.$confirm('此操作将永久删除该文件, 是否继续?', '提示', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        type: 'warning'
      }).catch(err => err)
      if(resultConfirm !== 'confirm')return
      const res = await removeNews(id)
      console.log(res)
      if(res.data.code !== 200)return this.$message.error('删除失败')
      this.$message.success('删除成功')
      findNewsByTypeAndCategory(this.newsTi)
    },
    clearInputContent(){// 当类型输入框内容发生改变时，清空类别输入框
      const value = window.sessionStorage.getItem('value')
      if(!value){
          window.sessionStorage.setItem('value',this.value)
      }else{
        if(this.value !== value){
          this.value2 = ''
        }
      }
    }
  }
}
</script>
<style scoped>
.table{
  margin-top: 20px;
}
</style>