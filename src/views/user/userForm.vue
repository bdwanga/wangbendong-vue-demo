<template>
  <el-dialog
    :visible.sync="isShow"
    title="新增用户"
    width="600px"
  >{{type}}
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
          <el-input  v-model="userForm.orgId"></el-input>
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
export default {
  props: {
    visible: {
      type: Boolean,
      default: false
    },
    userForm: {
      type: Object
    },
    type: {}
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
      isShow: false
    }
  },
  mounted () {
    this.isShow = this.visible
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
    }
  }
}
</script>

<style scoped>

</style>
