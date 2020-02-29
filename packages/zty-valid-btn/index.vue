<template>
  <button class="code-btn" @click="count">
    <span v-if="end">
      {{ defaultText }}
    </span>
    <slot v-else :stamp="stamp">
      {{stamp}}s
    </slot>
  </button>
</template>

<script>
import { isFunction, isPromise } from '@/utils/index'
const regex = /^([1-9]\d*|0)$/
export default {
  name: 'ztyValidBtn',
  props: {
    time: {
      type: Number,
      default: 10,
      validator: function (value) { // 正整数
        return regex.test(value)
      }
    },
    beforeStart: {
      type: Function
    },
    finish: {
      type: Function
    },
    defaultText: {
      type: String,
      default: '获取验证码'
    }
  },
  data () {
    return {
      stamp: 0,
      end: true,
      locked: false
    }
  },
  created () {
    this.stamp = this.time
  },
  methods: {
    count () {
      if (!this.time || !regex.test(this.time)) {
        this.finish && this.finish()
        return
      }
      if (this.locked) {
        return
      }
      this.locked = true
      this.stamp = this.time
      if (this.beforeStart && isFunction(this.beforeStart)) {
        const beforeStart = this.beforeStart()
        if (isPromise(beforeStart)) {
          this.beforeStart().then(() => {
            this.startCount()
          })
        } else if (beforeStart) {
          this.startCount()
        } else {
          this.locked = false
        }
      } else {
        this.startCount()
      }
    },
    startCount () {
      this.end = false
      let t = this.time
      const timer = setInterval(() => {
        t--
        if (t > -1) {
          this.stamp--
        } else {
          clearInterval(timer)
          this.end = true
          this.finish && isFunction(this.finish) && this.finish()
          this.locked = false
        }
      }, 1000)
    }
  }
}
</script>

<style lang="scss" scoped>
.code-btn {
  padding: .16rem .2rem;
  min-width: 1.8rem;
  background: #e62d28;
  color: white;
  font-size: .28rem;
  border-radius: .2rem;
  font-family: PingFangSC-Regular, sans-serif;
  -webkit-tap-highlight-color: transparent;
  outline: none;
  -webkit-appearance: none;
  border: none;
}
</style>
