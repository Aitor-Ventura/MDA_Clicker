<template>
    <div class="grid grid-cols-3 justify-items-center mb-8 gap-y-8 gap-x-8 mr-8">
        <div class="card shadow-md shadow-neutral-900 cursor-pointer border-solid border-2 border-black rounded-lg flex flex-col items-center justify-center w-full"
             v-for="(achievement, index) in main.achievements" :key="index"
             v-show="achievement.achieved" 
             >
            <!-- <img :src="achievement.srcImage" width="175" loading="lazy" />  DESDE QUE SE TENGA ASSETS DESCOMENTAR LÍNEA -->
            <p class="text-center text-xl">{{ achievement.name }}</p>
        </div>

    </div>
</template>

<script setup lang="ts">
import achievements from "../../assets/achievements";
import { useMainStore } from "../../stores/mainStore";

const main = useMainStore();

unlockAchievement()

function unlockAchievement() { // NUNCA LLAMAR A ESTA FUNCIÓN PORQUE PETA XD
    achievements.forEach(achievement => {
        switch (achievement.name) {
            case "100 papers":
                if (main.maxTotalPoints >= 100 && achievement.achieved == false) {
                    achievement.achieved = true
                }
                break;

            case "1k papers":
                if (main.maxTotalPoints >= 1000 && achievement.achieved == false) {
                    achievement.achieved = true
                }
                break;

            case "10k papers":
                if (main.maxTotalPoints >= 10000 && achievement.achieved == false) {
                    achievement.achieved = true
                }
                break;

            case "100k papers":
                if (main.maxTotalPoints >= 100000 && achievement.achieved == false) {
                    achievement.achieved = true
                }
                break;

            case "100 papers":
                if (main.maxTotalPoints >= 1000000 && achievement.achieved == false) {
                    achievement.achieved = true
                }
                break;

            case "100 lumberjack":
                if (main.constructions[0].purchased >= 100 && achievement.achieved == false) {
                    achievement.achieved = true
                }
                break;

            case "100 shop":
                if (main.constructions[1].purchased >= 100 && achievement.achieved == false) {
                    achievement.achieved = true
                }
                break;

            case "100 shop":
                if (main.constructions[1].purchased >= 100 && achievement.achieved == false) {
                    achievement.achieved = true
                }
                break;

            case "100 factory":
                if (main.constructions[2].purchased >= 100 && achievement.achieved == false) {
                    achievement.achieved = true
                }
                break;

            case "100 rocket":
                if (main.constructions[3].purchased >= 100 && achievement.achieved == false) {
                    achievement.achieved = true
                }
                break;

            case "All upgrades":
                let upgradesBought = 0
                main.upgrades.forEach(upgrade => {
                    if(upgrade.purchased == true) {
                        upgradesBought++
                    }
                    if(upgradesBought == main.upgrades.length) {
                        achievement.achieved = true
                    }
                });
                break;

            case "All constructions":
                let constructionsBought = 0
                main.constructions.forEach(construction => {
                    if(construction.purchased > 0) {
                        constructionsBought++
                    }
                    if(constructionsBought == main.constructions.length) {
                        achievement.achieved = true 
                    }
                })
                break;
        
            default:
                break;
        }
        
    });
        
}

</script>

<script lang="ts">
export default { };
</script>

<style lang="sass" scoped>

</style>