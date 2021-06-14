<template>
  <div class="tinymce-editor">
    <Editor id="tinymce"
            v-model="myValue"
            :init="init"
            :disabled="disabled"
            @onClick="onClick">
    </Editor>
  </div>
</template>

<script>
  //引入基础文件：
  import tinymce from 'tinymce/tinymce'
  import Editor from '@tinymce/tinymce-vue'
  import 'tinymce/themes/silver/theme'
  import 'tinymce/icons/default/icons';
  //编辑器插件plugins
  // 更多插件参考：https://www.tiny.cloud/docs/plugins/
  //https://blog.csdn.net/guochengabcd/article/details/107860463
  //https://www.cnblogs.com/huihuihero/p/13877589.html
  // http://tinymce.ax-z.cn/
  // https://blog.csdn.net/chendongdong1/article/details/106628706/
  //资料：https://www.cnblogs.com/huihuihero/p/13877589.html
  import 'tinymce/plugins/image';// 插入上传图片插件
  // import "tinymce/plugins/axupimgs";  //插入多图插件
  import 'tinymce/plugins/media';// 插入视频插件
  import 'tinymce/plugins/imagetools';
  import 'tinymce/plugins/table';// 插入表格插件
  import 'tinymce/plugins/lists';// 列表插件,有序列表、无序列表
  import 'tinymce/plugins/contextmenu';
  import 'tinymce/plugins/wordcount';// 字数统计插件
  // import 'tinymce/plugins/colorpicker';
  // import 'tinymce/plugins/textcolor';
  import 'tinymce/plugins/preview'// 插入预览
  import 'tinymce/plugins/code'// 插入代码
  import 'tinymce/plugins/link'// 插入链接
  import 'tinymce/plugins/advlist';
  import 'tinymce/plugins/codesample';  //插入、编辑代码示例
  import 'tinymce/plugins/hr';  //水平分割线
  import 'tinymce/plugins/fullscreen';  //全屏
  import 'tinymce/plugins/textpattern';  //文本模式
  import 'tinymce/plugins/searchreplace';  //查找和替换
  // import 'tinymce/plugins/autolink';  //自动链接
  import "tinymce/plugins/directionality";  //方向感知
  import "tinymce/plugins/visualblocks";  //显示区块边框
  import "tinymce/plugins/visualchars";  //显示不可见字符
  // import "tinymce/plugins/template";  //插入模板
  import "tinymce/plugins/charmap";  //特殊符号
  import "tinymce/plugins/nonbreaking";  //不间断空格
  import "tinymce/plugins/insertdatetime";  //插入时间、日期
  import "tinymce/plugins/imagetools";  //自定义图像
  import "tinymce/plugins/autosave";  //自动保存
  // import "tinymce/plugins/autoresize"; // 内容自适应插件
  import 'tinymce/plugins/emoticons';// 插入表情插件
  import 'tinymce/plugins/anchor';  //插入锚点

  //扩展插件(多图上传)
  // import '../../../public/tinymce/axupimgs'

  //异步接口
  // import tinymce_ckeditor from '@/api/tinymce'
  // import { getToken } from '@/utils/auth'  //从vuex中获取token



  export default {
    name: "index",
    components:{ Editor },
    props:{
      value:{
        type:String,
        default:''
      },
      // 基本路径，默认为空根目录，如果你的项目发布后的地址为目录形式，
      // 即abc.com/tinymce，baseUrl需要配置成tinymce，不然发布后资源会找不到
      baseUrl: {
        type: String,
        default: ''
      },
      disabled: {
        type: Boolean,
        default: false
      },
      plugins: {
        //插件配置
        type: [String, Array],
        default:
          "preview searchreplace directionality visualblocks visualchars " +
          "fullscreen image axupimgs link media code codesample table charmap hr " +
          "nonbreaking insertdatetime advlist lists wordcount imagetools textpattern " +
          "autosave emoticons"

      },
      //formatpainter,styleselect,| formatselect fontselect fontsizeselect
      //| blockquote subscript superscript removeformat
      toolbar: {
        //工具类配置
        type: [String, Array],
        default:
        "fullscreen undo redo restoredraft \
        | cut copy paste \
        | forecolor backcolor bold italic underline strikethrough codesample \
        | alignleft aligncenter alignright alignjustify outdent indent lineheight \
        | bullist numlist | table image axupimgs media link charmap hr insertdatetime \
        | preview emoticons"
      }
    },
    data(){
      return{
        //初始化配置
        init:{
          language_url:'/tinymce/langs/zh_CN.js',// 语言包的路径
          language:'zh_CN',//语言

          skin_url:'/tinymce/skins/ui/oxide',// skin路径,配置皮肤,浅色
          // skin_url: '/tinymce/skins/ui/oxide-dark',//皮肤：暗色

          emoticons_database_url:'/tinymce/emoticons/js/emojis.js',  //插入表情包

          height: 500,//编辑器高度//注：引入autoresize插件时，此属性失效
          branding: false,//是否禁用“Powered by TinyMCE”
          menubar: true,//顶部菜单栏显示
          elementpath: false,  //禁用编辑器底部的状态栏
          paste_data_images: true,// 允许粘贴图像
          resize: 'both',  //编辑器宽高是否可变，false-否,true-高可变，'both'-宽高均可，注意引号
          // plugins:['image','link','code','preview'],
          plugins: this.plugins,  //插件配置
          toolbar: this.toolbar,  //工具类配置，设置false则隐藏
          // menubar: 'file edit',  //菜单栏配置，设为false则隐藏，不配置则默认显示全部菜单，也可自定义配置--查看 http://tinymce.ax-z.cn/configure/editor-appearance.php --搜索“自定义菜单”
          // toolbar:['formatselect | bold italic | alignleft aligncenter alignright alignjustify |bullist numlist outdent indent | lists image media table | removeformat link | code preview'],

          // content_style: "p {margin: 5px 0;}",
          // CONFIG: ContentStyle内容样式： 这块很重要， 在最后呈现的页面也要写入这个基本样式保证前后一致， `table`和`img`的问题基本就靠这个来填坑了
          content_style: `
            *                         { padding:0; margin:0; }
            html, body                { height:100%; }
            img                       { max-width:100%; display:block;height:auto; }
            a                         { text-decoration: none; }
            iframe                    { width: 100%; }
            p                         { line-height:1.6; margin: 0px; }
            table                     { word-wrap:break-word; word-break:break-all; max-width:100%; border:none; border-color:#999; }
            .mce-object-iframe        { width:100%; box-sizing:border-box; margin:0; padding:0; }
            ul,ol                     { list-style-position:inside; }
          `,
          //字号设置
          fontsize_formats: '12px 14px 16px 18px 20px 22px 24px 28px 32px 36px 48px 56px 72px',  //字体大小
          //字体设置
          // font_formats: '微软雅黑=Microsoft YaHei,Helvetica Neue,PingFang SC,sans-serif;苹果苹方=PingFang SC,Microsoft YaHei,sans-serif;宋体=simsun,serif;仿宋体=FangSong,serif;黑体=SimHei,sans-serif;Arial=arial,helvetica,sans-serif;Arial Black=arial black,avant garde;Book Antiqua=book antiqua,palatino;',  //字体样式
          font_formats: `
            微软雅黑=微软雅黑;
            宋体=宋体;
            黑体=黑体;
            仿宋=仿宋;
            楷体=楷体;
            隶书=隶书;
            幼圆=幼圆;
            Andale Mono=andale mono,times;
            Arial=arial, helvetica,
            sans-serif;
            Arial Black=arial black, avant garde;
            Book Antiqua=book antiqua,palatino;
            Comic Sans MS=comic sans ms,sans-serif;
            Courier New=courier new,courier;
            Georgia=georgia,palatino;
            Helvetica=helvetica;
            Impact=impact,chicago;
            Symbol=symbol;
            Tahoma=tahoma,arial,helvetica,sans-serif;
            Terminal=terminal,monaco;
            Times New Roman=times new roman,times;
            Trebuchet MS=trebuchet ms,geneva;
            Verdana=verdana,geneva;
            Webdings=webdings;
            Wingdings=wingdings,zapf dingbats`,
          lineheight_formats: "0.5 0.8 1 1.2 1.5 1.75 2 2.5 3 4 5",  //行高配置，也可配置成"12px 14px 16px 20px"这种形式

          paste_retain_style_properties: 'all',  //粘贴保留样式属性
          paste_word_valid_elements: '*[*]',        // word需要它
          // paste_data_images: true,                  // 粘贴的同时能把内容里的图片自动上传，非常强力的功能
          paste_convert_word_fake_lists: false,     // 插入word文档需要该属性
          paste_webkit_styles: 'all',
          paste_merge_formats: true,
          nonbreaking_force_tab: false,
          paste_auto_cleanup_on_paste: false,
          // insert_button_items: 'image link | inserttable',

          default_link_target: '_blank',
          link_title:false, //取消link工具的标题

          // start-格式栏设置设置-CONFIG: StyleSelect
          style_formats: [
            {
              title: '首行缩进',
              block: 'p',
              styles: { 'text-indent': '2em' }
            },
            {
              title: '行高',
              items: [
                { title: '1', styles: { 'line-height': '1' }, inline: 'span' },
                { title: '1.5', styles: { 'line-height': '1.5' }, inline: 'span' },
                { title: '2', styles: { 'line-height': '2' }, inline: 'span' },
                { title: '2.5', styles: { 'line-height': '2.5' }, inline: 'span' },
                { title: '3', styles: { 'line-height': '3' }, inline: 'span' }
              ]
            }
          ],
          // end-格式栏设置设置
          // Tab
          tabfocus_elements: ':prev,:next',
          object_resizing: true,
          // Image
          imagetools_toolbar: 'rotateleft rotateright | flipv fliph | editimage imageoptions',

          //start-图片。此处为图片上传处理函数，这个直接用了base64的图片形式上传图片，
          // images_upload_handler: (blobInfo, success, failure) => {
          //   const img = 'data:image/jpeg;base64,' + blobInfo.base64()
          //   success(img)
          // },
          images_upload_handler: (blobInfo, success, failure) => {
            if(blobInfo.blob().size/1024/1024>2){
              failure("上传失败，图片大小请控制在 2M 以内")
            }else{
              let params=new FormData()
              params.append('imgs',blobInfo.blob());
              params.append('objectType','tinymce_image');
              params.append('objectID','001');

              const token = getToken()
              let config={
                headers:{
                  "Content-Type":"multipart/form-data",
                  "Authorization" : `Bearer `+token
                }
              }
              //http://127.0.0.1:8000/ckeditor/upload/，http://127.0.0.1:8000/Images-post/
              this.$axios.post(`${process.env.VUE_APP_BASE_API}/Images-post/`,params,config).then(res=>{
              // tinymce_ckeditor(params,config).then(res=>{
              //   console.log('哈哈',res)
                if(res.status===200 || res.status===201){
                  success(res.data.Upload_imgs[0])  //上传成功，在成功函数里填入图片路径
                }else{
                  failure("上传失败")
                }
              }).catch(()=>{
                failure("上传出错，服务器开小差了呢")
              })
            }
          },
          //end-图片

          //start-文件和媒体，资料http://tinymce.ax-z.cn/general/upload-images.php
          file_picker_types: 'file image media',  //分别对应三个类型文件的上传：link插件，image和axupimgs插件，media插件。
          file_picker_callback: (callback, value, meta)=>{
            //文件分类
            let filetype='.pdf, .txt, .zip, .rar, .7z, .doc, .docx, .xls, .xlsx, .ppt, .pptx, .mp3, .mp4,.flv, .jpg';  //限制文件的上传类型
            //后端接收上传文件的地址
            let upurl=''
            //为不同插件指定文件类型及后端地址
            switch(meta.filetype){
              case 'image':
                filetype='.jpg, .jpeg, .png, .gif';
                upurl='/Images-post/';
                break;
              case 'media':
                filetype='.mp3,.mp4,.flv';
                upurl='/Medias-post/';
                break;
              case 'file':
              default:
            }
            //模拟出一个input用于添加本地文件
            let inputElem = document.createElement('input');  //创建文件选择
                inputElem.setAttribute('type', 'file');
                inputElem.setAttribute('accept', filetype);
            inputElem.click();

            inputElem.onchange=()=>{

              let file = inputElem.files[0]  //获取文件信息
              console.log('打印的文件信息：',file,'二',file.type.slice(0,5))
              if(file.type.slice(0,5)==='video'){  //判断文件类型,slice(0,5)切割后取前5个字母
                upurl=`${process.env.VUE_APP_BASE_API}/Medias-post/`
              }else if(file.type.slice(0,5)==='image'){  //判断文件类型,slice(0,5)切割后取前5个字母
                upurl=`${process.env.VUE_APP_BASE_API}/Images-post/`
              }else{
                upurl=`${process.env.VUE_APP_BASE_API}/Files-post/`
              }

              if(file.type.slice(0,5)==='image'&&file.size/1024/1024>2){
                alert("上传失败，图片大小请控制在2M以内")
              }else if(file.type.slice(0,5)==='video'&&file.size/1024/1024>500){
                alert("上传失败，视频大小请控制在 500M 以内")
              }else if(file.type.slice(0,5)!=='video'&&file.type.slice(0,5)!=='image'&&file.size/1024/1024>100){
                alert("上传失败，文件大小请控制在 100M 以内")
              }else{
                //设置请求参数params
                let params=new FormData()
                // params.append('file',file)
                params.append('imgs',file);
                params.append('objectType','tinymce_video');
                params.append('objectID','002');

                //设置请求头产出：headers
                const token = getToken()
                let config={
                  headers:{
                    "Content-Type":"multipart/form-data",
                    "Authorization" : `Bearer `+token
                  }
                }
                //异步请求上传接口
                this.$axios.post(upurl,params,config).then(res=>{
                  if(res.data.code===200 || res.status===201){
                    callback(res.data.Upload_imgs[0],{text:file.name})  //上传成功，在回调函数里填入文件路径value, meta
                  }else{
                    alert("上传失败")
                  }
                }).catch(()=>{
                  alert("上传出错，服务器开小差了呢")
                })

              }
            }
          }
          //end-文件和媒体

        },
        myValue: this.value
      };
    },
    mounted() {
      tinymce.init({})
    },
    methods: {
      //添加相关的事件，可用的事件参照文档=> https://github.com/tinymce/tinymce-vue => All available events
      //需要什么事件可以自己增加
      onClick(e) {
        this.$emit('onClick', e, tinymce);
      },
      //可以添加一些自己的自定义事件，如清空内容
      clear() {
        this.myValue = '';
      }
    },
    watch: {
      //动态传参
      value(newValue) {
        this.myvalue = newValue
      },
      //读取输入框内的数据
      myValue(newValue) {
        this.$emit('input', newValue)
      }
    }
  }
</script>

