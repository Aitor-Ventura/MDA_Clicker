<template>
  <div class="background-gris"></div>
  <div class="main select-none">
    <div class="arriba">{{ abbreviateNumber(+main.totalPoints.toFixed(2), 2) }} papers</div>
    <div class="arriba">per second: {{ abbreviateNumber(main.pointsPerSecond, 2) }}</div>
    <img class="paperroll arriba" @click="main.addPointsPerClick" src="../../img/paperroll.png" width="275" height="275" />
  </div>
  <div class="animation">
    <div class="wave"></div>
    <div class="wave2"></div>
  </div>


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

.background-gris
  position: absolute
  width: 30%
  height: 100%
  background: #b0b0b0
  z-index: -10

.elements
  display: flex
  flex-direction: column
  flex-wrap: wrap
  align-content: center
  justify-items: center
  width: 100%

.wave
  position: absolute
  z-index: -2
  bottom: 0
  left: 20%
  width: 30%
  height: 100%
  background: url("../assets/svg/layerBlancoAGris2 inverted.svg")
  background-repeat: no-repeat

.animation
  animation: animate 5s linear infinite
  opacity: 1
  animation-delay: 0s
  bottom: 0
  animation-direction: alternate

.wave2
  position: absolute
  z-index: -2
  top: 8.7%
  left: 20%
  width: 30%
  height: 100%
  background: url("../assets/svg/layerBlancoAGris2 inverted.svg")
  background-repeat: no-repeat
  transform: scaleY(-1)

  .arriba
  z-index: 10


.paperroll
  max-width: 175px
  padding-top: 5em
  z-index: 1000

@keyframes animate
  0%
    background-position-y: -100px

  100%
    background-position-y: 0

@media (max-height: 800px) 
  .wave2  
    display: none
  

  
</style>
