<template>
  <div>
    <el-card>
      {{ msg }}
      <tinymce-editor
        ref="editor"
        v-model="msg"
        :disabled="disabled"
        :value="postForm.content"
        :base-url="baseUrl"
        :language="language"
        :skin="skin"
        @onClick="onClick"
      >
      </tinymce-editor>
      <br>
      <el-button @click="clear">清空内容</el-button>
      <el-button @click="disabled = true">禁用</el-button>
      <el-button @click="disabled = false">启用</el-button>

<br><br>
      <!-- 新闻类型 -->
      <el-select v-model="value" filterable clearable placeholder="请选择新闻类型" @change="getValue">
        <el-option
          v-for="item in newsXing" :key="item.id"
          :label="item.contypeName"
          :value="item.id"
        >
        <span style="float: left">{{ item.contypeName }}</span>
        <span style="float: right; color: #8492a6; font-size: 13px">{{ item.id }}</span>
        </el-option>
      </el-select>
      <!-- 新闻类别 -->
      <el-select v-model="value2" filterable clearable placeholder="请选择新闻类别" @change="getValue2" style="margin-left:20px">
        <el-option
          v-for="item in newsBie" :key="item.id"
          :label="item.categoryName"
          :value="item.id"
        >
        <span style="float: left">{{ item.categoryName }}</span>
        <span style="float: right; color: #8492a6; font-size: 13px">{{ item.id }}</span>
        </el-option>
      </el-select>
      <el-button type="primary" style="margin-left:20px">发布新闻</el-button>
    </el-card>
  </div>
</template>

<script>
import { findContype, getNewsBie } from "@/api/index";
import TinymceEditor from "@/common/tinymce-editor/tinymce-editor.vue";
export default {
  name: "newsList2",
  components: {
    TinymceEditor,
  },
  data() {
    return {
      msg: "Welcome to Use Tinymce Editor",
      postForm:{
        content:'',
      },
      disabled: false,
      baseUrl: process.env.NODE_ENV === "production" ? "/vue-use-tinymce" : "",
      language: "zh_CN",
      skin: "oxide",
      // 默认存放输入框内容
      newsXing: [],
      newsBie: [],
      // 新闻类型输入框值
      value:'',
      // 新闻类别输入框值
      value2:'',
      // 请求新闻类别参数
      newsXingParms:{
        contypeId:'',
        p:1
      },
      // 请求新闻主体所需参数
      newsTi:{

      }
    };
  },
  created() {
    // 查找新闻类型
    this.findNewsXing();
  },
  methods: {
    // 鼠标单击编辑器区域
    onClick(e, editor) {
      console.log("Element clicked");
      // console.log(e);
      // console.log(editor);

      // 获取编辑器内容
      var activeEditor = tinymce.activeEditor;
      var editBody = activeEditor.getBody();
      activeEditor.selection.select(editBody);
      var text = activeEditor.selection.getContent({ format: "text" });
      console.log(text);
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
    async getValue(){//点击新闻类型输入框触发
      console.log(this.value)
      this.newsXingParms.contypeId = this.value

      const res = await getNewsBie(this.newsXingParms)
      // console.log(res)
      this.newsBie = res.data.data.items
    },
    getValue2(){//点击新闻类别输入框触发
      console.log(this.value2)
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
</style>