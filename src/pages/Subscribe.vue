<template>
  <div class="x-home">
    <Header :isActive="isId" />
    <div class="x-card-lists">
      <ul>
        <li v-for="(item,index) in cardDatas" :key="index">
          <Title :titleData="item.titleData" />
          <div v-for="(items,i) in item.dataArry" :key="i" class="x-card-subs">
            <div class="x-card-img">
              <img :src="items.imgUrl" />
              <span v-if="items.tag">正在直播</span>
            </div>
            <div class="x-card-data">
              <h3>{{items.title}}</h3>
              <h5>{{items.subTitle}}</h5>
              <span>{{items.info}}</span>
            </div>
          </div>
        </li>
      </ul>
    </div>
    <FooterMedia />
  </div>
</template>

<script>
import Title from '@/components/Title'
import FooterMedia from '@/components/FooterMedia'
import Header from '@/components/Header'

export default {
  name: 'Subscribe',
  data () {
    return {
      carousel: [{
        imgUrl: './static/img/carousel-1.jpg',
        targetLink: 'www.baidu.com'
      }, {
        imgUrl: './static/img/carousel-2.jpg',
        targetLink: 'www.baidu.com'
      }],
      isId: 'subscribe',
      cardDatas: [{
        titleData: {
          name: '直播',
          more: false
        },
        dataArry: [{
          imgUrl: './static/img/fgms.jpg',
          tag: true,
          title: '皇家马德里直播吧',
          subTitle: '第十一冠直播',
          info: '美凌格播客 30分钟前开播'
        }, {
          imgUrl: './static/img/yejy.jpg',
          tag: true,
          title: '幼儿教育直播吧',
          subTitle: '婴幼儿教育分享直播',
          info: '中国播客 10分钟前开播'
        }]
      }, {
        titleData: {
          name: '节目',
          more: false
        },
        dataArry: [{
          imgUrl: './static/img/yyl.jpg',
          tag: false,
          title: '一群体验时光的旅行者',
          subTitle: '千古帝都',
          info: '旅行者播客 3小时前更新'
        }, {
          imgUrl: './static/img/yejy.jpg',
          tag: false,
          title: '艺术世界',
          subTitle: '毕加索眼中的世界',
          info: '美术播客 50分钟前更新'
        }]
      }]
    }
  },
  components: {
    Title,
    FooterMedia,
    Header
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
  .x-card-lists{
    padding: 0 20px;
    margin-bottom: 168px;
    > ul{
      > li{
        display: block;
        width: 100%;
        .x-card-subs{
          display: flex;
          width: 100%;
          justify-content: space-between;
          margin-top: 20px;
          &:first-child{
            margin-top: 0;
          }
          .x-card-img{
            width: 150px;
            height: 150px;
            position: relative;
            @include border-radius(3px);
            > img{
              width: 100%;
            }
            > span{
              position: absolute;
              bottom: 18px;
              left: 0;
              color: #ffffff;
              font-size: 16px;
              padding: 5px 10px 5px 10px;
              border-radius: 0px 50px 50px 0px;
              background-color: $primary;
            }
          }
          .x-card-data{
            width: calc(100% - 150px);
            text-align: left;
            padding: 16px 20px;
            > h5{
              margin-top: 10px;
            }
            > span{
              display: block;
              margin-top: 10px;
              font-size: 18px;
              color: #ccc;
            }
          }
        }
      }
    }
  }
}
</style>
