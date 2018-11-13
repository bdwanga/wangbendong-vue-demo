<template>
  <imp-panel>
    <h3 class="box-title" slot="header" style="width: 100%;">
      <el-form :inline="true" class="demo-form-inline" @submit.native.prevent>
        <el-form-item v-if="!isView">
          <el-button type="primary" icon="el-icon-plus" @click="openDialog('','add')">新增</el-button>
        </el-form-item>
        <el-form-item v-else :label="viewTitle">
        </el-form-item>
        <el-form-item style="float: right">
          <el-input placeholder="输入用户名称" v-model="query.userName" @keyup.enter.native="search($event)">
            <i slot="suffix" class="el-input__icon el-icon-search" @click="search($event)"></i>
          </el-input>
        </el-form-item>
      </el-form>
    </h3>
    <div slot="body">
      <el-table
        border
        :data="tableData"
        style="width: 100%"
        v-loading="listLoading">
        <el-table-column
          prop="name"
          label="名称">
        </el-table-column>
        <el-table-column
          prop="nick"
          label="昵称">
        </el-table-column>
        <el-table-column
          prop="orgName" v-if="isView">
            <template slot="header" slot-scope="slot" >
              <span>单位</span>
              <el-checkbox v-model="isHasSub" style="float: right">包含下级</el-checkbox>
            </template>
        </el-table-column>
        <el-table-column
          prop="orgName" label="单位" v-else>
        </el-table-column>
        <el-table-column label="操作" width="180" v-if="!isView">
          <template slot-scope="scope">
            <el-button
              size="small"
              type="default"
              icon="el-icon-edit"
              @click="openDialog(scope.row,'edit')"
            >编辑
            </el-button>
            <el-button
              size="small"
              type="danger"
              @click="remove(scope.row.id)"
            >删除
            </el-button>
          </template>
        </el-table-column>
      </el-table>
      <div>
        <el-pagination
          @size-change="handleSizeChange"
          @current-change="handleCurrentChange"
          :current-page="query.pageIndex"
          :page-sizes="[5, 10, 20]"
          :page-size="query.pageSize"
          layout="total, sizes, prev, pager, next, jumper"
          :total="query.total">
        </el-pagination>
      </div>
      <user-form :visible.sync="visible" @success="loadData" :userForm="user" :type="editType"></user-form>
    </div>
  </imp-panel>
</template>

<script>
import panel from '@/components/panel.vue'
import userApi from '@/api/user/user'
import userForm from './userForm'

export default {
  props: {
    // 入参单位
    orgId: {default: ''},
    // 入参是否只是查看
    isView: {type: Boolean, default: false},
    // 入参显示标题
    viewTitle: {type: String, default: ''}
  },
  data () {
    return {
      visible: false,
      // 表格数据
      tableData: [],
      // 查询条件
      query: {userName: '', orgId: '', pageIndex: 1, pageSize: 5, total: 0, isHasSub: true},
      listLoading: false,
      user: {},
      editType: 'add',
      isHasSub: true
    }
  },
  components: {
    'imp-panel': panel,
    userForm
  },
  mounted () {
    this.query.orgId = this.orgId
    this.loadData()
  },
  watch: {
    orgId (val) {
      this.query.orgId = val
      this.loadData()
    },
    isHasSub (val) {
      this.query.isHasSub = this.isHasSub
      this.loadData()
    }
  },
  methods: {
    // 加载数据
    async loadData () {
      let res = await userApi.paging(this.query)
      this.tableData = res.data.list
      this.query.total = res.data.total
    },
    handleCurrentChange (index) {
      this.query.pageIndex = index
      this.loadData()
    },
    handleSizeChange (size) {
      this.query.pageSize = size
      this.loadData()
    },
    // 搜索
    search () {
      this.loadData()
    },
    // 删除
    async remove (id) {
      this.$confirm('此操作将永久删除该用户, 是否继续?', '提示', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        type: 'warning'
      }).then(async () => {
        let resp = await userApi.remove(id)
        // state为0表示删除成功
        if (resp.state !== '0') {
          return
        }

        this.$message({
          message: '删除成功!',
          type: 'success'
        })

        this.loadData()
      }).catch(() => {

      })
    },
    // 打开新增修改页面
    openDialog (userInfo, type) {
      this.visible = true
      if (!userInfo) {
        userInfo = userApi.getEmptyUser()
      }
      this.user = userInfo
      this.editType = type
    }
  }
}
</script>

<style scoped>
  .el-pagination {
    float: right;
    margin-top: 15px;
  }
</style>
