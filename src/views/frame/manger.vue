<template>
  <div class="manage_page fillcontain">
    <el-row class="fillheight">
      <el-col :span="4"  class="menuCol">
        <el-menu :default-active="defaultActive"  class="menuCss" background-color="#324057" text-color="#fff"
                 active-text-color="#ffd04b" router>
          <el-menu-item index="manger"><i class="el-icon-menu"></i>首页</el-menu-item>
          <el-submenu index="2">
            <template slot="title"><i class="el-icon-document"></i>数据管理</template>
            <el-menu-item index="user-list">用户管理</el-menu-item>
            <el-menu-item index="org-tree">组织管理</el-menu-item>
          </el-submenu>
        </el-menu>
      </el-col>
      <el-col :span="20" class="fillheight">
        <keep-alive>
          <router-view></router-view>
        </keep-alive>
      </el-col>
    </el-row>
  </div>
</template>

<script>
export default {
  computed: {
    defaultActive: function () {
      return this.$route.path.replace('/', '')
    }
  }
}
</script>

<style lang="less" scoped>
  @import '../../style/mixin';
  .manage_page{

  }
  .menuCol{
    min-height: 100%;
    background-color: #324057;
  }
  .menuCss{
    min-height: 100%;
  }

</style>
