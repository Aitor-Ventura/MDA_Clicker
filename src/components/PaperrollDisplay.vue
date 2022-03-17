<template>
  <div>
    <h1> {{ getPointsPerClick() }} pieces of paper rolls</h1>
    <img @click="addPointsPerClick()" src="../../img/paperroll.png" width="275" height="275">
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  data() {
    return {
      pointsPerClick: 0,
      pointsPerSecond: 0,
    };
  },
  methods: {
    addPointsPerClick() {
      this.pointsPerClick++
    },
    getPointsPerClick() {
      return this.pointsPerClick
    }
  }
})

</script>

<style lang="sass" scoped>
div 
  width: 30%
  display: flex
  flex-direction: column
  justify-content: center


</style>