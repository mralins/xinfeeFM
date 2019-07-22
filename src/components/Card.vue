<template>
  <div class="x-card">
    <div class="x-card-img">
      <img :src="cardData.imgUrl" />
      <div class="x-card-tag">
        <span>{{cardData.direct}}</span>
        <a>#{{cardData.tag}}</a>
      </div>
    </div>
    <div class="x-card-title">
      <h4>{{cardData.title}}</h4>
      <h5>{{cardData.subTitle}}</h5>
    </div>
  </div>
</template>

<script>
export default {
  props: ['cardData'],
  data () {
    return {
      // currentLink: this.link
    }
  },
  // watch: {
  //   link (val) {
  //     // value变换赋值给currentValue
  //     this.currentLink = val
  //   }
  // },
  methods: {
    // hrefTo: function (event) {
    //   this.$router.push({ path: this.link })
    //   this.$router.go(0) // sucess 页面刷新
    // }
  }
}
</script>

<style scoped lang="scss">
.x-card{
  width: 100%;
  .x-card-img{
    position: relative;
    display: inline-flex;
    width: 100%;
    @include border-radius(3px);
    overflow: hidden;
    > img{
      width: 100%;
    }
    .x-card-tag{
      position: absolute;
      bottom: 50px;
      left: 0;
      color: #ffffff;
      font-size: 24px;
      > span{
        padding: 5px 22px 5px 16px;
        border-radius: 0px 50px 50px 0px;
        background-color: $primary;
      }
      > a{
        font-weight: bold;
      }
    }
  }
  .x-card-title{
    text-align: left;
    > h5{
      color: #9c9c9c;
      margin-top: 5px;
    }
  }
}
</style>
