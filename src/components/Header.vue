<template>
  <div class="x-header">
    <div class="x-search">
      <img src="../assets/img/svg/search.svg" />
    </div>
    <div class="x-tab">
      <ul>
        <li
          v-for="(item,index) in header.list"
          :class="{'active': isActive === item.id}"
          :key="index"
          @click="tabTo(item.path)"
        >
          <span>{{item.name}}</span>
        </li>
      </ul>
    </div>
    <div class="x-header-img">
      <span @click="toMine(header.toMine.path)">
        <img :src="header.imgUrl" />
      </span>
    </div>
  </div>
</template>

<script>

export default {
  name: 'Header',
  props: ['isActive'],
  data () {
    return {
      header: {
        imgUrl: './static/img/header_img.jpg',
        list: [{
          name: '直播',
          id: 'live',
          path: '/home'
        },
        {
          name: '订阅',
          id: 'subscribe',
          path: '/subscribe'
        },
        {
          name: '精选',
          id: 'featured',
          path: '/featured'
        },
        {
          name: '分类',
          id: 'classify',
          path: '/classify'
        }],
        toMine: {
          name: '我的',
          id: 'mine',
          path: '/mine'
        }
      }
    }
  },
  components: {},

  methods: {
    tabTo: function (link) {
      this.$router.push({ path: link })
      // this.$router.go(0) // sucess 页面刷新
    },
    toMine: function (link) {
      this.$router.push({ path: link })
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.x-home{
  overflow: hidden;
  .x-header{
    background-color: $primary;
    display: flex;
    justify-content: space-between;
    padding: 10px 20px;
    .x-search{
      width: 38px;
      height: 38px;
      overflow: hidden;
      align-self: center;
      > img{
        width: 100%;
      }
    }
    .x-tab{
      display: flex;
      width: 100%;
      > ul{
        display: flex;
        align-self: center;
        width: 100%;
        padding: 0 20px;
        > li{
          flex: 1;
          align-self: center;
          color: #ffffff;
          font-size: 28px;
          > span{
            padding: 15px 10px;
          }
          &.active{
            > span{
              border-bottom: 4px solid #ffffff;
            }
          }
        }
      }
    }
    .x-header-img{
      display: flex;
      > span{
        width: 58px;
        height: 58px;
        overflow: hidden;
        align-self: center;
        @include border-radius(100%);
        > img{
          width: 100%;
        }
      }
    }
  }
}
</style>
