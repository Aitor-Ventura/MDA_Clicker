<template>
  <div class="fondo-crema"></div>
  <div class="main select-none">
    <div class="text-display mt-12">
      <div class="arriba text-center text-3xl">{{ abbreviateNumber(+main.totalPoints.toFixed(2), 2) }} papers</div>
      <div class="arriba text-center text-lg">per second: {{ abbreviateNumber(main.pointsPerSecond, 2) }}</div>
    </div>
    <img class="paperroll arriba" @click="main.addPointsPerClick" src="/src/assets/png/paperroll.png" width="275" height="275" />
  </div>
  <div class="wave-large"></div>
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
  display: flex
  flex-direction: column
  flex-wrap: wrap
  align-content: center
  justify-items: center

.text-display
  display: flex
  flex-direction: column
  flex-wrap: wrap
  align-content: center
  justify-items: center
  width: 100%
  background: rgba(207, 207, 207, 0.7)

.fondo-crema
  position: absolute
  width: 28%
  height: 100%
  background: url("../assets/svg/PaperrollBackgroundPolygridGrey.svg")
  z-index: -10
  background-repeat: no-repeat

.background-gris
  position: absolute
  width: 30%
  height: 100%
  //background: #b0b0b0
  z-index: -10

.wave
  position: absolute
  z-index: 12
  top: 0
  left: -3.5%
  width: 30%
  height: 100%
  background-repeat: no-repeat
  animation: animate 10s linear infinite
  opacity: 1
  animation-delay: 0s
  animation-direction: alternate
  @media screen and (max-height: 1800px)
    background: url("../assets/svg/NormalWavePaperroll1.svg") // 900 x 2200
    background-repeat: no-repeat
  @media screen and (min-height: 1800px)
    background: url("../assets/svg/NormalWavePaperroll2.svg") // 900 x 4000
    background-repeat: no-repeat


.wave-large
  position: absolute
  z-index: 1
  top: 0
  left: 26%
  width: 30%
  height: 100%
  background-repeat: no-repeat
  animation: animate 10s linear infinite
  opacity: 1
  animation-delay: 0s
  bottom: 0
  animation-direction: alternate
  @media screen and (max-height: 1800px)
    background: url("../assets/svg/LargeWavePaperroll1.svg") // 900 x 2200
    background-repeat: no-repeat
  @media screen and (min-height: 1800px)
    background: url("../assets/svg/LargeWavePaperroll2.svg") // 900 x 4000
    background-repeat: no-repeat


.arriba
  z-index: 10

.paperroll
  max-width: 175px
  padding-top: 5em
  z-index: 1000
  align-self: center

@keyframes animate
  0%
    background-position-y: -400px

  100%
    background-position-y: 0
</style>
