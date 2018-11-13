<template>
  <div class="login_page fillcontain">
    <transition name="form-fade" mode="in-out">
      <section class="form_contianer" v-show="showLogin">
        <div class="manage_tip">
          <p>用户管理系统</p>
        </div>
        <el-form :model="loginForm" :rules="rules" ref="loginForm">
          <el-form-item prop="userName">
            <el-input v-model="loginForm.userName" placeholder="用户名"></el-input>
          </el-form-item>
          <el-form-item prop="password">
            <el-input type="password" placeholder="密码" v-model="loginForm.password"></el-input>
          </el-form-item>
          <el-form-item>
            <el-button type="primary" @click="submitForm('loginForm')" class="submit_btn">登陆</el-button>
          </el-form-item>
        </el-form>
        <!--<p class="tip">温馨提示：</p>-->
        <!--<p class="tip">未登录过的新用户，自动注册</p>-->
        <!--<p class="tip">注册过的用户可凭账号密码登录</p>-->
      </section>
    </transition>
  </div>
</template>

<script>
import userApi from '@/api/user/user'
import {mapState, mapMutations} from 'vuex'

export default {
  data () {
    return {
      loginForm: {userName: '', password: ''
      },
      rules: {
        userName: [
          {required: true, message: '请输入用户名', trigger: 'blur'}
        ],
        password: [
          {required: true, message: '请输入密码', trigger: 'blur'}
        ]
      },
      showLogin: false
    }
  },
  mounted () {
    this.showLogin = true
    // if (!this.adminInfo.id) {
    //   this.getAdminData()
    // }
  },
  computed: {
    ...mapState(['userInfo'])
  },
  methods: {
    ...mapMutations(['setUserInfo']), // store函数映射直接提交
    async submitForm (formName) {
      this.$refs[formName].validate(async (valid) => {
        if (valid) {
          const res = await userApi.signIn({userName: this.loginForm.userName, password: this.loginForm.password})
          if (res.state !== '0') {
            return
          }

          this.$message({
            type: 'success',
            message: '登录成功'
          })

          this.setUserInfo(this.loginForm)
          window.sessionStorage.setItem('userInfo', JSON.stringify(this.loginForm))
          this.$router.push('/manger')
        }
      })
    }
  }
}
</script>

<style lang="less" scoped>
  @import '../../style/mixin';

  .login_page {
    background-color: #324057;
  }

  .manage_tip {
    position: absolute;
    width: 100%;
    top: -100px;
    left: 0;
    p {
      font-size: 34px;
      color: #fff;
    }
  }

  .form_contianer {
    .wh(320px, 210px);
    .ctp(320px, 210px);
    padding: 25px;
    border-radius: 5px;
    text-align: center;
    background-color: #fff;
    .submit_btn {
      width: 100%;
      font-size: 16px;
    }
  }

  .tip {
    font-size: 12px;
    color: red;
  }

  .form-fade-enter-active, .form-fade-leave-active {
    transition: all 1s;
  }

  .form-fade-enter, .form-fade-leave-active {
    transform: translate3d(0, -50px, 0);
    opacity: 0;
  }
</style>
