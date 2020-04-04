<template>
  <div>
    <!--头部标题-->
    <van-nav-bar title="登录" />
    <van-cell-group>
      <van-field v-model="obj.mobile" :error-message="msg.phone" placeholder="请输入手机号">
        <template #left-icon>
          <i style="font-size:22px" class="iconfont icon-phone"></i>
        </template>
      </van-field>
      <van-field v-model="obj.code" :error-message="msg.code" placeholder="请输入验证码">
        <template #button>
          <van-button class="codeN" round size="small" color="#ededed">获取验证码</van-button>
        </template>
        <template #left-icon>
          <i style="font-size:22px" class="iconfont icon-lock"></i>
        </template>
      </van-field>
    </van-cell-group>
    <div class="loginBox">
      <van-button :loading="loadingIn" loading-type="spinner" size="large" type="info" @click="login">登录</van-button>
    </div>
  </div>
</template>

<script>
import { apiLogin } from '../../api/user'
export default {
  data () {
    return {
      loadingIn: false,
      obj: {
        mobile: '',
        code: ''
      },
      msg: {
        phone: '',
        code: ''
      }
    }
  },
  methods: {
    // 完成登陆校验
    async login () {
      // 设置加载状态
      this.loadingIn = true
      if (this.checkData()) {
        try { // 如果try中有错误就会中断,去执行catch中的逻辑
          const res = await apiLogin({ mobile: this.obj.mobile, code: this.obj.code })
          // window.console.log(res)
          if (res.status === 201) {
            // 将服务器返回用户信息保存在vuex中
            this.$store.commit('setuserInfo', res.data.data)
            this.$toast.success('登录成功')
            this.$router.push('/index')
          }
        } catch {
          this.$toast.fail('登录失败')
        }
      } else {
        window.console.log('验证失败')
      }
      // 设置加载完毕状态
      this.loadingIn = false
    },
    checkData () {
      var checkArr = []
      var phoneReg = /^(0|86|17951)?(13[0-9]|15[012356789]|166|17[3678]|18[0-9]|14[57])[0-9]{8}$/
      if (!phoneReg.test(this.obj.mobile)) {
        this.msg.phone = '手机号不合法'
        checkArr.push(false)
      } else {
        this.msg.phone = ''
        checkArr.push(true)
      }
      if (this.obj.code.trim().length !== 6) {
        this.msg.code = '验证码错误'
        checkArr.push(false)
      } else {
        this.msg.code = ''
        checkArr.push(true)
      }
      if (!checkArr.includes(false)) {
        return true
      } else {
        return false
      }
    }
  }
}
</script>
<style lang="less">
.van-nav-bar.van-hairline--bottom {
  background-color: #3296fa;
  .van-nav-bar__title {
    color: #ffffff;
  }
}
.codeN .van-button__text {
  color: #7d7d7d;
}
.loginBox {
  margin: 30px 20px;
}
</style>
