<template>
  <imp-panel>
    <h3 class="box-title fillwidth" slot="header">
      <el-form :inline="true" class="demo-form-inline">
        <el-form-item>
          <el-button type="primary" icon="el-icon-plus" @click="openDialog($event,'','add')">新增</el-button>
        </el-form-item>
        <!--<el-form-item>-->
        <!--<el-button type="danger" icon="el-icon-delete" @click="batchDelete('','add')">删除</el-button>-->
        <!--</el-form-item>-->
      </el-form>
    </h3>
    <el-row slot="body" :gutter="24">
      <el-col :span="8" :xs="24" :sm="24" :md="8" :lg="8">
        <el-card class="box-card">
          <el-tree v-if="orgTree"
                   :load="loadNode"
                   :props="props"
                   ref="orgTree"
                   lazy
                   highlight-current
                   node-key="orgId"
                   :expand-on-click-node="false"
                   @node-click="handleNodeClick">
             <span class="custom-tree-node" slot-scope="{ node, data }">
               <span>{{ node.label }}</span>
               <span>
                  <el-button
                    type="text"
                    icon="el-icon-plus"
                    @click.prevent="openDialog(data, 'addSub')">
                  </el-button>
                  <el-button
                    type="text"
                    icon="el-icon-edit-outline"
                    @click.prevent="openDialog(data, 'edit')">
                  </el-button>
                      <el-button
                        type="text"
                        icon="el-icon-delete"
                        @click.prevent="remove(node, data)">
                  </el-button>
               </span>
             </span>
          </el-tree>
        </el-card>
      </el-col>
      <el-col :span="16" :xs="24" :sm="24" :md="16" :lg="16">
        <user-list :orgId="query.orgId" :isView="true" viewTitle="人员列表"></user-list>
      </el-col>
      <org-form :visible.sync="visible" :orgForm="org" :type="editType" @addSub="addSub"></org-form>
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
      query: {pageIndex: 1, pageSize: 0, orgName: '', parentId: 'root', orgId: 'root'},
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

      this.query.orgId = data.orgId
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
    openDialog (orgInfo, type) {
      if (!orgInfo) {
        // 在组件写
        orgInfo = {}
        // 默认父节点为根节点
        orgInfo.parentId = 'root'
        orgInfo.orgLevels = ''
      }

      if (type === 'addSub') {
        let subOrg = {}
        subOrg.parentId = orgInfo.orgId
        if (orgInfo.orgLevels) {
          subOrg.orgLevels = `${orgInfo.orgLevels}-${orgInfo.orgId}`
        } else {
          subOrg.orgLevels = orgInfo.orgId
        }
        orgInfo = subOrg
      }

      this.org = orgInfo
      this.editType = type
      // 显示弹窗
      this.visible = true
    },
    // 添加子节点
    addSub (data) {
      if (data.parentId) {
        // 追加父节点数据
        this.$refs.orgTree.append(data, this.$refs.orgTree.getNode(data.parentId))
      }
    },
    // 删除节点
    remove (node, data) {
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
    }
  }
}
</script>

<style>
  .custom-tree-node {
    flex: 1;
    display: flex;
    align-items: center;
    justify-content: space-between;
    font-size: 14px;
    padding-right: 8px;
  }

  .custom-tree-node i:hover {
    color: #b642e6;
  }
</style>
