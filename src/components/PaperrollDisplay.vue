<template>
  <div>
    <h1> {{ main.totalPoints }} pieces of paper rolls</h1>
    <h2> {{ pointsPerSecond }} pieces/s</h2>
  </div>
  <div>
    <img @click="main.addPointsPerClick" src="../../img/paperroll.png" width="275" height="275">
  </div>
</template>

<script setup lang="ts">
import { useMainStore } from '../stores/mainStore'

const main = useMainStore();
const { totalPoints, pointsPerSecond } = main;
main.addPointsPerSecond();

</script>

<style lang="sass" scoped>
div 
  width: 30%
  display: flex
  flex-direction: column
  justify-content: center
  flex-wrap: wrap
  align-content: center

</style>