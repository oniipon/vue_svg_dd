<template>
  <div class="svg">
    <!--<h1>{{ msg }}</h1>-->
    <svg :height="height" @mousemove="fuga($event)" :width="width">
      <!--<circle id="hogefuga" r="50-->
      <!--" :cx="circleX" :cy="circleY">-->
      <!--</circle>-->
      <ellipse id="hogefuga" :rx="rx" :ry="ry" :cx="circleX" :cy="circleY">
      </ellipse>
    </svg>
    <div class="input-text">
      <label>横 {{ry}} (半径cm)</label>
      <input v-model="ry" type="range" step="3.65">

    </div>

    <div class="input-range">
      <label>縦 {{rx}} (半径cm) </label>
      <input v-model="rx" type="range" step="3.65">
    </div>
  </div>
</template>

<script>
import Hammer from 'hammerjs'

export default {
  name: 'HelloWorld',
  data: function () {
    return {
      msg: 'Welcome to Your Vue.js App',
      width: 300,
      height: 300,
      circleX: 150,
      circleY: 150,
      rx: 50.0,
      ry: 50.0,
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
      const svgPosition = document
        .getElementsByTagName('svg')[0]
        .getBoundingClientRect()
      this.circleX = event.center.x - svgPosition.x
      this.circleY = event.center.y - svgPosition.y
    },
    fuga: function (event) {
      // console.dir(event)
    }
  },
  mounted () {
    const circle = document.getElementById('hogefuga')
    const hammerCircle = new Hammer(circle)
    hammerCircle.on('pan', this.hoge)
    const svg = document.getElementsByTagName('svg')[0]
    const hammerSvg = new Hammer(svg)
    hammerSvg.on('pan', this.move)
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  svg {
    background-color: blue;
    margin: 100px;
    display: flex;
  }

  .input-text{
    flex: 2;
  }

  label{
    margin: 60px;
  }
</style>
