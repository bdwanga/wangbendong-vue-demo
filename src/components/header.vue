<template>
  <div class="header_container">
    <!--图标分隔符-->
    <el-breadcrumb separator="/">
      <el-breadcrumb-item :to="{ path: '/manger' }">首页</el-breadcrumb-item>
      <el-breadcrumb-item v-for="(item, index) in $route.meta" :key="index">{{item}}</el-breadcrumb-item>
    </el-breadcrumb>
    <el-dropdown @command="handleCommand" menu-align='start'>
      <div class="frofile">
      <img src="static/img/default.jpg" class="avator">
      {{userInfo.name}}
        <i class="el-icon-caret-bottom"></i>
      </div>
      <el-dropdown-menu slot="dropdown" style="width: 90px">
        <el-dropdown-item command="home">首页</el-dropdown-item>
        <el-dropdown-item command="singout">退出</el-dropdown-item>
      </el-dropdown-menu>
    </el-dropdown>
  </div>
</template>

<script>
import userApi from '@/api/user/user'
import {baseImgPath} from '@/config/env'
import {mapState, mapActions} from 'vuex'

export default {
  data () {
    return {
      baseImgPath
    }
  },
  created () {
    // if (!this.adminInfo.id) {
    //   this.getAdminData()
    // }
  },
  computed: {
    ...mapState(['userInfo'])
  },
  methods: {
    ...mapActions(['setUserInfo']), // store函数映射直接提交
    async handleCommand (command) {
      if (command === 'home') {
        this.$router.push('/manger')
      } else if (command === 'singout') {
        const res = await userApi.signOut()
        if (res.state === '0') {
          this.setUserInfo({})
          this.$message({
            type: 'success',
            message: '退出成功'
          })
          this.$router.push('/login')
        }
      }
    }
  }
}
</script>

<style lang="less">
  @import '../style/mixin';

  .header_container {
    background-color: #EFF2F7;
    height: 60px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding-left: 20px;
  }

  .frofile{
    padding-right: 15px;
  }
  .frofile :hover{
    cursor:pointer;
  }

  .avator {
    .wh(36px, 36px);
    border-radius: 50%;
    margin-right: 5px;
    vertical-align:middle;
  }

  .el-dropdown-menu__item {
    text-align: center;
  }
</style>
