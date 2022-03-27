<template>
  <div class="h-screen pt-4">
    <component v-for="(component, index) in visibleComponent" :key="index" :is="component.name"></component>

    <div class="w-full flex justify-end">
      <button class="mr-4" @click="nextMenu()">Next</button>
    </div>
  </div>

</template>

<script setup lang="ts">
import ConstructionsMenu from "./SubcomponentsMenu/ConstructionsMenu.vue";
import Probando from "./SubcomponentsMenu/Probando.vue";
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
        },
        { // THIS OBJECT CAN BE REMOVED OR IT NAME CAN BE MODIFIED TO REUSE IT BUT DON'T FORGET TO MODIFY IT CORRESPONDING FILE NAME
          name: "Probando",
          visible: false,
        }
      ]
    }
  },
  components: {
    ConstructionsMenu, Probando
  },
  methods: {
    /**
     * Iterates through all the components and makes the following menu visible
     * while hiding the others
     */
    nextMenu(): void {
      for (let i = 0; i < this.components.length; i++) {
        this.components[i].visible = !this.components[i].visible;
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