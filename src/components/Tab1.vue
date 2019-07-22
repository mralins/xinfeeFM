<template>
  <div class="x-tab-content">
    <div class="x-count">
      <span class="x-icon">
        <img src="../assets/img/svg/account.svg" />
      </span>
      <input type="type" name="count" value="" :placeholder=loginData.accPlaceHolder />
    </div>
    <div class="x-password">
      <span class="x-icon">
        <img src="../assets/img/svg/password.svg" />
      </span>
      <input type="type" name="password" value="" :placeholder=loginData.pswPlaceHolder />
      <a class="f-password">{{loginData.forgetPsw}}</a>
    </div>
    <Button mes="登录" link="/home" :isBlock="true" />
  </div>
</template>

<script>
import Button from '@/components/Button'
export default {
  name: 'Tab1',
  data () {
    return {
      loginData: {
        accPlaceHolder: '手机号/邮箱',
        pswPlaceHolder: '密码',
        forgetPsw: '忘记密码？'
      }
    }
  },
  methods: {},
  components: {
    Button
  }
}
</script>

<style scoped lang="scss">
.x-tab-content{
  padding: 0 30px;
  .x-icon{
    display: inline-block;
    width: 50px;
    overdlow: hidden;
    align-self: center;
    > img{
      width: 100%;
    }
  }
  .x-count, .x-password{
    display: flex;
    margin-top: 40px;
    border-bottom: 1px solid #ccc;
    padding: 10px;
    > input{
      width: 100%;
      border: none;
      height: 60px;
      outline: none;
      padding: 0 20px;
      font-size: 24px;
    }
    .f-password{
      white-space: nowrap;
      align-self: center;
    }
  }
  .x-password{

  }
}
</style>
