<template>
  <main>
    <PaperrollDisplay></PaperrollDisplay>
    <ItemsMenu />
    <MainMenu></MainMenu>
  </main>
</template>

<script setup lang="ts">
import ItemsMenu from "../components/ItemsMenu.vue";
import PaperrollDisplay from "../components/PaperrollDisplay.vue";
import MainMenu from "../components/MainMenu.vue";
</script>

<style lang="sass">
main
  display: flex
  flex-direction: row
  align-items: stretch
  height: 100vh
body
  margin: 0
</style>
