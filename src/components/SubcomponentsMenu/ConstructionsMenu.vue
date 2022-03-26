<template>
  <div>
    <div @click="buyConstruction(item.id, item.price, item.pointsPerSeconds)" class="constructionContainer" v-for="item in main.constructions" :key="item.id" :id=item.id :name=item.name :price=item.price>
      <img :src=item.srcImage width="110" height="110">
      <p>{{ item.name }}</p>
      <p>{{ abbreviateNumber(item.price, 2) }}</p>
      <p>{{ abbreviateNumber(item.purchased, 2) }}</p>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useMainStore } from '../../stores/mainStore'
import { abbreviateNumber } from "js-abbreviation-number"

const main = useMainStore();

function buyConstruction(id: string, price: number, pointsPerSecond: number) {
  main.$patch((state) => {
    if (main.totalPoints - price >= 0){
      main.totalPoints -= price
      main.pointsPerSecond += pointsPerSecond

      for (let i = 0; i < main.constructions.length; i++) {
        if (main.constructions[i].id == id) {
          main.constructions[i].purchased += 1
          main.constructions[i].price = Math.round(main.constructions[i].basePrice * Math.pow(1.15, main.constructions[i].purchased) * 1e2) / 1e2
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