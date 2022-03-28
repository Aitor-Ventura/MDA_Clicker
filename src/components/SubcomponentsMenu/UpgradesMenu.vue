<template>
    <h1 class="text-4xl text-center mb-8">Looking for more paper? 😎🤏🤨</h1>

    <div class="grid grid-cols-3 justify-items-center mb-8">
        <div class="cursor-pointer border-solid border-2 border-black rounded-lg" 
             @click="buyUpgrade(upgrade.id, upgrade.price, upgrade.purchased, upgrade.pointsPerSeconds)" 
             v-for="upgrade in main.upgrades" :key="upgrade.id" :id=upgrade.id :name=upgrade.name :price=upgrade.price
             :style="[upgrade.purchased == true ? 'opacity: 0.7' : 'opacity: 1']">
            <img :src="upgrade.srcImage">
            <p class="text-center text-xl">{{ upgrade.name }}</p>
            <p class="text-center" :style="[main.totalPoints >= upgrade.price ? 'color: green' : 'color: red']">{{ abbreviateNumber(upgrade.price, 0) }} points</p>
        </div>
    </div>
</template>

<script setup lang="ts">
import { useMainStore } from '../../stores/mainStore'
import { abbreviateNumber } from "js-abbreviation-number"

const main = useMainStore();

function buyUpgrade(id: string, price: number, purchased: boolean, pointsPerSeconds: number) {
  main.$patch((state) => {
    if (main.totalPoints - price >= 0 && purchased == false) {
      main.totalPoints -= price
      main.pointsPerSecond += pointsPerSeconds

      for (let i = 0; i < main.upgrades.length; i++) {
        if (main.upgrades[i].id == id) {
          main.upgrades[i].purchased = true
        }
      }                        
    }
  })
}

</script>

<script lang="ts">
export default {};
</script>

<style lang="sass" scoped>


</style>