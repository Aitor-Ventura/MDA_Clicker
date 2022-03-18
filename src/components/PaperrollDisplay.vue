<template>
  <div>
    <h1> {{ totalPoints }} {{}} pieces of paper rolls</h1>
    <img @click="addPointsPerClick()" src="../../img/paperroll.png" width="275" height="275">
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  data() {
    return {
      totalPoints: 0,
      pointsPerClick: 1,
      pointsPerSecond: 1
    };
  },
  mounted: function () {
    this.$nextTick(function() {
      setInterval(() => {this.totalPoints += this.pointsPerSecond}, 1000)
    })
  },
  methods: {
    addPointsPerClick() {
      this.totalPoints += this.pointsPerClick
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
  flex-wrap: wrap
  align-content: center

</style>