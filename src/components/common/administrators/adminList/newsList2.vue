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
      <el-button @click="clear">清空内容</el-button>
      <el-button @click="disabled = true">禁用</el-button>
      <el-button @click="disabled = false">启用</el-button>
      <!-- 新闻添加按钮 -->
      <el-row>
        <el-col>
          <el-button
            class="addNews"
            type="primary"
            @click="showAddDialogVisible"
            >添加新闻</el-button
          >
        </el-col>
      </el-row>
      <!-- 添加新闻对话框 -->
      <el-dialog title="选择类型" :visible.sync="addDialogVisible" width="30%">
        <el-form>
          <el-form-item label="请选择">
            <!-- 级联选择器  :options绑定数据源-->
            <el-cascader
              v-model="selectedKeys"
              :options="parentCateList"
              :props="cascaderProps"
              @change="parentCateChanged"
              clearable
            >
            </el-cascader>
          </el-form-item>
        </el-form>
        <span slot="footer" class="dialog-footer">
          <el-button @click="addDialogVisible = false">取 消</el-button>
          <el-button type="primary" @click="addDialogVisible = false"
            >确 定</el-button
          >
        </span>
      </el-dialog>
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

      // 选中的父级分类的id数组
      selectedKeys: [],
      //指定级联选择器的配置对象
      cascaderProps: {
        expandTrigger: "hover",
        value: "cat_id",
        label: "cat_name",
        children: "children",
        checkStrictly: "true", //可选择任意一级分类
      },
      // 存放级联选择器数据
      parentCateList: [],
      // 默认关闭添加新闻弹出框
      addDialogVisible: false,
    };
  },
  methods: {
    // 鼠标单击的事件
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
    parentCateChanged() {
      //级联选择框选项变化时触发
      console.log(this.selectedKeys);
    },
    showAddDialogVisible() {
      //点击添加新闻按钮触发
      this.addDialogVisible = true;
    },
  },
};
</script>
<style scoped>
.addNews {
  margin-top: 20px;
}
</style>