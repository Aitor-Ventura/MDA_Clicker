<template>
  <div>
    <div class="sm:background-gris background-crema-peaks"></div>
    <div class="main select-none">
      <label class="name mt-12 mr-11 ml-11 rounded-lg text-lg">
        <input v-model="main.name" @change="saveName()" class="transparent" />
        <span class="text-lg">'s Bathroom</span>
      </label>
      <div class="text-display mt-6 mr-11 ml-11 rounded-lg">
        <div class="arriba text-center text-3xl">{{ abbreviateNumber(+main.totalPoints.toFixed(0)) }} papers</div>
        <div class="arriba text-center text-lg">per second: {{ abbreviateNumber(main.pointsPerSecond, 2) }}</div>
      </div>
      <div class="paperrollContainer mt-8 flex items-center justify-center">
        <img :style="paperrollWidth" draggable="false" id="tunnel" class="paperroll arriba" @click="addPointsPerClick()" :src="main.getSkin()" />
        <span class="particle" :key="i" v-for="i in particleList" :ref="(el) => (particleRefs[i] = el)"></span>
      </div>
      <div class="text-display mt-24 mr-11 ml-11 rounded-lg">
        <div class="arriba text-center text-3xl">{{ comboMeter.value.toFixed(0) }}</div>
        <div class="arriba text-center text-lg">multiplier: ×{{ comboMeter.multiplier.toFixed(2) }}</div>
      </div>
    </div>
    <div class="wave-large"></div>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from "vue";
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

let particleAmount = 50;
let particleMovementRange = 30; // Del 1 al 100
let particlesShooting = false;
let particleAnimationTime = 0.45;
let particleAnimationMovement = "ease"; // Linear | ease-in | ease-out | bezier

let comboMeter: any = reactive({ value: 0, multiplier: 1.0 });

let comboTimerCounting = false;
let secondCounter: any = null;
let time = 0;
let comboReducer = 0;

let particleList = reactive(
  computed(() => {
    const arr = [];
    for (let i = 0; i < particleAmount; i++) {
      arr.push(i);
    }
    return arr;
  })
);

function toggleComboTimer() {
  if (comboTimerCounting) {
    clearInterval(secondCounter);
  } else {
    secondCounter = setInterval(() => {
      time = time + 1;
      if (time === 6) comboReducer = 1;
      if (time > 6) {
        comboReducer *= 1 + time / 100;
      }
      if (comboMeter.value < comboReducer) {
        clearInterval(secondCounter);
        comboMeter.value = 0;
        comboMeter.multiplier = 1;
      } else {
        comboMeter.value -= comboReducer;
        comboMeter.multiplier = 1 + (comboMeter.value * 150) / 10000;
      }
    }, 1000);
  }
  comboTimerCounting = !comboTimerCounting;
}

let particleRefs: any = reactive(ref([]));
defineExpose({ particleRefs });

// sleep(t) -> Espera t milisegundos
const sleep = (ms: any) => new Promise((res) => setTimeout(res, ms));

const addPointsPerClick = async () => {
  console.log(particleRefs.value);
  time = 0;
  comboReducer = 0;
  // Encendemos timer combo
  if (!comboTimerCounting) toggleComboTimer();

  if (comboMeter.value < 100) {
    comboMeter.value++;
    particleAmount = 50 * (comboMeter.value / 100);
    particleMovementRange = 60 * (comboMeter.value / 100);
    particleAnimationTime = 0.9 - 0.6 * (comboMeter.value / 100);
  }

  comboMeter.multiplier = 1 + (comboMeter.value * 150) / 10000;
  if (!animating) {
    animating = true;
    // Animación a pelo
    paperrollStyle.width = "max-width: 166px";
    await sleep(50);
    paperrollStyle.width = "max-width: 175px";
    await sleep(50);
    animating = false;
  }

  console.log("Particle refs 1: " + particleRefs.value["1"]);
  console.log("Particle refs length: " + particleRefs.value.length);

  if (!particlesShooting) {
    particlesShooting = true;

    // Inicializacón particulas
    for (let i = 1; i <= particleAmount; i++) {
      particleRefs.value[i].style.display = "inline-block";
      particleRefs.value[i].style.transition = particleAnimationTime + "s " + particleAnimationMovement;
    }

    // Explosión particulas
    await sleep(50);
    for (let i = 1; i <= particleAmount; i++) {
      particleRefs.value[i].style.top = 40 - getRandomInteger(-particleMovementRange, particleMovementRange) + "%";
      particleRefs.value[i].style.left = 13 - getRandomInteger(-particleMovementRange, particleMovementRange) + "%";
      particleRefs.value[i].style.right = getRandomInteger(-particleMovementRange, particleMovementRange) + "%";
      particleRefs.value[i].style.bottom = getRandomInteger(-particleMovementRange, particleMovementRange) + "%";
    }

    await sleep(particleAnimationTime * 1000 + 20);
    // Recogida particulas
    for (let i = 1; i <= particleAmount; i++) {
      particleRefs.value[i].style.display = "none";
      particleRefs.value[i].style.top = "35%";
      particleRefs.value[i].style.left = "13%";
      particleRefs.value[i].style.right = 0;
      particleRefs.value[i].style.bottom = 0;
    }

    await sleep(particleAnimationTime * 1000 + 20);
    particlesShooting = false;
  }

  main.addPointsPerClick(comboMeter.multiplier);
};

const getRandomInteger = (min: number, max: number) => {
  return Math.floor(Math.random() * (max - min)) + min;
};
</script>

<script lang="ts">
export default {};
</script>

<style lang="sass" scoped>

.paperrollContainer
  min-height: 40vh

.name
  display: flex
  flex-direction: row
  flex-wrap: wrap
  align-content: center
  justify-items: center
  background: rgba(207, 207, 207, 0.7)

input
  max-width: 50%
  text-align: right

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
  align-self: flex-start
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

$particleColor: #fff

.particle
  display: none
  top: 35%
  left: 13%
  bottom: 0
  right: 0
  position: absolute
  margin: 0
  opacity: 1
  z-index: 200
  border-radius: 400px
  &:nth-child(even)
    background-color: lighten($particleColor, 10%) !important

@for $i from 1 through 400
  .particle:nth-child(#{$i})
    $value:#{random(30)}px
    height: $value
    width: $value
    border: #{random(2)}px solid lighten($particleColor, 10%)
    background-color: transparent
</style>
