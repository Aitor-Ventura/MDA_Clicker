<template>
  <main>
    <PaperrollDisplay />
    <ItemsMenu />
    <UpgradesMenu />
  </main>
</template>

<script setup lang="ts">
import ItemsMenu from "../components/ItemsMenu.vue";
import UpgradesMenu from "../components/UpgradesMenu.vue";
import PaperrollDisplay from "../components/PaperrollDisplay.vue";
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
