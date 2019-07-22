<template>
  <div class="x-card-list">
    <div class="x-card-img">
      <img :src="cardData.imgUrl" />
      <div class="x-card-tag">
        <span>{{cardData.amount}}次播放</span>
      </div>
    </div>
    <div class="x-card-title">
      <h4>{{cardData.title}}</h4>
    </div>
  </div>
</template>

<script>
export default {
  props: ['cardData'],
  data () {
    return {
    }
  },
  methods: {
    // hrefTo: function (event) {
    //   this.$router.push({ path: this.link })
    //   this.$router.go(0) // sucess 页面刷新
    // }
  }
}
</script>

<style scoped lang="scss">
.x-card-list{
  width: 100%;
  .x-card-img{
    position: relative;
    display: inline-flex;
    width: 100%;
    @include border-radius(4px);
    overflow: hidden;
    > img{
      width: 100%;
    }
    .x-card-tag{
      position: absolute;
      left: 10px;
      bottom: 20px;
      color: #ffffff;
      font-size: 20px;
    }
  }
  .x-card-title{
    text-align: left;
  }
}
</style>
