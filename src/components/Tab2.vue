<template>
  <div class="x-tab-content">
    <div class="x-count">
      <span class="x-icon">
        <img src="../assets/img/svg/account.svg" />
      </span>
      <input type="type" name="count" value="" placeholder="手机号/邮箱" />
    </div>
    <div class="x-password">
      <span class="x-icon">
        <img src="../assets/img/svg/password.svg" />
      </span>
      <input type="type" name="password" value="" placeholder="设置密码" />
    </div>
    <div class="x-password">
      <span class="x-icon">
        <img src="../assets/img/svg/password.svg" />
      </span>
      <input type="type" name="password" value="" placeholder="确认密码" />
    </div>
    <Button mes="注册" link="/login" :isBlock="true" />
  </div>
</template>

<script>
import Button from '@/components/Button'
export default {
  name: 'Tab2',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  },
  methods: {},
  components: {
    Button
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
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
