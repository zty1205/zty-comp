<template>
  <div id="app">
    <h1>zty learing</h1>
    <zty-marquee :data="marqueeList"></zty-marquee>
    <div class="box"></div>
    <div class="img">
      <Picture :data="tempData" :resolver="dataResolver"></Picture>
    </div>
    <Picture :data="tempData" :resolver="dataResolver"></Picture>
  </div>
</template>

<script>
import { setRem, fixRem } from '../utils'
setRem(750)
export default {
  name: 'App',
  data () {
    return {
      marqueeList: [
        '奕朵妈妈 成功推荐18人',
        '暖夏 成功推荐8人',
        '天天麻麻 成功推荐14人',
        '恭喜“嘟嘟妈妈”抽中20元品尝装',
        '恭喜“小公主佩奇”抽中109元护肤油',
        '恭喜“小妮妮麻麻”抽中88元优惠券'
      ],
      tempData: {
        width: 190,
        height: 250,
        src: require('./assets/img/190_250.jpg')
      }
    }
  },
  mounted () {
    fixRem()
  },
  methods: {
    dataResolver (data) {
      data.name = 'hh'
      return data
    }
  }
}
</script>

<style lang="scss">
@import url('./assets/css/common.css');
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  overflow-x: hidden;
  min-height: 100vh;
}
h1 {
  margin-top: 40px;
  margin-bottom: 20px;
  font-size: .4rem;
}
.box {
  margin: .4rem auto;
  width: 100%;
  height: .4rem;
}
.img {
  width: 3.8rem;
  margin: 0 auto;
}
</style>
