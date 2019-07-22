<template>
  <div class="x-login">
    <div class="x-header">
      <div class="x-logo">
        <img src="../assets/logo.jpg">
      </div>
    </div>
    <div class="x-tabs">
      <ul class="x-tab-title">
        <li
          v-for="(title, index) in tabTitle"
          @click="current=index, tabChange('Tab' + (index + 1))"
          :class="{active:current==index}"
          :key="index"
        >
          <span>{{title}}</span>
        </li>
      </ul>
      <keep-alive>
        <component v-bind:is="tabView"></component>
      </keep-alive>
    </div>
  </div>
</template>

<script>
import Tab1 from '@/components/Tab1'
import Tab2 from '@/components/Tab2'

export default {
  name: 'Login',
  data () {
    return {
      tabTitle: ['登录', '注册'],
      current: 0,
      tabView: 'Tab1',
      sonData: ''
    }
  },
  components: {
    Tab1,
    Tab2
  },

  methods: {
    tabChange: function (tab) {
      this.tabView = tab
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.x-login{
  overflow: hidden;
  .x-header{
    position: relative;
    background-color: $primary;
    width: 100%;
    height: 360px;
    .x-logo{
      width: 120px;
      height: 120px;
      overflow: hidden;
      position: absolute;
      left: 50%;
      top: 50%;
      @include translate(-50%, -50%);
      > img{
        width: 100%;
      }
    }
  }
  .x-tabs{
    .x-tab-title{
      background-color: #f8a521;
      display: flex;
      > li{
        flex: 1;
        padding: 24px 0;
        cursor: pointer;
        position: relative;
        > span{
          display: block;
          color: #fbe6c6;
          @extend %transition;
        }
        &:first-child{
          span{
            border-right: 1px solid #fbe6c6;
          }
        }
        &:before{
          @extend %transition;
        }
        &.active{
          > span{
            color: white;
            font-weight: bold;
          }
          &:before{
            bottom: 0;
            left: 50%;
            @include translate(-50%, 0);
            @extend %tooltip-before;
          }
        }
      }
    }
  }
}
</style>
