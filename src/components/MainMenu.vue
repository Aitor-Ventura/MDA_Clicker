<template>
  <div v-for="(component, index) in visibleComponent" :key="index" class="h-screen pt-4">
    <component :is="component.name"></component>

    <div class="w-full flex justify-end">
      <button class="mr-4" @click="nextMenu(component.position)">Next</button>
    </div>
  </div>
</template>

<script setup lang="ts">
import { thisTypeAnnotation } from "@babel/types";
import ConstructionsMenu from "./SubcomponentsMenu/ConstructionsMenu.vue";
import Probando from "./SubcomponentsMenu/Probando.vue";
import Testing from "./SubcomponentsMenu/Testing.vue";

</script>

<script lang="ts">
export default {
  computed: {
    /**
     * Filter all components to find out which ones are visible (Only one should be visible)
     * This will allow us to display the corresponding menu
     */
    visibleComponent: function() { 
      return this.components.filter(i => i.visible === true)
    }
  },
  data() {
    return {
      components: [
        {
          name: "ConstructionsMenu",
          visible: true,
          position: 0
        },
        { // THIS OBJECT CAN BE REMOVED OR IT NAME CAN BE MODIFIED TO REUSE IT BUT DON'T FORGET TO MODIFY IT CORRESPONDING FILE NAME
          name: "Probando",
          visible: false,
          position: 1
        },
        {
          // THIS OBJECT CAN BE REMOVED OR IT NAME CAN BE MODIFIED TO REUSE IT BUT DON'T FORGET TO MODIFY IT CORRESPONDING FILE NAME
          name: "Testing",
          visible: false,
          position: 2
        }
      ]
    }
  },
  components: {
    ConstructionsMenu, Probando, Testing
  },
  methods: {
    /**
     * Makes the actual menu hidden and the following menu visible
     */
    nextMenu(pos: number): void {
      this.components[pos].visible = false

      if (pos++ < this.components.length - 1) {
        this.components[pos++].visible = true
      } else {
        // If the actual component is the last one in the array, then the next menu that should be
        // visible is the starter one
        this.components[0].visible = true
      }
    }
  }
};
</script>

<style lang="sass" scoped>
div 
  background: aqua
  
button 
  display: inline-block
  padding: 15px 25px
  font-size: 24px
  cursor: pointer
  text-align: center
  text-decoration: none
  outline: none
  color: #fff
  background-color: #4CAF50
  border: none
  border-radius: 15px
  box-shadow: 0 9px #999

button:hover
  background-color: #3e8e41

button:active 
  background-color: #3e8e41
  box-shadow: 0 5px #666
  transform: translateY(4px)
</style>