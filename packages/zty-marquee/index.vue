<!-- 跑马灯 -->
<template>
  <div class="marquee_container">
    <div class="marquee_wrap" ref="marquee" :class="{'marquee_start': isStart}">
      <div class="marquee_item">{{itemUp}}</div>
      <div class="marquee_item">{{itemDown}}</div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ztyMarquee', // 跑马灯
  data () {
    return {
      list: [],
      itemUp: '',
      itemDown: '',
      index: 0,
      isStart: false,
      isInit: false,
      orderType: 'order'
    }
  },
  props: {
    // 跑马灯类型： 1.order 顺序； 2.random 随机
    type: {
      default: 'random',
      type: String
    },
    // 数据
    data: {
      default: null,
      type: Array
    },
    // 指定开始的索引，order类型时生效
    start: {
      default: 0,
      type: Number
    },
    // 跑马灯停留速度
    delay: {
      default: 1000,
      type: Number
    }
  },
  created () {
    if (this.data) {
      this.list = this.data
    }
    const list = this.list
    const len = list.length
    if (len < 2) {
      return
    }
    if (this.type === 'random') {
      this.itemUp = list[this.randomInt(0, len - 1)]
      this.getRandom()
    } else {
      const index = this.start
      this.itemUp = list[index]
      this.index++
      this.itemDown = list[this.index]
    }
  },
  mounted () {
    setTimeout(() => {
      const marquee = this.$refs.marquee
      if (this.orderType && this.orderType === 'random') {
        marquee.addEventListener('transitionend', () => {
          this.onTransitionEndRandom()
        })
        marquee.addEventListener('webkitTransitionEnd', () => {
          this.onTransitionEndRandom()
        })
      } else {
        marquee.addEventListener('transitionend', () => {
          this.onTransitionEndOrder()
        })
        marquee.addEventListener('webkitTransitionEnd', () => {
          this.onTransitionEndOrder()
        })
      }
      this.run()
    }, 50)
  },
  methods: {
    // 开始
    run () {
      this.$nextTick(() => {
        if (this.isInit) {
          this.isStart = true
        } else {
          setTimeout(() => {
            this.isStart = true
            this.isInit = true
          }, 1000)
        }
      })
    },
    // 获得随机整数
    randomInt (min, max) {
      return Math.floor(Math.random() * (max - min + 1)) + min
    },
    // 随机
    onTransitionEndRandom () {
      this.itemUp = this.itemDown
      this.getRandom()
      this.isStart = false
      setTimeout(this.run, this.delay)
    },
    // 顺序
    onTransitionEndOrder () {
      this.itemUp = this.itemDown
      const index = this.index
      if (index >= this.list.length - 1) {
        this.index = 0
      } else {
        this.index++
      }
      this.itemDown = this.list[this.index]
      this.isStart = false
      setTimeout(this.run, this.delay)
    },
    // 获取下一个随机值
    getRandom () {
      const list = this.list
      const len = this.list.length
      let index
      const itemUp = this.itemUp
      // 确保随机值和之前的不一致
      while (!index || list[index] === itemUp) {
        index = this.randomInt(0, len - 1)
      }
      this.itemDown = list[index]
    }
  }
}

</script>
<style lang='scss' rel='stylesheet/scss' scoped>
  .marquee_container {
    position: relative;
    top: .24rem;
    left: 50%;
    width: 6.9rem;
    height: .56rem;
    transform: translateX(-50%);
    background: #be392e;
    overflow: hidden;
    border-radius: 23px;
    font-family: 'PingFangSC', 'SourceHanSansCN';

    & .marquee_wrap {
      position: absolute;
      left: 1rem;
      top: 0;
      width: 100%;
      height: 200%;

      &.marquee_start {
        transition: transform 1s;
        -webkit-transition: transform 1s;
        transform: translate3d(0, -50%, 0);
        -webkit-transform: translate3d(0, -50%, 0);
      }

      & .marquee_item {
        line-height: normal;
        display: flex;
        align-items: center;
        justify-content: flex-start;
        font-family: SourceHanSansCN Normal;
        width: 100%;
        height: .56rem;
        font-size: .22rem;
        color: #FFFFFF;
      }
    }
  }

</style>
