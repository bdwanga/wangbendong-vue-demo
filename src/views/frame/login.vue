<template>
  <div class="login_page fillcontain">
    <transition name="form-fade" mode="in-out">
      <section class="form_contianer" v-show="showLogin">
        <div class="manage_tip">
          <p>用户管理系统</p>
        </div>
        <el-form v-show="smsLogin" :model="smsForm" :rules="smsRules" ref="smsForm">
          <el-form-item prop="phone">
            <el-input v-model="smsForm.phone" placeholder="手机号"></el-input>
          </el-form-item>
          <el-form-item prop="code">
            <el-input placeholder="验证码" v-model="smsForm.code" style="width: 58%"></el-input>
            <el-button icon="el-icon-mobile-phone" @click="sendCode" style="width: 40%" type="success" :disabled="disabled=!showCode" >
              <span v-show="showCode">获取验证码</span>
              <span v-show="!showCode" class="count">{{count}} s</span>
            </el-button>
          </el-form-item>
          <el-form-item>
            <el-button type="primary" @click="submitForm('smsForm')" class="submit_btn">登录</el-button>
          </el-form-item>
        </el-form>
        <el-form v-show="!smsLogin" :model="loginForm" :rules="rules" ref="loginForm">
          <el-form-item prop="userName">
            <el-input v-model="loginForm.userName" placeholder="用户名"></el-input>
          </el-form-item>
          <el-form-item prop="password">
            <el-input type="password" placeholder="密码" v-model="loginForm.password" ></el-input>
          </el-form-item>
          <el-form-item>
            <el-button type="primary" @click="submitForm('loginForm')" class="submit_btn">登录</el-button>
          </el-form-item>
        </el-form>
        <el-link class="tip" @click.stop.prevent="changeForm">{{smsLogin ? "密码登录": "短信登录"}}</el-link>
        <!--<p class="tip">未登录过的新用户，自动注册</p>-->
        <!--<p class="tip">注册过的用户可凭账号密码登录</p>-->
      </section>
    </transition>
  </div>
</template>

<script>
import userApi from '@/api/user/user'
import {mapState} from 'vuex'

export default {
  data () {
    return {
      loginForm: {userName: '', password: ''},
      smsForm: {phone: '', code: ''},
      smsLogin: false,
      rules: {
        userName: [
          {required: true, message: '请输入用户名', trigger: 'change'}
        ],
        password: [
          {required: true, message: '请输入密码', trigger: 'change'}
        ]
      },
      smsRules: {
        phone: [
          {required: true, message: '请手机号', trigger: 'change'}
        ],
        code: [
          {required: true, message: '请验证码', trigger: 'change'}
        ]
      },
      showLogin: false,
      showCode: true,
      count: 0
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
    submitForm (formName) {
      this.$refs[formName].validate(async (valid) => {
        if (valid) {
          // 直接写数据
          const res = await userApi.signIn(this[formName], this.smsLogin)
          if (res.state !== '0') {
            return
          }

          this.$message({
            type: 'success',
            message: '登录成功'
          })

          await this.$store.dispatch('setUserInfo', res.data)
          this.$router.push('/manger')
        }
      })
    },
    changeForm () {
      if (this.smsLogin) {
        this.smsLogin = false
      } else {
        this.smsLogin = true
      }
    },
    sendCode () {
      this.$refs.smsForm.validateField('phone', async (valid) => {
        // console.log(valid)
        if (valid) { return }
        if (this.count > 0) { return }
        this.count = 60
        this.showCode = false
        const res = await userApi.sendSmsCode(this.smsForm.phone)
        // console.log(res)
        if (res.state !== '0') {
          this.count = 0
          this.showCode = true
          return
        }
        let timer = setInterval(() => {
          if (this.count > 0 && this.count <= 60) {
            this.count--
          } else {
            this.showCode = true
            clearInterval(timer) // 清除定时器
          }
        }, 1000)
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
    color: deepskyblue;
  }
  .tip:hover {
    cursor:pointer;
  }

  .form-fade-enter-active, .form-fade-leave-active {
    transition: all 1s;
  }

  .form-fade-enter, .form-fade-leave-active {
    transform: translate3d(0, -50px, 0);
    opacity: 0;
  }
</style>
