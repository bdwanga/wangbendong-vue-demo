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
      <org-form :visible.sync="visible"  :orgForm="org" :type="editType" @addSub="addSub"></org-form>
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
      props: {label: 'orgName', id: 'orgId'},
      query: {pageIndex: 1, pageSize: 0, orgName: '', parentId: 'root', orgId: ''},
      org: {},
      editType: 'add',
      visible: false
    }
  },
  components: {
    'imp-panel': panel,
    userList,
    orgForm
  },
  methods: {
    handleNodeClick (data) {
      if (!data) {
        return
      }
      if (data.parentId === 'root') {
        this.query.orgId = ''
      } else {
        this.query.orgId = data.orgId
      }
    },
    // 加载数据
    async loadNode (node, resolve) {
      if (node.level > 0) {
        this.query.parentId = node.data.orgId
      }

      let res = await orgApi.paging(this.query)
      resolve(res.data.list)
    },
    // 打开新增修改页面
    openDialog (e, orgInfo, type) {
      // 阻止事件传播
      if (e) { e.stopPropagation() }

      if (!orgInfo) {
        orgInfo = orgApi.getEmptyOrg()
        // 默认父节点为根节点
        orgInfo.parentId = 'root'
        orgInfo.orgLevels = ''
      }

      if (type === 'addSub') {
        let subOrg = orgApi.getEmptyOrg()
        subOrg.parentId = orgInfo.orgId
        subOrg.orgLevels = `${orgInfo.orgLevels}-${orgInfo.orgId}`
        orgInfo = subOrg
      }

      this.org = orgInfo
      this.editType = type
      // 显示弹窗
      this.visible = true
    },
    // 添加子节点
    addSub (data) {
      // console.log(this.$refs.orgTree)
      if (data.parentId) {
      // 追加父节点数据
        this.$refs.orgTree.append(data, this.$refs.orgTree.getNode(data.parentId))
      }
    },
    // 删除节点
    remove (e, node, data) {
      if (e) { e.stopPropagation() }

      this.$confirm('此操作将永久删除该单位, 是否继续?', '提示', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        type: 'warning'
      }).then(async () => {
        let resp = await orgApi.remove(data.orgId)
        // state为0表示删除成功
        if (resp.state !== '0') {
          return
        }
        // 删除节点
        let parent = node.parent
        let children = parent.childNodes
        let index = children.findIndex(d => d.data.orgId === data.orgId)
        children.splice(index, 1)

        this.$message({
          message: '删除成功!',
          type: 'success'
        })
        this.loadData()
      }).catch(() => {

      })
    },
    // 组织树自定义内容
    renderContent (h, {node, data, store}) {
      return (
        <span>
          <span>
            <span>{node.label}</span>
          </span>
          <span class="render-content">
            <i class="fa el-icon-plus" on-click={ (e) => this.openDialog(e, data, 'addSub') }></i>
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
