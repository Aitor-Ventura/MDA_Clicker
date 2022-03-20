<template>
  <div>
    <div @click="buyConstruction(item.id, item.price, item.pointsPerSeconds)" class="constructionContainer" v-for="item in main.constructions" :key="item.id" :id=item.id :name=item.name :price=item.price>
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

function buyConstruction(id: string, price: number, pointsPerSecond: number) {
  main.$patch((state) => {
    if (main.totalPoints - price >= 0){
      main.totalPoints -= price
      main.pointsPerSecond += pointsPerSecond

      for (let i = 0; i < main.constructions.length; i++) {
        if (main.constructions[i].id == id) {
          main.constructions[i].purchased += 1
        }
      }
    }
  })
}

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