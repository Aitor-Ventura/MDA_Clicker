<template>
  <div class="main background-gris select-none">
    <h1>{{ abbreviateNumber(+main.totalPoints.toFixed(2), 2) }} papers</h1>
    <h2>per second: {{ abbreviateNumber(main.pointsPerSecond, 2) }}</h2>
    <img @click="main.addPointsPerClick" src="../../img/paperroll.png" width="275" height="275" />
  </div>
  <div class="wave"></div>
</template>

<script setup lang="ts">
import { useMainStore } from "../stores/mainStore";
import { abbreviateNumber } from "js-abbreviation-number";

const main = useMainStore();
const { totalPoints, pointsPerSecond } = main;
main.addPointsPerSecond();
</script>

<style lang="sass" scoped>
.main
  width: 30%
  height: 100%

.elements
  display: flex
  flex-direction: column
  flex-wrap: wrap
  align-content: center
  width: 100%

section
  width: 30%
  height: 100vh
  //overflow: hidden
  background-repeat: no-repeat

.wave
  position: absolute
  z-index: -1
  bottom: 0
  left: 25%
  width: 30%
  height: 120vh
  background: url("../assets/svg/layerBlancoAGris2 inverted.svg")

.wave
  animation: animate 15s linear infinite
  z-index: 10
  opacity: 1
  animation-delay: 0s
  bottom: 0
  z-index: -1
  animation-direction: alternate

.background-gris
  background: #b0b0b0
  z-index: -2

.paperroll
  max-width: 175px
  padding-top: 5em

@keyframes animate
  0%
    background-position-y: -100px

  100%
    background-position-y: 0
</style>
