<template>
  <el-dialog
    :visible.sync="isShow"
    :title="title"
    width="600px"
  >
    <div>
      <el-form ref="form" label-width="100px" :model="orgForm" :rules="rules">
        <el-form-item label="组织名称" prop="orgName">
          <el-input v-model="orgForm.orgName"></el-input>
        </el-form-item>
        <el-form-item label="父级组织" prop="parentId" v-if="orgForm.parentId != 'root' || type !='edit'">
          <!--<el-select-tree v-model="orgForm.parentId" :treeData="orgTree" :propNames="defaultProps" clearable :expandKey="expandKey" :disabled="disabled"-->
                          <!--placeholder="请选择父级">-->
          <!--</el-select-tree>-->
          <el-cascader
            :options="orgTree"
            v-model="selectedOptions"
            :show-all-levels="false"
            :props="defaultProps"
            change-on-select
            :disabled="disabled"
          ></el-cascader>
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

export default {
  props: {
    visible: {type: Boolean, default: false},
    orgForm: {type: Object},
    type: {},
    rootOrg: {default: 'root'}
  },
  data () {
    return {
      rules: {
        orgName: [
          {required: true, trigger: 'change', message: '请输入组织名称!'}
        ]
      },
      isShow: false,
      defaultProps: {children: 'children', label: 'orgName', id: 'orgId', value: 'orgId'},
      orgTree: {},
      selectedOptions: []
    }
  },
  components: {
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
      if (val) { return }
      this.$emit('update:visible', false)
    },
    visible (val) {
      if (!val) { return }
      this.isShow = this.visible
      this.loadOrgTree()
    }
  },
  methods: {
    save () {
      this.$refs.form.validate(async (valid) => {
        if (!valid) { return }

        if (this.selectedOptions.length > 0) {
          let tempOrgLevels = this.selectedOptions.join('-')
          if (tempOrgLevels.indexOf(this.orgForm.orgId) !== -1 && this.type === 'edit') {
            this.$message({
              message: '父组织不能调整为其下级组织或当前组织',
              type: 'error'
            })
            return
          }
          // 只选取最后节点
          this.orgForm.parentId = this.selectedOptions[this.selectedOptions.length - 1]
          this.orgForm.orgLevels = tempOrgLevels
        }

        let res
        if (this.type !== 'edit') {
          // 创建组织
          res = await orgApi.create(this.orgForm)
        } else {
          // 修改组织
          res = await orgApi.modify(this.orgForm)
        }
        // 不成功返回
        if (res.state !== '0') {
          return
        }
        // 成功处理
        this.$message({
          message: '保存成功',
          type: 'success'
        })

        if (this.type === 'addSub') {
          this.$emit('addSub', res.data)
          this.isShow = false
        } else {
          // 刷新页面
          this.$router.push({path: '/orgTree', query: {t: Date.now()}})
        }
      })
    },
    // 加载树数据
    async loadOrgTree () {
      let res = await orgApi.getOrgSubs(this.rootOrg)
      // 不成功返回
      if (res.state !== '0') {
        return
      }
      this.isShow = this.visible

      // 展示列表
      this.orgTree = res.data

      // 列表默认值
      if (this.orgForm.orgLevels) {
        this.selectedOptions = this.orgForm.orgLevels.split('-')
      } else {
        this.$set(this, 'selectedOptions', [])
      }
    }

  }
}
</script>

<style scoped>

</style>
