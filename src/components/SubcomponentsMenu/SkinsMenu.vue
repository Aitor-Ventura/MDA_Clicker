<template>
    <div class="grid grid-cols-3 justify-items-center mb-8 gap-y-8 gap-x-8 mr-8">
        <div class="card shadow-md shadow-neutral-900 cursor-pointer border-solid border-2 border-black rounded-lg flex flex-col items-center justify-center w-full"
             v-for="(skin, index) in main.skins" :key="index"
             @click="selectSkin(skin)">
             <img :src="skin.srcImage" width="175" loading="lazy">
             <p class="text-center text-xl" v-if="!skin.available">You need to achieve {{ skin.minPoints }} paper rolls</p>
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
img, p
  padding: 1em

.card
  background-color: #222222

</style>