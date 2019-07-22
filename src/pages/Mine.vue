<template>
  <div class="x-mine">
    <!--header-->
    <div class="x-header">
      <div class="x-back" @click="back">
        <img src="../assets/img/svg/back.svg" />
      </div>
      <div class="x-title">我</div>
    </div>
    <!--header info-->
    <div class="x-header-info">
      <div class="x-bg" :style="{backgroundImage:'url('+imgUrl+')'}"></div>
      <div class="x-content">
        <div class="x-info">
          <div class="x-header-img">
            <img :src="imgUrl" />
          </div>
          <div class="x-name">
            <h5>我叫李大林<i><img src="../assets/img/svg/certification.svg" /></i></h5>
            <span>初级会员</span>
          </div>
        </div>
        <div class="x-go-next">
          <img src="../assets/img/svg/go.svg" />
        </div>
      </div>
    </div>
    <!--btn groups-->
    <div class="x-btn-groups">
      <div class="x-start-live">
        <Button mes="开始直播" link="/login" :isBlock="true"  :isBorder="false"  />
      </div>
      <div class="x-recorded">
        <Button mes="录播" link="/login" :isBlock="true" :isBorder="true" />
      </div>
    </div>
    <!--list-->
    <div class="x-list">
      <ul>
        <li v-for="(item,index) in listGroup" :key="index">
          <div class="x-icons">
            <img :src="item.icon" />
          </div>
          <div class="x-title">{{item.text}}</div>
          <div
            :class="['x-message',{'is-message': item.id === 'message'},{'is-gold': item.id === 'gold'}]"
            v-if="item.meg !== ''"
          >
            {{item.meg}}
            <div class="x-coins">
              <img :src="coins" />
            </div>
          </div>
        </li>
      </ul>
    </div>
    <FooterMedia />
  </div>
</template>

<script>
import FooterMedia from '@/components/FooterMedia'
import Button from '@/components/Button'
export default {
  name: 'Mine',
  props: ['link'],
  data () {
    return {
      isStore: true,
      imgUrl: './static/img/header_img.jpg',
      coins: './static/img/gold_coins.svg',
      listGroup: [{
        id: 'message',
        text: '我的消息',
        icon: './static/img/message.svg',
        meg: '10'
      }, {
        id: 'gold',
        text: '金币',
        icon: './static/img/gold.svg',
        meg: '100'
      }, {
        id: 'download',
        text: '下载',
        icon: './static/img/download.svg',
        meg: ''
      }, {
        id: 'history',
        text: '历史',
        icon: './static/img/history.svg',
        meg: ''
      }, {
        id: 'box',
        text: '草稿箱',
        icon: './static/img/box.svg',
        meg: ''
      }, {
        id: 'contact',
        text: '联系人',
        icon: './static/img/contact.svg',
        meg: ''
      }]
    }
  },
  components: {
    FooterMedia,
    Button
  },
  mounted: function () {},
  methods: {
    back: function () {
      this.$router.go(-1)
    }
  }
}
</script>

<style scoped lang="scss">
.x-mine{
  overflow: hidden;
  margin-bottom: 168px;
  .x-header{
    overflow: hidden;
    background-color: $primary;
    height: 80px;
    .x-back{
      position: absolute;
      left: 20px;
      top: 20px;
      width: 40px;
      height: 40px;
      > img{
        width: 100%;
      }
    }
    .x-title{
      width: 100%;
      height: 80px;
      font-size: 28px;
      color: #ffffff;
      line-height: 80px;
    }
  }
  .x-header-info{
    overflow: hidden;
    width: 100%;
    height: 200px;
    position: relative;
    .x-bg{
      display: flex;
      width: 100%;
      height: 200px;
      background-repeat: no-repeat;
      background-size: cover;
      background-position: bottom;
      filter:blur(12px);
    }
    .x-content{
      position: absolute;
      top: 0;
      left: 0;
      z-index: 2;
      height: 100%;
      width: 100%;
      display: flex;
      justify-content: space-between;
      .x-info{
        display: inline-flex;
        align-self: center;
        margin-left: 20px;
        .x-header-img{
          width: 120px;
          height: 120px;
          overflow: hidden;
          border-radius: 100%;
          border: 3px solid #ffffff;
          > img{
            width: 100%;
          }
        }
        .x-name{
          align-self: center;
          color: #ffffff;
          margin-left: 20px;
          text-align: left;
          > h5{
            display: inline-flex;
            font-size: 30px;
            > i{
              display: inline-block;
              width: 34px;
              height: 34px;
              overflow: hidden;
              margin-left: 8px;
              align-self: center;
              > img{
                width: 100%;
              }
            }
          }
          > span{
            display: block;
            font-size: 24px;
            margin-top: 6px;
            font-weight: 500;
          }
        }
      }
      .x-go-next{
        align-self: center;
        width: 40px;
        height: 40px;
        overflow: hidden;
        margin-right: 20px;
        > img{
          width: 100%;
        }
      }
    }
  }
  .x-btn-groups{
    display: flex;
    justify-content: space-between;
    width: 100%;
    padding: 30px;
    border-bottom: 8px solid #f1f1f1;
    .x-start-live{
      width: 450px;
    }
    .x-recorded{
      width: 185px;
    }
  }
  .x-list{
    > ul{
      > li{
        display: flex;
        text-align: left;
        width: calc(100% - 60px);
        margin-left: 30px;
        border-bottom: 2px solid #efefef;
        padding: 20px 0;
        position: relative;
        .x-icons{
          width: 28px;
          height: 28px;
          overflow: hidden;
          align-self: center;
          > img{
            width: 100%;
          }
        }
        .x-title{
          padding-left: 20px;
          align-self: center;
          font-size: 28px;
        }
        .x-message{
          position: absolute;
          right: 0;
          top: 50%;
          transform: translateY(-50%);
          display: inline-flex;
          line-height: 32px;
          .x-coins{
            display: none;
            width: 32px;
            height: 32px;
            overflow: hidden;
            align-self: center;
            margin-left: 10px;
            > img{
              width: 100%;
            }
          }
          &.is-message{
            background-color: #fe6922;
            border-radius: 50px;
            color: #fff;
            padding: 3px 14px;
            font-size: 20px;
            font-weight: bold;
          }
          &.is-gold{
            color: #fe6922;
            font-weight: bold;
            font-size: 22px;
            .x-coins{
              display: inline-block;
            }
          }
        }
      }
    }
  }
}
</style>
