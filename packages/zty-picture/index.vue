<template>
  <div
    class="image-container"
    v-on="$listeners"
    :style="{
      paddingTop: (pictureData.height / pictureData.width) * 100 + '%'
    }"
  >
    <img class="image-content" :src="pictureData.src" />
  </div>
</template>

<script>
export default {
  name: 'ztyPicture',
  props: {
    data: {
      type: [Object, String],
      default: function () {
        return null
      }
    },
    lazy: {
      type: Boolean,
      default: false
    },
    resolver: {
      type: Function,
      default: null
    }
  },
  computed: {
    pictureData () {
      return this.resolver ? this.resolver(this.data) : this.data
    }
  }
}
</script>

<style scoped lang="scss">
.image-container {
  position: relative;
  overflow: hidden;
}
.image-content {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  min-height: 100%;
}
</style>
