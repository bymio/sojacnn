<template>
  <div>
    <el-card>
      <!-- 新闻类型 -->
      <el-select
        v-model="value"
        filterable
        clearable
        placeholder="请选择新闻类型"
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
      <el-input class="input" placeholder="请填写文章标题" v-model="newsTi.title" clearable></el-input>
      <el-button type="primary" style="margin-left: 20px" @click="getNewsTi">发布新闻</el-button>

      <br /><br />
       {{ msg }}
      <tinymce-editor ref="editor" v-model="msg" :disabled="disabled" :value="postForm.content"
        :base-url="baseUrl" :language="language" :skin="skin" @onClick="onClick">
      </tinymce-editor>
      <br/>
      <el-button @click="clear">清空内容</el-button>
      <el-button @click="disabled = true">禁用</el-button>
      <el-button @click="disabled = false">启用</el-button>
    </el-card>
  </div>
</template>

<script>
import { findContype, getNewsBie ,getNewsTiBydata} from "@/api/index";
import TinymceEditor from "@/common/tinymce-editor/tinymce-editor.vue";
export default {
  name: "newsList2",
  components: {
    TinymceEditor,
  },
  data() {
    return {
      msg: "Welcome to Use Tinymce Editor",
      postForm: {
        content: "",
      },
      disabled: false,
      baseUrl: process.env.NODE_ENV === "production" ? "/vue-use-tinymce" : "",
      language: "zh_CN",
      skin: "oxide",
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
      // 请求新闻主体所需参数
      newsTi: {
        // 存放新闻标题
        title:'',
        contypeId:'',
        categoryId:'',
        //新闻主体内容
        data:''
      },
    };
  },
  created() {
    // 查找新闻类型
    this.findNewsXing();
  },
  methods: {
    // 鼠标单击编辑器区域
    onClick(e, editor) {
      // console.log("Element clicked");
      // console.log(e);
      // console.log(editor);

      // 获取编辑器内容
      var activeEditor = tinymce.activeEditor;
      var editBody = activeEditor.getBody();
      activeEditor.selection.select(editBody);
      this.newsTi.data = activeEditor.selection.getContent({ format: "text" });
      // console.log(this.newsTi.data);
    },
    // 清空内容
    clear() {
      this.$refs.editor.clear();
    },
    async findNewsXing() {
      //请求所有新闻类型
      const res = await findContype();
      // console.log(res);
      this.newsXing = res.data.data.item;
    },
    async getValue() {
      //点击新闻类型输入框触发
      // console.log(this.value);
      this.newsXingParms.contypeId = this.value;
      this.newsTi.contypeId = this.value

      const res = await getNewsBie(this.newsXingParms);
      // console.log(res)
      this.newsBie = res.data.data.items;
    },
    getValue2() {
      //点击新闻类别输入框触发
      // console.log(this.value2);
      this.newsTi.categoryId = this.value2
    },
    async getNewsTi(){//点击发布新闻按钮触发
      // console.log(this.newsTi)
      const res = await getNewsTiBydata(this.newsTi)
      console.log(res)
      if(res.data.code !== 200)return this.$message.error('插入新闻失败')
      return this.$message.success('插入新闻成功')
    }
  },
};
</script>
<style scoped>
.addNews {
  margin-top: 20px;
}
.demo-form-inline {
  margin-top: 20px;
}
.input{
  width: 200px;
  margin-left: 20px;
}
</style>