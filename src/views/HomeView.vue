<template>
  <main class="w-full h-full flex flex-row items-stretch">
    <div class="w-1/3">
      <PaperrollDisplay></PaperrollDisplay>
    </div>

    <div class="w-2/3">
      <MainMenu></MainMenu>
    </div>
  </main>
</template>

<script setup lang="ts">
import PaperrollDisplay from "../components/PaperrollDisplay.vue";
import MainMenu from "../components/MainMenu.vue";
</script>

<style lang="sass">
// Imported font from Google
@import url('https://fonts.googleapis.com/css2?family=Merriweather:wght@700&display=swap')

body
  font-family: 'Merriweather', serif
  //font-family: Futura, Trebuchet MS, Arial, sans-serif
  margin: 0
</style>
