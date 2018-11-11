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
        <el-form-item label="父级组织" prop="parentId" v-if="orgForm.parentId != 'root'">
          <el-select-tree v-model="orgForm.parentId" :treeData="orgTree" :propNames="defaultProps" clearable :expandKey="expandKey"
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
        orgId: [
          {required: true, trigger: 'change', message: '请输入组织编码!'}
        ],
        orgName: [
          {required: true, trigger: 'change', message: '请输入组织名称!'}
        ],
        parentId: [
          {required: true, trigger: 'change', message: '请选择父级组织!'}
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
      return this.type === 'add' ? '新增组织' : '修改组织'
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
        // this.loadOrgTree()
      }
    }
  },
  methods: {
    save () {
      this.$refs.form.validate(async (valid) => {
        if (valid) {
          let res
          if (this.type === 'add') {
            res = await orgApi.create(this.orgForm)
          } else {
            res = await orgApi.modify(this.orgForm)
          }
          if (res.state === '0') {
            // this.isShow = false
            // this.$emit('success')
            this.$message({
              message: '保存成功',
              type: 'success'
            })
            this.$router.push({path: '/orgTree', query: {t: Date.now()}})
          } else {
            this.$message({
              message: res.message,
              type: 'error'
            })
          }
        }
      })
    },
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
