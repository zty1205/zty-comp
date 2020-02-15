<template>
  <div id="app">
    <h1>zty learing</h1>
    <zty-marquee :data="marqueeList"></zty-marquee>
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
      ]
    }
  },
  mounted () {
    fixRem()
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
</style>
