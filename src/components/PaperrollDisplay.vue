<template>
  <div ref="wrapper">
    <div class="sm:background-gris background-crema-peaks"></div>
    <input v-model="main.name" @change="saveName()" class="transparent mt-12 text-right w-3/12 ml-20 text-xl" /><span class="text-xl">'s Bathroom</span>
    <div class="main select-none">
      <div class="text-display mt-12 mr-11 ml-11 rounded-lg">
        <div class="arriba text-center text-3xl">{{ abbreviateNumber(+main.totalPoints.toFixed(0)) }} papers</div>
        <div class="arriba text-center text-lg">per second: {{ abbreviateNumber(main.pointsPerSecond, 2) }}</div>
      </div>
      <div class="flex items-center justify-center">
        <img :style="paperrollWidth" draggable="false" id="tunnel" class="paperroll arriba" @click="addPointsPerClick()" :src="main.getSkin()" />
        <span :style="particleStyle" class="particle" :key="i" v-for="i in particleAmount"></span>
      </div>
    </div>
    <div class="wave-large"></div>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";
import { reactive, computed } from "vue";
import { useMainStore } from "../stores/mainStore";
import { abbreviateNumber } from "js-abbreviation-number";

const main = useMainStore();
const { totalPoints, pointsPerSecond } = main;
main.assignCookies();
main.addPointsPerSecond();

function saveName() {
  main.storeCookie("name");
}

let paperrollStyle = reactive({ width: "max-width: 175px" }); //reactive({ width: "max-width: 175px" });
let paperrollWidth = computed(() => {
  return paperrollStyle.width;
});

let animating = false;

const particleAmount = 3;
const particleMovementRange = 20; // Del 1 al 100
let particlesShooting = false;
let particleStyle: Record<string, string> = reactive({
  display: "inline-block",
  top: "35%",
  left: "13%",
  bottom: "0",
  right: "0",
}); //reactive({ width: "max-width: 175px" });
let particlePosition = computed((property: string) => {
  return particleStyle[property];
});

// sleep(t) -> Espera t milisegundos
const sleep = (ms: any) => new Promise((res) => setTimeout(res, ms));

const addPointsPerClick = async () => {
  // Si se está ejecutando la animación no la pisamos
  // Deberia de ser un deadlock? Si. Va a ser un deadlock? No jaja
  if (!animating) {
    animating = true;
    // Animación a pelo
    paperrollStyle.width = "max-width: 166px";
    await sleep(50);
    paperrollStyle.width = "max-width: 175px";
    await sleep(50);
    animating = false;
  }

  if (!particlesShooting) {
    particlesShooting = true;
    // Particulas
    particleStyle.display = "inline-block";
    await sleep(10);
    particleStyle.top = 35 - getRandomInteger(-particleMovementRange, particleMovementRange) + "%";
    particleStyle.left = 13 - getRandomInteger(-particleMovementRange, particleMovementRange) + "%";
    particleStyle.right = getRandomInteger(-particleMovementRange, particleMovementRange) + "%";
    particleStyle.bottom = getRandomInteger(-particleMovementRange, particleMovementRange) + "%";

    await sleep(700);
    particleStyle.top = "35%";
    particleStyle.left = "13%";
    particleStyle.right = "0";
    particleStyle.bottom = "0";

    await sleep(220);

    particlesShooting = false;
  }

  main.addPointsPerClick();
};

const getRandomInteger = (min: number, max: number) => {
  return Math.floor(Math.random() * (max - min)) + min;
};
</script>

<script lang="ts">
export default {};
</script>

<style lang="sass" scoped>

.transparent
  background-color: rgba(0, 0, 0, 0)

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
  height: 2200px

.wave-large
  position: absolute
  z-index: -3
  top: 0
  left: 25%
  width: 30%
  height: 100%
  background-repeat: no-repeat
  background-color: #333333 !important
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
  padding-top: 5em
  z-index: 1000
  align-self: center
  cursor: pointer
  animation: float 6s ease-in-out infinite
  transition: max-width 0.05s

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

$background: #fff8f0
$button: #392f5a
$text: #fff

.particle

  display: inline-block
  position: absolute
  margin: 0
  opacity: 1
  z-index: 200
  border-radius: 400px
  &:nth-child(even)
    background-color: lighten($button, 10%) !important

  display: none
  transition: 0.2s linear


@for $i from 1 through 400
  .particle:nth-child(#{$i})
    $value:#{random(30)}px
    height: $value
    width: $value
    border: #{random(2)}px solid lighten($button, 10%)
    background-color: transparent
</style>
