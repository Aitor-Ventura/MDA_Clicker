<template>
  <div>
    <div class="sm:background-gris background-crema-peaks"></div>
    <div class="main select-none">
      <div class="text-display mt-12 mr-11 ml-11">
        <div class="arriba text-center text-3xl">{{ abbreviateNumber(+main.totalPoints.toFixed(0)) }} papers</div>
        <div class="arriba text-center text-lg">per second: {{ abbreviateNumber(main.pointsPerSecond, 2) }}</div>
      </div>
      <img draggable="false" id="tunnel" class="paperroll arriba blob" @click="addPointsPerClick()" src="../assets/constructionsImg/paperroll.png" width="275" height="275" />
    </div>
    <img class="paperroll arriba" @click="main.addPointsPerClick" src="../assets/constructionsImg/paperroll.png" width="275" height="275" />
    <div class="wave-large"></div>
  </div>
</template>

<script setup lang="ts">
import { useMainStore } from "../stores/mainStore";
import { abbreviateNumber } from "js-abbreviation-number";
import { ref } from "vue";
const main = useMainStore();
const { totalPoints, pointsPerSecond } = main;
main.addPointsPerSecond();

function addPointsPerClick() {
  main.addPointsPerClick();
}
</script>

<script lang="ts">
export default {};
</script>

<style lang="sass" scoped>

.main
  height: 100%
  display: flex
  flex-direction: column
  align-content: center
  margin-right: 8em

.text-display
  display: flex
  flex-direction: column
  flex-wrap: wrap
  align-content: center
  justify-items: center
  background: rgba(207, 207, 207, 0.7)

.fondo-crema-polyfill
  position: absolute
  width: 27%
  height: 100%
  background: url("../assets/svg/PaperrollBackgroundPolygridGrey.svg")
  opacity: 40%
  z-index: -12

.background-crema-peaks
  top: 0
  background-size: contain
  aspect-ratio: 700/2160
  position: absolute
  width: 27%
  z-index: -12
  background-repeat: no-repeat
  background: url("../assets/svg/PaperrollBackgroundPeaksGrey.svg") // 900 x 2200


.wave-large
  position: absolute
  z-index: -3
  top: 0
  left: 25%
  width: 30%
  height: 100%
  background-repeat: no-repeat
  background-color: aqua !important
  animation: infinite-down 10s linear infinite
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
  cursor: pointer
  animation: float 6s ease-in-out infinite

.blob
  animation: pulse 2s infinite

@keyframes infinite-down
  0%
    background-position-y: -400px

  100%
    background-position-y: 0

@keyframes float
  0%
    transform: translatey(0px)

  50%
    transform: translatey(-8px)

  100%
    transform: translatey(0px)

@keyframes pulse
  0%
    transform: scale(0.95)

  70%
    transform: scale(1)

  100%
    transform: scale(0.95)
</style>
