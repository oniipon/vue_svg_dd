<template>
  <div class="svg">
    <!--<h1>{{ msg }}</h1>-->
    <svg :height="height" @mousemove="move($event)" :width="width">
      <circle id="hogefuga" r="50
      " :cx="circleX" :cy="circleY"
      @mouseup="dragFlag=false"
      @mousedown="dragFlag=true">
      </circle>
    </svg>

  </div>
</template>

<script>
import Hammer from 'hammerjs'
export default {
  name: 'HelloWorld',
  data: function () {
    return {
      msg: 'Welcome to Your Vue.js App',
      width: 800,
      height: 800,
      circleX: 300,
      circleY: 300,
      dragFlag: false
    }
  },
  methods: {
    hoge: function (event) {
      if (event.eventType === 4) {
        this.dragFlag = false
      } else {
        this.dragFlag = true
      }
    },
    move: function (event) {
      if (!this.dragFlag) {
        return
      }
      console.dir(event)
      // this.circleX = event.center.x
      // this.circleY = event.center.y
      this.circleX = event.offsetX
      this.circleY = event.offsetY
    },
    fuga: function (event) {
      // console.dir(event)
    }
  },
  mounted () {
    const circle = document.getElementById('hogefuga')
    const hammerCircle = new Hammer(circle)
    // hammerCircle.on('pan', this.hoge)
    const svg = document.getElementsByTagName('svg')[0]
    const hammerSvg = new Hammer(svg)
    // hammerSvg.on('pan', this.move)
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  svg {
    background-color: blue;
  }
</style>
