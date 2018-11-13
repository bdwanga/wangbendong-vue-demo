<template>
  <div class="header_container">
    <!--图标分隔符-->
    <el-breadcrumb separator="/">
      <el-breadcrumb-item :to="{ path: '/manger' }">首页</el-breadcrumb-item>
      <el-breadcrumb-item v-for="(item, index) in $route.meta" :key="index">{{item}}</el-breadcrumb-item>
    </el-breadcrumb>
    <div>
    <el-dropdown @command="handleCommand" menu-align='start'>
      <img src="static/img/default.jpg" class="avator">
      <el-dropdown-menu slot="dropdown">
        <el-dropdown-item command="home">首页</el-dropdown-item>
        <el-dropdown-item command="singout">退出</el-dropdown-item>
      </el-dropdown-menu>
    </el-dropdown>
   <span >{{userInfo.userName}}</span>
    </div>
  </div>
</template>

<script>
import userApi from '@/api/user/user'
import {baseImgPath} from '@/config/env'
import {mapState, mapMutations} from 'vuex'

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
    ...mapMutations(['setUserInfo']), // store函数映射直接提交
    async handleCommand (command) {
      if (command === 'home') {
        this.$router.push('/manger')
      } else if (command === 'singout') {
        const res = await userApi.signOut()
        if (res.state === '0') {
          this.setUserInfo({})
          window.sessionStorage.removeItem('userInfo')
          this.$message({
            type: 'success',
            message: '退出成功'
          })
          this.$router.push('/login')
        } else {
          this.$message({
            type: 'error',
            message: res.message
          })
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

  .avator {
    .wh(36px, 36px);
    border-radius: 50%;
    margin-right: 37px;
  }

  .el-dropdown-menu__item {
    text-align: center;
  }
</style>
