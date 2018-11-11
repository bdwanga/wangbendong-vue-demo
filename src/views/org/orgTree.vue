<template>
  <imp-panel>
    <h3 class="box-title" slot="header" style="width: 100%;">
      <el-form :inline="true" class="demo-form-inline">
        <el-form-item>
          <el-button type="primary" icon="el-icon-plus" @click="openDialog($event,'','add')">新增</el-button>
        </el-form-item>
        <!--<el-form-item>-->
          <!--<el-button type="danger" icon="el-icon-delete" @click="batchDelete('','add')">删除</el-button>-->
        <!--</el-form-item>-->
      </el-form>
    </h3>
    <el-row slot="body" :gutter="24" style="margin-bottom: 20px;">
      <el-col :span="8" :xs="24" :sm="24" :md="8" :lg="8" style="margin-bottom: 20px;overflow: auto">
        <el-card class="box-card" >
        <el-tree v-if="orgTree"
                 :load="loadNode"
                 :props="props"
                 ref="orgTree"
                 lazy
                 highlight-current
                 node-key="orgId"
                 :expand-on-click-node="false"
                 :render-content="renderContent"
                 @node-click="handleNodeClick"></el-tree>
        </el-card>
      </el-col>
      <el-col :span="16" :xs="24" :sm="24" :md="16" :lg="16">
         <user-list :orgId="query.orgId" :isView="true" viewTitle="人员列表"></user-list>
      </el-col>
      <org-form :visible.sync="visible"  :orgForm="org" :type="editType"></org-form>
    </el-row>
  </imp-panel>
</template>

<script>
import panel from '@/components/panel.vue'
import orgApi from '@/api/org/org'
import userList from '@/views/user/userList'
import orgForm from './orgForm'

export default {
  data () {
    return {
      orgTree: [],
      props: {
        label: 'orgName',
        id: 'orgId'
      },
      query: {
        pageIndex: 1,
        pageSize: 0,
        orgName: '',
        parentId: 'root',
        orgId: ''
      },
      org: {},
      editType: 'add',
      visible: false,
      resolve: {}
    }
  },
  components: {
    'imp-panel': panel,
    userList,
    orgForm
  },
  methods: {
    handleNodeClick (data) {
      if (data) {
        if (data.parentId === 'root') {
          this.query.orgId = ''
        } else {
          this.query.orgId = data.orgId
        }
      }
    },
    async loadNode (node, resolve) {
      if (node.level > 0) {
        this.query.parentId = node.data.orgId
      }

      let res = await orgApi.paging(this.query)
      resolve(res.data.list)
    },
    openDialog (e, orgInfo, type) {
      if (e) { e.stopPropagation() }
      this.visible = true
      if (!orgInfo) {
        orgInfo = orgApi.getEmptyOrg()
      }
      this.org = orgInfo
      this.editType = type
    },

    remove (e, node, data) {
      if (e) { e.stopPropagation() }
      this.$confirm('此操作将永久删除该单位, 是否继续?', '提示', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        type: 'warning'
      }).then(async () => {
        let resp = await orgApi.remove(data.orgId)
        // state为0表示删除成功
        if (resp.state === '0') {
          // 删除节点
          let parent = node.parent
          let children = parent.childNodes
          let index = children.findIndex(d => d.data.orgId === data.orgId)
          children.splice(index, 1)

          this.$message({
            message: '删除成功!',
            type: 'success'
          })
        } else {
          this.$message({
            message: resp.message,
            type: 'error'
          })
        }
        this.loadData()
      }).catch(() => {

      })
    },
    renderContent (h, {node, data, store}) {
      return (
        <span>
          <span>
            <span>{node.label}</span>
          </span>
          <span class="render-content">
            <i class="fa el-icon-edit-outline" on-click={ (e) => this.openDialog(e, data, 'edit') }></i>
            <i class="fa el-icon-delete" on-click={ (e) => this.remove(e, node, data) }></i>
          </span>
        </span>)
    }
  },
  mounted () {
    // this.loadNode()
  }

}
</script>

<style>
  .render-content {
    position:absolute;
    right:0px;
  }

  .render-content i.fa {
    margin-left: 10px;
    color: #03ade6;
  }

  .render-content i.fa:hover{
    color: #b642e6;
  }
</style>
