<template>
    <!--<div class="grid grid-cols-3 justify-items-center mb-8 gap-y-8">
        <div class="cursor-pointer border-solid border-2 border-black rounded-lg"
             @click="buyUpgrade(upgrade.id, upgrade.type, upgrade.price, upgrade.purchased, upgrade.pointsPerSeconds)" 
             v-for="upgrade in main.upgrades" :key="upgrade.id" :id=upgrade.id :name=upgrade.name :price=upgrade.price
             :style="[upgrade.purchased == true ? 'opacity: 0.7' : 'opacity: 1']">
            <img :src="upgrade.srcImage" loading="lazy">
            <p class="text-center text-xl">{{ upgrade.name }}</p>
            <p class="text-center" :style="[main.totalPoints >= upgrade.price ? 'color: green' : 'color: red']">{{ abbreviateNumber(upgrade.price, 0) }} points</p>
        </div>
    </div>-->
    <div class="grid grid-cols-3 justify-items-center mb-8 gap-y-8">
        <div class="cursor-pointer border-solid border-2 border-black rounded-lg"
             v-for="(skin, index) in main.skins" :key="index"
             @click="selectSkin(skin)">
             <img :src="skin.srcImage" width="175" loading="lazy">
        </div>

    </div>

</template>

<script setup lang="ts">
import { useMainStore } from "../../stores/mainStore";
const main = useMainStore();

function selectSkin(skin: any) {
    if (main.totalPoints >= skin.minPoints) {
        for (let i = 0; i < main.skins.length; i++) {
            if (skin.id == main.skins[i].id) {
                skin.available = true
                main.setSkin(skin.srcImage)
            }
        }
    }
}
</script>

<script lang="ts">
export default { };
</script>

<style lang="sass" scoped>
img
  padding: 1em
</style>