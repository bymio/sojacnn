<template>
  <div class="login">
    <div class="login-box">
      <h1>后台管理系统</h1>
      <!-- 表单 -->
      <el-form  ref="LoginformRef" :model="Loginform" :rules='LoginformRules' label-width="0" class="login_form">
        <!-- 用户名 -->
        <el-form-item label="" prop='account'>
          <el-input class="input"  placeholder="userName" v-model="Loginform.account" prefix-icon="iconfont icon-icon-user"></el-input>
        </el-form-item>
        <!-- 密码 -->
        <el-form-item label="" prop='password'>
          <el-input class="input" placeholder="passWord" type='password' v-model="Loginform.password" prefix-icon="iconfont icon-ziyuan"></el-input>
        </el-form-item>
        <!-- 登录 重置按钮-->
        <el-form-item label="" class="btns">
          <el-button type="primary" @click="LoginClick" :plain="true">登录</el-button>
          <el-button type="info" plain @click='resetLoginForm'>重置</el-button>
        </el-form-item>
      </el-form>
    </div>
  </div>
</template>
 
<script>
import { login } from "@/api/index";
export default {
  data() {
    return {
      msg: "",
      path: "/administrators",
      // 输入框内容
      Loginform:{
        account:'',
        password:''
      },
      // 验证输入规则
      LoginformRules:{
        account:[//验证用户名
          { required: true, message: '请输入登陆账户', trigger: 'blur' },
          { min: 3, max: 12, message: '长度在 3 到 12字符', trigger: 'blur' }
        ],
        password:[//验证密码
          { required: true, message: '请输入登陆密码', trigger: 'blur' },
          { min: 6, max: 15, message: '长度在 6 到 15字符', trigger: 'blur' }
        ]
      }
    };
  },
  created() {
  },
  methods: {
    resetLoginForm(){//重置点击事件
      this.$refs.LoginformRef.resetFields()//重置账户及登陆密码
    },
    LoginClick(){//点击登录按钮触发
      this.$refs.LoginformRef.validate(async valid => {
        if(!valid)return
        const res = await login(this.Loginform)
        if(res.data.code !== 200)return this.$message.error('用户名或密码输入错误')
        this.$notify({
          title:'登录成功',
          type: 'success',
          duration: 1000
        })
        // 获取用户名
        const {userName} = res.data.data.item 
        // 将用户名保存到sessionStorage
        window.sessionStorage.setItem('userName',userName)
        this.$router.push(this.path);
       

      })
    },
  }
};
</script>

<style>
@import "./css/index.css";
@import "../../../assets/iconfont/iconfont.css";
@import "../../../assets/font/index.css";

</style>
