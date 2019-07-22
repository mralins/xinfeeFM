<template>
  <div class="x-home">
    <Header :isActive="isId" />
    <Carousel :carouselData="carousel" />
    <div class="x-content">
      <div class="x-ranking"></div>
      <ul>
        <li v-for="(item,index) in cardData" :key="index">
          <Card :cardData="item" />
        </li>
      </ul>
    </div>
    <FooterMedia />
  </div>
</template>

<script>
import Carousel from '@/components/Carousel'
import Card from '@/components/Card'
import FooterMedia from '@/components/FooterMedia'
import Header from '@/components/Header'

export default {
  name: 'Home',
  data () {
    return {
      carousel: [{
        imgUrl: './static/img/carousel-1.jpg',
        targetLink: 'www.baidu.com'
      }, {
        imgUrl: './static/img/carousel-2.jpg',
        targetLink: 'www.baidu.com'
      }],
      isId: 'live',
      cardData: [{
        imgUrl: './static/img/football.jpg',
        direct: '直播',
        tag: '体育',
        title: '皇家马德里直播吧',
        subTitle: '美凌格博客'
      },
      {
        imgUrl: './static/img/music.jpg',
        direct: '直播',
        tag: '音乐',
        title: '格莱美直播',
        subTitle: '欧美音乐博客'
      },
      {
        imgUrl: './static/img/movie.jpg',
        direct: '直播',
        tag: '电影',
        title: '好莱坞直播吧',
        subTitle: '欧美电影博客'
      },
      {
        imgUrl: './static/img/football.jpg',
        direct: '直播',
        tag: '戏曲',
        title: '河南豫剧团直播吧',
        subTitle: '中国河南博客'
      },
      {
        imgUrl: './static/img/music.jpg',
        direct: '直播',
        tag: '体育',
        title: '皇家马德里直播吧',
        subTitle: '美凌格博客'
      },
      {
        imgUrl: './static/img/movie.jpg',
        direct: '直播',
        tag: '电影',
        title: '好莱坞直播吧',
        subTitle: '欧美电影博客'
      }]
    }
  },
  components: {
    Carousel,
    Card,
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
  .x-content{
    overflow: hidden;
    .x-ranking{
      width: calc(100% - 36px);
      margin-left: 18px;
      min-height: 100px;
      background: -webkit-linear-gradient(left, $primary , $orange);
      background: -moz-linear-gradient(left, $primary , $orange);
      background: -ms-linear-gradient(left, $primary , $orange);
      background: linear-gradient(left, $primary , $orange);
      @include border-radius(3px);
    }
    > ul{
      padding: 10px;
      overflow: hidden;
      margin-bottom: 128px;
       li{
        float: left;
        width: 48%;
        margin: 0 1% 30px 1%;
       }
    }
  }
}
</style>
