<template>
  <div>Upgrades
    <Construction v-for="item in items" :key="item.id"
      :id=item.id
      :image=item.srcImage  
      :name=item.name 
      :price=item.price 
      :iGot=item.iGot>
    </Construction>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import Construction from "./UpgradesMenuComponents/Construction.vue"

export default defineComponent({
  components: {
    Construction
  },
  data() {
    return {
      items: [
        {
          id: 1,
          srcImage: "../../img/lumberjack1.png",
          name: "Lumberjack",
          price: 10,
          iGot: 0
        },
        {
          id: 2,
          srcImage: "../../img/shop.png",
          name: "Shop",
          price: 100,
          iGot: 0
        },
        {
          id: 3,
          srcImage: "../../img/factory.png",
          name: "Factory",
          price: 1000,
          iGot: 0
        },
        {
          id: 4,
          srcImage: "../../img/rocket.png",
          name: "Rocket",
          price: 15000,
          iGot: 0
        }
      ]
      /*srcImages: ["../../img/lumberjack1.png", "../../img/shop.png", "../../img/factory.png", "../../img/rocket.png"],
      names: ["Lumberjack", "Shop", "Factory", "Rocket"],
      prices: [10, 100, 1000, 15000],
      n: [0, 0, 0, 0],*/
    }
  }
})
</script>

<style lang="sass" scoped>
div 
  background: aqua
  width: 30%
</style>