<template>
  <el-dialog
    :visible.sync="isShow"
    :title="title"
    width="600px"
  >
    <div>
      <el-form ref="form" label-width="100px" :model="userForm" :rules="rules">
        <el-form-item label="姓名" prop="name">
          <el-input v-model="userForm.name"></el-input>
        </el-form-item>
        <el-form-item label="昵称" prop="nick">
          <el-input v-model="userForm.nick"></el-input>
        </el-form-item>
        <el-form-item label="密码" prop="password" v-if="type=='add'">
          <el-input type="password" v-model="userForm.password"></el-input>
        </el-form-item>
        <el-form-item label="单位" prop="orgId">
          <el-select-tree v-model="userForm.orgId" :treeData="orgTree" :propNames="defaultProps" clearable
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
import userApi from '@/api/user/user'
import selectTree from '@/components/selectTree.vue'
import orgApi from '@/api/org/org'

export default {
  props: {
    visible: {
      type: Boolean,
      default: false
    },
    userForm: {
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
        name: [
          {required: true, trigger: 'change', message: '请输入姓名!'}
        ],
        password: [
          {required: true, trigger: 'change', message: '请输入密码!'}
        ]
      },
      isShow: false,
      orgTree: {},
      defaultProps: {
        children: 'children',
        label: 'orgName',
        id: 'orgId'
      }
    }
  },
  mounted () {
    this.isShow = this.visible
    this.loadOrgTree()
  },
  components: {
    'elSelectTree': selectTree
  },
  computed: {
    title () {
      return this.type === 'add' ? '新增用户' : '修改用户'
    }
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
          if (this.type === 'add') {
            res = await userApi.create(this.userForm)
          } else {
            res = await userApi.modify(this.userForm)
          }
          if (res.state === '0') {
            this.isShow = false
            this.$emit('success')
            this.$message({
              message: '保存成功',
              type: 'success'
            })
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
        this.orgTree = res.data
      }
    }
  }
}
</script>

<style scoped>

</style>
