<template>
  <div class="x-home">
    <Header :isActive="isId" />
    <Carousel :carouselData="carousel" />
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
    <div class="x-content">
      <div class="x-common x-like">
        <Title :titleData="likeTitleData" />
        <div class="x-card-lists">
          <ul>
            <li v-for="(item,index) in likeCardArr" :key="index">
              <CardList :cardData="item" />
            </li>
          </ul>
        </div>
        <Button mes="换一批" link="/login" :isBlock="false" />
      </div>
      <div class="x-common x-hot">
        <Title :titleData="hotTitleData" />
        <div class="x-card-lists">
          <ul>
            <li v-for="(item,index) in hotCardArr" :key="index">
              <CardList :cardData="item" />
            </li>
          </ul>
        </div>
      </div>
      <div class="x-common x-novel">
        <Title :titleData="novelTitleData" />
        <div class="x-card-lists">
          <ul>
            <li v-for="(item,index) in novelCardArr" :key="index">
              <CardList :cardData="item" />
            </li>
          </ul>
        </div>
      </div>
    </div>
    <FooterMedia />
  </div>
</template>

<script>
import Carousel from '@/components/Carousel'
import FooterMedia from '@/components/FooterMedia'
import Header from '@/components/Header'
import Title from '@/components/Title'
import CardList from '@/components/CardList'
import Button from '@/components/Button'

export default {
  name: 'Featured',
  data () {
    return {
      carousel: [{
        imgUrl: './static/img/music_banner.jpg',
        targetLink: 'www.baidu.com'
      }, {
        imgUrl: './static/img/diantai_banner.jpg',
        targetLink: 'www.baidu.com'
      }],
      isId: 'featured',
      listArr: [{
        name: '榜单',
        id: 'list',
        icon: './static/img/list.svg',
        pathId: '/'
      }, {
        name: '同城',
        id: 'city',
        icon: './static/img/city.svg',
        pathId: '/'
      }, {
        name: '音乐',
        id: 'music',
        icon: './static/img/music.svg',
        pathId: '/'
      }, {
        name: '休闲',
        id: 'leisure',
        icon: './static/img/leisure.svg',
        pathId: '/'
      }, {
        name: '小说',
        id: 'novel',
        icon: './static/img/list.svg',
        pathId: '/'
      }, {
        name: '汽车',
        id: 'car',
        icon: './static/img/list.svg',
        pathId: '/'
      }, {
        name: '娱乐',
        id: 'amusement',
        icon: './static/img/list.svg',
        pathId: '/'
      }, {
        name: '广播',
        id: 'broadcast',
        icon: './static/img/list.svg',
        pathId: '/'
      }],
      likeTitleData: {
        name: '猜你喜欢',
        more: true,
        pathId: '/'
      },
      hotTitleData: {
        name: '热门推荐',
        more: true,
        pathId: '/'
      },
      novelTitleData: {
        name: '小说推荐',
        more: true,
        pathId: '/'
      },
      likeCardArr: [{
        imgUrl: './static/img/fgms.jpg',
        amount: '13万',
        title: '法国美食播客'
      }, {
        imgUrl: './static/img/drzw.jpg',
        amount: '10万',
        title: '多肉植物播客'
      }, {
        imgUrl: './static/img/yejy.jpg',
        amount: '18万',
        title: '幼儿教育播客'
      }, {
        imgUrl: './static/img/yyl.jpg',
        amount: '38万',
        title: '音乐类播客'
      }, {
        imgUrl: './static/img/gwl.jpg',
        amount: '12万',
        title: '购物类播客'
      }, {
        imgUrl: './static/img/fdc.jpg',
        amount: '25万',
        title: '买房地产播客'
      }],
      hotCardArr: [{
        imgUrl: './static/img/gql.jpg',
        amount: '11.4万',
        title: '感情类播客'
      }, {
        imgUrl: './static/img/wmmt.jpg',
        amount: '68万',
        title: '维密模特播客'
      }, {
        imgUrl: './static/img/syl.jpg',
        amount: '10.5万',
        title: '法国摄影播客'
      }],
      novelCardArr: [{
        imgUrl: './static/img/xhxs.jpg',
        amount: '86万',
        title: '玄幻小说播客'
      }, {
        imgUrl: './static/img/dsxs.jpg',
        amount: '67万',
        title: '都市小说播客'
      }, {
        imgUrl: './static/img/yqxs.jpg',
        amount: '85万',
        title: '言情小说播客'
      }]
    }
  },
  components: {
    Carousel,
    FooterMedia,
    Header,
    Title,
    CardList,
    Button
  },
  methods: {
    tabTo: function (link) {
      console.log(link)
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
  padding-bottom: 180px;
  .x-list{
    > ul{
      padding: 10px 40px 30px 40px;
      overflow: hidden;
      border-bottom: 1px solid #ccc;
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
          width: 80px;
          height: 80px;
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
  .x-content{
    .x-common{
      padding: 20px;
      border-bottom: 1px solid #ccc;
      button{
        margin-top: 28px;
      }
      &.x-novel{
        border-color: transparent;
      }
    }
    .x-card-lists{
      overflow: hidden;
      > ul{
        overflow: hidden;
        width: 100%;
        > li{
          float: left;
          width: 32%;
          margin: 20px 1%;
          &:nth-of-type(3n+1){
            margin-left: 0;
          }
          &:nth-of-type(3n+3){
            margin-right: 0;
          }
        }
      }
    }
  }
}
</style>
