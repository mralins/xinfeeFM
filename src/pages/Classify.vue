<template>
  <div class="x-home">
    <Header :isActive="isId" />
    <div class="x-list">
      <ul>
        <li v-for="(item,index) in listArr" :key="index">
          <span>
            <img :src="item.icon" />
          </span>
          <a>{{item.name}}</a>
        </li>
      </ul>
    </div>
    <FooterMedia />
  </div>
</template>

<script>
import FooterMedia from '@/components/FooterMedia'
import Header from '@/components/Header'

export default {
  name: 'Classify',
  data () {
    return {
      isId: 'classify',
      listArr: [{
        name: '榜单',
        id: 'list',
        icon: './static/img/list.svg',
        path: '/'
      }, {
        name: '同城',
        id: 'city',
        icon: './static/img/city.svg',
        path: '/'
      }, {
        name: '音乐',
        id: 'music',
        icon: './static/img/music.svg',
        path: '/'
      }, {
        name: '休闲',
        id: 'leisure',
        icon: './static/img/leisure.svg',
        path: '/'
      }, {
        name: '小说',
        id: 'novel',
        icon: './static/img/list.svg',
        path: '/'
      }, {
        name: '汽车',
        id: 'car',
        icon: './static/img/list.svg',
        path: '/'
      }, {
        name: '娱乐',
        id: 'amusement',
        icon: './static/img/list.svg',
        path: '/'
      }, {
        name: '广播',
        id: 'broadcast',
        icon: './static/img/list.svg',
        path: '/'
      }, {
        name: '感情',
        id: 'feeling',
        icon: './static/img/list.svg',
        path: '/'
      }, {
        name: '电影',
        id: 'movie',
        icon: './static/img/list.svg',
        path: '/'
      }, {
        name: '话题',
        id: 'topic',
        icon: './static/img/list.svg',
        path: '/'
      }, {
        name: '教育',
        id: 'education',
        icon: './static/img/list.svg',
        path: '/'
      }, {
        name: '幼儿',
        id: 'child',
        icon: './static/img/list.svg',
        path: '/'
      }, {
        name: '体育',
        id: 'sports',
        icon: './static/img/list.svg',
        path: '/'
      }, {
        name: '主播',
        id: 'anchor',
        icon: './static/img/list.svg',
        path: '/'
      }, {
        name: '科技',
        id: 'technology',
        icon: './static/img/list.svg',
        path: '/'
      }]
    }
  },
  components: {
    FooterMedia,
    Header
  },

  methods: {
    tabTo: function (link) {
      this.$router.push({ path: link })
      // this.$router.go(0) // sucess 页面刷新
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.x-home{
  overflow: hidden;
  margin-bottom: 168px;
  .x-list{
    > ul{
      padding-top: 20px;
      padding-bottom: 128px;
      > li{
        float: left;
        width: 25%;
        text-align: center;
        margin-top: 30px;
        $colors-list: #f96a72 #fe7221 #73b3f5 #43cef4 #88e38c #fec126 #cf8df1 #fb7a85 #fc707b #75b0f3 #88e58e #47cff5 #42d0f1 #d08deb #feb818 #fb6972;
        @each $colors in $colors-list {
          $i: index($colors-list,$colors);
          &:nth-of-type(#{$i}) {
            > span{
              background-color: $colors;
            }
          }
        }
        > span{
          display: inline-block;
          width: 100px;
          height: 100px;
          overflow: hidden;
          @include border-radius(100%);
          padding: 26px;
          > img{
            width: 100%;
          }
        }
        > a{
          display: block;
        }
      }
    }
  }
}
</style>
