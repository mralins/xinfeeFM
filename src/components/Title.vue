<template>
  <div class="x-titile">
    <div class="x-name">{{titleData.name}}</div>
    <div v-if="titleData.more" class="x-more" @click="linkTo(titleData.path)">
      <span>更多<img src="../assets/img/svg/right_arrow.svg" /></span>
    </div>
  </div>
</template>

<script>
export default {
  props: ['titleData'],
  data () {
    return {
      // currentLink: this.link
    }
  },
  methods: {
    linkTo: function (link) {
      this.$router.push({ path: link })
      // this.$router.go(0) // sucess 页面刷新
    }
  }
}
</script>

<style scoped lang="scss">
.x-titile{
  display: flex;
  justify-content: space-between;
  padding: 20px 0;
  .x-name{
    position: relative;
    padding-left: 34px;
    font-size: 26px;
    &:before{
      content: '';
      position: absolute;
      left: 0;
      top: 50%;
      width: 8px;
      height: 24px;
      background-color: $orange;
      @include translate(0, -50%);
    }
  }
  .x-more{
    font-size: 26px;
    > span{
      display: flex;
      img{
        width: 40px;
      }
    }
  }
}
</style>
