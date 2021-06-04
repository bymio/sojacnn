<template>
  <div>
    <el-card>
       <el-table :data="roleList" stripe style="width: 100%" :border = 'true'>
        <el-table-column prop="id" label="ID" width="80px"></el-table-column>
        <el-table-column prop="roleName" label="姓名" width="180"></el-table-column>
      </el-table>
    </el-card>
    
  </div>
</template>

<script>
import { getRole } from '@/api/index'
export default {
  name:'newsList',
  components:{
  },
  data(){
    return {
      // 角色列表
      roleList:[]
    }
  },
  created(){
    this.getRoleList()
  },
  methods: {
    async getRoleList(){//获取角色
      const res = await getRole(1)
      console.log(res)
      if(res.status !== 200)return this.$messge.error('请求角色失败');
      this.roleList = res.data.data.items
      // console.log(this.roleList)
    }
  }
}
</script>
<style scoped>

</style>