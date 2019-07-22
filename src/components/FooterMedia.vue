<template>
  <div class="x-footer">
    <div class="x-meida">
      <div class="x-meida-img">
        <img :src="footer.imgUrl" />
      </div>
      <div class="x-media-name">
        <h3>{{footer.title}}</h3>
        <h5>{{footer.subTitle}}</h5>
      </div>
    </div>
    <div class="x-media-btn" @click="changeStart">
      <audio :src="footer.songs" id="musicMp3" autoplay="" controls=""></audio>
      <img :src="isStore ? footer.startIcon : footer.stopIcon" />
    </div>
    <div class="x-media-menu">
      <img src="../assets/img/svg/menu.svg" />
    </div>
    <div class="x-mp3-progress">
      <div class="x-now-progress" :style="{width: progress}"></div>
    </div>
  </div>
</template>

<script>
export default {
  props: ['link'],
  data () {
    return {
      isStore: true,
      progress: '0%',
      footer: {
        title: '一个旅行者和贵宾狗的故事',
        subTitle: '俗事杂谈论坛直播',
        startIcon: './static/img/start.svg',
        stopIcon: './static/img/stop.svg',
        imgUrl: './static/img/header1.jpg',
        songs: './static/music/aixiangsui.mp3'
      }
    }
  },
  mounted: function () {
    document.getElementById('musicMp3').pause()
    this.changeProgress()
  },
  methods: {
    changeStart: function () {
      this.isStore = !this.isStore
      const musicMp3 = document.getElementById('musicMp3')
      if (!this.isStore) {
        musicMp3.play()
      } else {
        musicMp3.pause()
      }
    },
    changeProgress: function () {
      const musicMp3 = document.getElementById('musicMp3')
      const timer = setInterval(() => {
        const numbers = musicMp3.currentTime / musicMp3.duration
        let perNumber = (numbers * 100).toFixed(2)
        if (perNumber >= 100) {
          this.isStore = true
          this.progress = 0
          clearInterval(timer)
        }
        perNumber += '%'
        this.progress = perNumber
      }, 30)
    }
  }
}
</script>

<style scoped lang="scss">
.x-footer{
  position: fixed;
  background-color: $primary;
  width: 100%;
  display: flex;
  justify-content: space-between;
  bottom: 0;
  left: 0;
  padding: 20px;
  .x-meida{
    display: inline-flex;
    .x-meida-img{
      width: 88px;
      height: 88px;
      overflow: hidden;
      @include border-radius(5px);
      > img{
        width:100%;
      }
    }
    .x-media-name{
      padding: 10px 20px;
      color: #ffffff;
      text-align: left;
      > h3{

      }
    }
  }
  .x-media-btn{
    width: 56px;
    height: 56px;
    @include border-radius(50%);
    border: 3px solid #ffffff;
    padding: 10px;
    align-self: center;
    audio{
      display: none;
    }
    > img{
      width: 100%;
    }
    }
    .x-media-menu{
      display: inline-flex;
      width: 43px;
      height: 43px;
      align-self: center;
      > img{
        width: 100%;
      }
    }
  }
  .x-mp3-progress{
    width: 100%;
    position: absolute;
    height: 6px;
    overflow: hidden;
    bottom: 0;
    left: 0;
    .x-now-progress{
      position: relative;
      @extend %transition;
      height: 6px;
      background-color: $orange;
    }
  }
</style>
