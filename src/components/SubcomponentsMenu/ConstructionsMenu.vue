<template>
  <h1 class="text-4xl text-center mb-8">That's right, come here and spend all your points, baby... 🤑</h1>

  <div>
    <div
      class="constructionContainer card shadow-md shadow-neutral-900 "
      v-for="item in main.constructions"
        :key="item.id"
        :id="item.id"
        :name="item.name"
        :price="item.price"
        :title="details(item.basePointsPerSeconds, item.pointsPerSeconds, item.name, item.purchased)"
      @click="buyConstruction(item.id, item.price, item.pointsPerSeconds, 1)"
    >
      <img :src="item.srcImage" width="110" height="110" loading="lazy" />
      <p class="name">{{ item.name }}</p>
      <p class="price" :style="[main.totalPoints >= item.price ? 'color: green' : 'color: red']">{{ abbreviateNumber(item.price, 2) }}</p>
      <p class="purchased">{{ abbreviateNumber(item.purchased, 2) }}</p>
      <ul>
        <li class="howMany" @click="buyConstruction(item.id, item.price, item.pointsPerSeconds, 10)" :style="[main.totalPoints >= item.price * 10 ? 'color: green' : 'color: red']">x10</li>
        <li class="howMany" @click="buyConstruction(item.id, item.price, item.pointsPerSeconds, 50)" :style="[main.totalPoints >= item.price * 50 ? 'color: green' : 'color: red']">x50</li>
        <li class="howMany" @click="buyConstruction(item.id, item.price, item.pointsPerSeconds, 100)" :style="[main.totalPoints >= item.price * 100 ? 'color: green' : 'color: red']">x100</li>
      </ul>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useMainStore } from "../../stores/mainStore";
import { abbreviateNumber } from "js-abbreviation-number";

const main = useMainStore();

/**
 * Function that allow the user to buy constructions. Then, the price of the construction
 * is modified along with the points per seconds that are generated.
 */
function buyConstruction(id: string, price: number, pointsPerSecond: number, howMany: number) {
  main.$patch((state) => {
    switch (howMany) {
      case 1:
        if (main.totalPoints - price >= 0) {
          main.totalPoints -= price;
          main.pointsPerSecond += pointsPerSecond;

          for (let i = 0; i < main.constructions.length; i++) {
            if (main.constructions[i].id == id) {
              main.constructions[i].purchased += 1;
              main.constructions[i].price = Math.round(main.constructions[i].basePrice * Math.pow(1.15, main.constructions[i].purchased) * 1e2) / 1e2;
            }
          }
        }
        break;
      case 10:
        if (main.totalPoints - price * 10 >= 0) {
          main.totalPoints -= price * 10;
          main.pointsPerSecond += pointsPerSecond * 10;

          for (let i = 0; i < main.constructions.length; i++) {
            if (main.constructions[i].id == id) {
              main.constructions[i].purchased += 10;
              main.constructions[i].price = Math.round(main.constructions[i].basePrice * Math.pow(1.15, main.constructions[i].purchased) * 1e2) / 1e2;
            }
          }
        }
        break;
      case 50:
        if (main.totalPoints - price * 50 >= 0) {
          main.totalPoints -= price * 50;
          main.pointsPerSecond += pointsPerSecond * 50;

          for (let i = 0; i < main.constructions.length; i++) {
            if (main.constructions[i].id == id) {
              main.constructions[i].purchased += 50;
              main.constructions[i].price = Math.round(main.constructions[i].basePrice * Math.pow(1.15, main.constructions[i].purchased) * 1e2) / 1e2;
            }
          }
        }
        break;
      case 100:
        if (main.totalPoints - price * 100 >= 0) {
          main.totalPoints -= price * 100;
          main.pointsPerSecond += pointsPerSecond * 100;

          for (let i = 0; i < main.constructions.length; i++) {
            if (main.constructions[i].id == id) {
              main.constructions[i].purchased += 100;
              main.constructions[i].price = Math.round(main.constructions[i].basePrice * Math.pow(1.15, main.constructions[i].purchased) * 1e2) / 1e2;
            }
          }
        }
        break;
    }
    document.cookie = "pointsPerSecond=" + main.pointsPerSecond;
    main.addPointsPerSecond();
  });
}

/**
 * Function that allow the user to see the points per seconds that generate any construction while hovering it
 */
function details(basePointsPerSeconds: number, pointsPerSeconds: number, name: string, purchased: number) {
  return "Each " + name + " produces " + basePointsPerSeconds + " paper rolls per seconds\n" + "With your " + purchased + " " + name + " bought, they produced " + pointsPerSeconds * purchased + " paper rolls per seconds";
}
</script>

<script lang="ts">
export default { };
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
  width: 110px
  height: 110px

.card
  background-color: #222222

.name
  font-size: 28px

.price, .purchased
  font-size: 22px
  font-weight: bold
  
.howMany
  font-size: 22px
</style>
