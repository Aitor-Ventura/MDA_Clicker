<template>
  <div>
    <div class="constructionContainer" v-for="item in main.producers" :key="item.id" :id=item.id :name=item.name :price=item.price>
      <img :src=item.srcImage width="110" height="110">
      <p>{{ item.name }}</p>
      <p>{{ item.price }}</p>
      <p>{{ item.purchased }}</p>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useMainStore } from '../stores/mainStore'

const main = useMainStore();
const { totalPoints, pointsPerSecond } = main;

</script>

<style lang="sass" scoped>
div 
  background: aqua
  width: 30%

.constructionContainer
    width: auto
    display: flex
    align-items: center
    justify-content: space-around
    border: 5px solid black
    margin: 1em 1em
 
.constructionContainer img
    padding: .5em



</style>