<template>
  <button
    :class="['x-btn-common',{'is-block': isBlock},{'is-border': isBorder}]"
    @click="hrefTo"
  >
    {{mes}}
  </button>
</template>

<script>
export default {
  props: ['mes', 'link', 'isBlock', 'isBorder'],
  data () {
    return {
      currentLink: this.link
    }
  },
  watch: {
    link (val) {
      // value变换赋值给currentValue
      this.currentLink = val
    }
  },
  methods: {
    hrefTo: function (event) {
      this.$router.push({ path: this.link })
      this.$router.go(0) // sucess 页面刷新
    }
  }
}
</script>

<style scoped lang="scss">
button.x-btn-common{
  background-color: $orange;
  @include border-radius(3px);
  border: none;
  outline: none;
  padding: 8px 60px;
  font-size: 28px;
  box-sizing: border-box;
  color: #fff;
  border: 3px solid transparent;
  &.is-block{
    width: 100%;
    padding: 16px 0;
  }
  &.is-border{
    border: 3px solid $orange;
    background-color: transparent;
    color: $orange;
    @include border-radius(5px);
  }
}
</style>
