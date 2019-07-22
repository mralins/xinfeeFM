<template>
  <swiper :options="swiperOption">
    <swiper-slide v-for="(item,index) in carouselData" :key="index">
      <img :src="item.imgUrl" />
    </swiper-slide>
    <!-- Optional controls -->
    <div class="swiper-pagination"  slot="pagination"></div>
  </swiper>
</template>

<script>
import { swiper, swiperSlide } from 'vue-awesome-swiper'
export default {
  props: ['carouselData'],
  data () {
    return {
      swiperOption: {
        autoplay: true,
        slidesPerView: 'auto',
        centeredSlides: true,
        spaceBetween: 0,
        loop: true,
        speed: 600,
        pagination: {
          el: '.swiper-pagination'
        }
      }
    }
  },
  components: {
    swiper,
    swiperSlide
  },
  mounted: function () {
    // this.init()
  },
  methods: {
    // init () {
    //   console.log(this.carouselData)
    // },
    // isImgUrl: function () {
    //   console.log(this.carouselData)
    //   // return this.carouselData
    // }
  }
}
</script>

<style scoped lang="scss">
button.x-common{
  width: 100%;
  background-color: #f77321;
  @include border-radius(3px);
  border: none;
  outline: none;
  width: 100%;
  padding: 16px 0;
  font-size: 28px;
  color: #fff;
  margin-top: 28px;
}
</style>
