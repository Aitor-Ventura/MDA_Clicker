<template>
  <h1 class="text-4xl text-center mb-8">That's right, come here and spend all your points, baby... 🤑</h1>

  <div>
    <div class="constructionContainer" 
         @click="buyConstruction(item.id, item.price, item.pointsPerSeconds)" 
         v-for="(item,index) in main.constructions" :key="item.id" :id=item.id :name=item.name :price=item.price>
      <img :src=main.getImages()[index] width="110" height="110">
      <p class="name">{{ item.name }}</p>
      <p class="price" :style="[main.totalPoints >= item.price ? 'color: green' : 'color: red']">{{ abbreviateNumber(item.price, 2) }}</p>
      <p class="purchased">{{ abbreviateNumber(item.purchased, 2) }}</p>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useMainStore } from '../../stores/mainStore'
import { abbreviateNumber } from "js-abbreviation-number"

const main = useMainStore();

/**
 * Function that allow the user to buy constructions. Then, the price of the construction
 * is modified along with the points per seconds that are generated.
 */
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
  border: 2px solid black
  border-radius: 8px
  margin-bottom: 1em
  margin-right: 1em
  margin-left: 1em
  cursor: pointer
 
.constructionContainer img
  padding: .5em

.name
  font-size: 28px

.price, .purchased
  font-size: 22px
  font-weight: bold
</style>