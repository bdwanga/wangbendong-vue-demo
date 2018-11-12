<template>
  <el-dialog
    :visible.sync="isShow"
    :title="title"
    width="600px"
  >
    <div>
      <el-form ref="form" label-width="100px" :model="orgForm" :rules="rules">
        <!--<el-form-item label="组织编码" prop="orgId" v-if="type=='add'">-->
          <!--<el-input v-model="orgForm.orgId"></el-input>-->
        <!--</el-form-item>-->
        <el-form-item label="组织名称" prop="orgName">
          <el-input v-model="orgForm.orgName"></el-input>
        </el-form-item>
        <el-form-item label="父级组织" prop="parentId" v-if="orgForm.parentId != 'root' || type !='edit'">
          <el-select-tree v-model="orgForm.parentId" :treeData="orgTree" :propNames="defaultProps" clearable :expandKey="expandKey" :disabled="disabled"
                          placeholder="请选择父级">
          </el-select-tree>
        </el-form-item>
      </el-form>
    </div>
    <div slot="footer">
      <el-button type="primary" @click="save">保存</el-button>
    </div>
  </el-dialog>
</template>

<script>
import orgApi from '@/api/org/org'
import selectTree from '@/components/selectTree.vue'

export default {
  props: {
    visible: {
      type: Boolean,
      default: false
    },
    orgForm: {
      type: Object
    },
    type: {},
    rootOrg: {
      default: 'root'
    }
  },
  data () {
    return {
      rules: {
        orgName: [
          {required: true, trigger: 'change', message: '请输入组织名称!'}
        ]
      },
      isShow: false,
      defaultProps: {
        children: 'children',
        label: 'orgName',
        id: 'orgId'
      },
      orgTree: {},
      expandKey: [this.orgForm.parentId]
    }
  },
  components: {
    'elSelectTree': selectTree
  },
  computed: {
    title () {
      return this.type === 'add' ? '新增组织' : this.type === 'addSub' ? '添加下级组织' : '修改组织'
    },
    disabled () {
      return this.type === 'addSub'
    }
  },
  mounted () {
    this.loadOrgTree()
  },
  watch: {
    isShow (val) {
      if (!val) {
        this.$emit('update:visible', false)
      }
    },
    visible (val) {
      if (val) {
        this.isShow = this.visible
        this.loadOrgTree()
      }
    }
  },
  methods: {
    save () {
      this.$refs.form.validate(async (valid) => {
        if (valid) {
          let res
          if (this.type !== 'edit') {
            // 创建组织
            res = await orgApi.create(this.orgForm)
          } else {
            // 修改组织
            res = await orgApi.modify(this.orgForm)
          }
          // 成功处理
          if (res.state === '0') {
            this.$message({
              message: '保存成功',
              type: 'success'
            })

            if (this.type !== 'edit' && res.data.parentId !== 'root') {
              this.$emit('addSub', res.data)
              this.isShow = false
            } else {
              // 刷新页面
              this.$router.push({path: '/orgTree', query: {t: Date.now()}})
            }
          } else {
            this.$message({
              message: res.message,
              type: 'error'
            })
          }
        }
      })
    },
    // 加载树数据
    async loadOrgTree () {
      let res = await orgApi.getOrgSubs(this.rootOrg)
      if (res.state === '0') {
        this.isShow = this.visible
        this.orgTree = res.data
      }
    }

  }
}
</script>

<style scoped>

</style>
