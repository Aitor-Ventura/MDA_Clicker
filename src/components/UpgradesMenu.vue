<template>
  <div>Upgrades

    <Construction class="construction" :name="names[0]" :price="prices[0]" :iGot="n[0]"></Construction>
    <Construction :name="names[1]" :price="prices[1]" :iGot="n[1]"></Construction>
    <Construction :name="names[2]" :price="prices[2]" :iGot="n[2]"></Construction>
    <Construction :name="names[3]" :price="prices[3]" :iGot="n[3]"></Construction>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import Construction from "./UpgradesMenuComponents/Construction.vue"

export default defineComponent({
  components: {
    Construction
  },
  data() {
    return {
      names: ["Lumberjack", "Shop", "Factor", "Rocket"],
      prices: [10, 100, 1000, 15000],
      n: [0, 0, 0, 0],
    }
  }
})
</script>

<style lang="sass" scoped>
div 
  background: aqua
  width: 30%
</style>