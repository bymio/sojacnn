<template>
  <div>
    <el-card>
      {{ msg }}
      <tinymce-editor
        ref="editor"
        v-model="msg"
        :disabled="disabled"
        :base-url="baseUrl"
        :language="language"
        :skin="skin"
        @onClick="onClick"
      >
      </tinymce-editor>
      <button @click="clear">清空内容</button>
      <button @click="disabled = true">禁用</button>
      <button @click="disabled = false">启用</button>

      <!-- 表单 -->
      <!-- <el-form ref="form" :model="form" label-width="80px">
        <el-form-item label="新闻类型">
          <el-select v-model="form.Xing" placeholder="请选择新闻类型">
            <el-option label="科普概况" value="shanghai"></el-option>
            <el-option label="政策法规" value="beijing"></el-option>
            <el-option label="科普项目" value="beijing"></el-option>
            <el-option label="学术交流" value="beijing"></el-option>
            <el-option label="办事指南" value="beijing"></el-option>
            <el-option label="科普风采" value="beijing"></el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="新闻类别">
          <el-select v-model="form.Bie" placeholder="请选择新闻类别">
            <el-option label="类别一" value="shanghai"></el-option>
            <el-option label="类别二" value="beijing"></el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="新闻主体">
          <el-select v-model="form.Ti" placeholder="请选择新闻类体">
            <el-option label="类体一" value="shanghai"></el-option>
            <el-option label="类体二" value="beijing"></el-option>
          </el-select>
        </el-form-item>
      </el-form> -->

      <el-form>
        <el-form-item label="请选择">
          <!-- 级联选择器  :options绑定数据源-->
          <!-- <el-cascader
            v-model="selectedKeys"
            :options="parentCateList"
            :props="cascaderProps"
            @change="parentCateChanged"
            clearable
          >
          </el-cascader> -->
        </el-form-item>
      </el-form>
    </el-card>
  </div>
</template>

<script>
import TinymceEditor from "@/common/tinymce-editor/tinymce-editor";
export default {
  name: "newsList2",
  components: {
    TinymceEditor,
  },
  data() {
    return {
      msg: "Welcome to Use Tinymce Editor-liubing.me",
      disabled: false,
      baseUrl: process.env.NODE_ENV === "production" ? "/vue-use-tinymce" : "",
      language: "zh_CN",
      skin: "oxide",

      form: {
        Xing: "", //类型
        Bie: "", //类别
        Ti: "", //主体
      },
      // 选中的父级分类的id数组
      selectedKeys:[],
      //指定级联选择器的配置对象
      cascaderProps:{
        expandTrigger : 'hover',
        value:'cat_id',
        label:'cat_name',
        children:'children',
        checkStrictly : 'true'//可选择任意一级分类
      },
    };
  },
  methods: {
    // 鼠标单击的事件
    onClick(e, editor) {
      console.log("Element clicked");
      console.log(e);
      console.log(editor);
    },
    // 清空内容
    clear() {
      this.$refs.editor.clear();
    },
    parentCateChanged(){
      console.log(this.selectedKeys)
    }
  },
};
</script>
<style scoped>
.el-form {
  margin-top: 50px;
}
</style>