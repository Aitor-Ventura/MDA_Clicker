<template>
  <div class="main bg-red-500">
    <h1> {{ main.totalPoints.toLocaleString('es-ES', {maximumFractionDigits: 2}) }} papers </h1>
    <h2> per second: {{ main.pointsPerSecond.toLocaleString('es-ES', {maximumFractionDigits: 2}) }}</h2>
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
.main 
  width: 30%
  display: flex
  flex-direction: column
  flex-wrap: wrap
  align-content: center

.p1 
  padding:1 em  

</style>
