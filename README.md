# zty-comp
My Vue Components Lib

# components
basic h5 rem layout
## zty-marquee
marquee components - 文字跑马灯

### prop
- type: ["order" |"random"]
- data: Array
- start: Number 指定开始的索引，order类型时生效
- delay: Number 跑马灯停留速度

## zty-picture
picture components - 图片

### prop
- data: [Object, String] 图片数据
- resolver: Function data的处理函数

## zty-toast 消息
$ztyToast: a toast

```javascript
this.$ztyToast.toggle('toast') // hide automatic
this.$ztyToast.show('toast')
this.$ztyToast.hide()
```

## zty-valid-btn 验证码按钮
- time: Number 倒计时时间
- beforeStart: Function 倒计时开始前的钩子函数，支持返回promise 或 布尔值
- finish: Function 倒计时结束的钩子函数
- defaultText: String 倒计时未开始的文本内容
      
# use

```javascript
import "zty-comp/lib/ztyComp.css"
import ztyComp from "zty-comp"
Vue.use(ztyComp)
```