<template>
  <h1 class="text-4xl text-center mb-8">Looking for more paper? 😎🤏🤨</h1>

  <div class="grid grid-cols-3 justify-items-center mb-8 gap-y-8 gap-x-8 mr-8">
    <div
      class="card shadow-md shadow-neutral-900 cursor-pointer border-solid border-2 border-black rounded-lg flex flex-col items-center justify-center w-full"
      @click="buyUpgrade(upgrade.id, upgrade.type, upgrade.price, upgrade.purchased, upgrade.pointsPerSeconds)"
      v-for="upgrade in main.upgrades"
      :key="upgrade.id"
      :id="upgrade.id"
      :name="upgrade.name"
      :price="upgrade.price"
      :style="[upgrade.purchased == true ? 'opacity: 0.4' : 'opacity: 1']"
      :title="details(upgrade.name, upgrade.pointsPerSeconds, upgrade.type)" 
    >
      <img :src="upgrade.srcImage" width="175" loading="lazy" />
      <p class="text-center text-xl">{{ upgrade.name }}</p>
      <p class="text-center" :style="[main.totalPoints >= upgrade.price ? 'color: green' : 'color: red']">{{ abbreviateNumber(upgrade.price, 0) }} points</p>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useMainStore } from "../../stores/mainStore";
import { abbreviateNumber } from "js-abbreviation-number";

const main = useMainStore();
/**
 * Function that allow the user to buy upgrades. Then, the points per seconds are increased.
 */
function buyUpgrade(id: string, type: string, price: number, purchased: boolean, pointsPerSeconds: number) {
  main.$patch((state) => {
    if (main.totalPoints - price >= 0 && purchased == false) {
      switch (type) {
        case "Basic":
          main.pointsPerSecond += pointsPerSeconds;
          break;
        case "Lumberjack":
          main.constructions[0].pointsPerSeconds += pointsPerSeconds;
          break;
        case "Shop":
          main.constructions[1].pointsPerSeconds += pointsPerSeconds;
          break;
        case "Van":
          main.constructions[2].pointsPerSeconds += pointsPerSeconds;
          break;
        case "ThemePark":
          main.constructions[3].pointsPerSeconds += pointsPerSeconds;
          break;
        case "Factory":
          main.constructions[4].pointsPerSeconds += pointsPerSeconds;
          break;
        case "Rocket":
          main.constructions[5].pointsPerSeconds += pointsPerSeconds;
          break;
        case "UFO":
          main.constructions[6].pointsPerSeconds += pointsPerSeconds;
          break;
      }
      main.totalPoints -= price;

      for (let i = 0; i < main.upgrades.length; i++) {
        if (main.upgrades[i].id == id) {
          main.upgrades[i].purchased = true;
        }
      }
      
      main.addPointsPerSecond()
      main.storeCookie("pointsPerSecond")
    }
  });
}

/**
 * Function that allow the user to see the details of any upgrade while hovering it
 */

function details(name: string, pointsPerSecond: number, type: string) {
  return name + " will increase the points per seconds obtained by " + type + " by " + pointsPerSecond

}
</script>

<script lang="ts">
export default {};
</script>

<style lang="sass" scoped>
img, p
  padding: 1em

.card
  background-color: #222222
  &:hover
    animation: colorPulse 3s infinite

@keyframes colorPulse
  0%
    background-color: #222222

  50%
    background-color: #2A2A2A

  100%
    background-color: #222222
</style>
