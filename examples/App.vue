<template>
  <div id="app">
    <h1>zty learing</h1>
    <!-- <zty-marquee :data="marqueeList"></zty-marquee>
    <div class="box"></div>
    <div class="img">
      <zty-picture :data="tempData" :resolver="dataResolver"></zty-picture>
    </div> -->
    <!-- <zty-picture :data="tempData" :resolver="dataResolver"></zty-picture> -->
    <!-- <div class="zty-valid-btn" @click="toast">
      来个toast
    </div> -->
    <div>
      <zty-valid-btn :time="10"></zty-valid-btn>
    </div>
    <div>
      <zty-valid-btn :time="10" :beforeStart="beforeStart">
        <template slot-scope="prop">
          剩余{{ prop.stamp }}
        </template>
      </zty-valid-btn>
    </div>
     <div>
       <zty-valid-btn :time="10" :beforeStart="beforeStart3">
        <template slot-scope="prop">
          剩余{{ prop.stamp }}
        </template>
      </zty-valid-btn>
     </div>
  </div>
</template>

<script>
import { setRem, fixRem } from '@/utils/index'
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
    },
    toast () {
      this.$ztyToast.toggle('炎黄子孙')
    },
    beforeStart () {
      // eslint-disable-next-line promise/param-names
      return new Promise(function (resolove, reject) {
        setTimeout(() => {
          resolove()
        }, 1000)
      })
    },
    beforeStart2 () {
      // eslint-disable-next-line promise/param-names
      return true
    },
    beforeStart3 () {
      // eslint-disable-next-line promise/param-names
      return false
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
.zty-valid-btn {
  width: 2rem;
  height: .6rem;
  line-height: .6rem;
  font-size: .24rem;
  text-align: center;
  vertical-align: middle;
  margin: 10px auto;
  background: #ccc;
  color: #fff;
  border-radius: .3rem;
}
</style>
