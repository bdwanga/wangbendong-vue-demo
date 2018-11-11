<template>
  <el-dialog
    :visible.sync="isShow"
    title="新增组织机构"
    width="600px"
  >
    <div>
      <el-form ref="form" label-width="100px" :model="orgForm" :rules="rules">
        <el-form-item label="组织编码" prop="orgId" v-if="type=='add'">
          <el-input v-model="orgForm.orgId"></el-input>
        </el-form-item>
        <el-form-item label="组织名称" prop="orgName">
          <el-input v-model="orgForm.orgName"></el-input>
        </el-form-item>
        <el-form-item label="父级组织" prop="parentId">
          <el-input v-model="orgForm.parentId"></el-input>
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
    visible: {
      type: Boolean,
      default: false
    },
    orgForm: {
    },
    type: {}
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
    }
  }
}
</script>

<style scoped>

</style>
