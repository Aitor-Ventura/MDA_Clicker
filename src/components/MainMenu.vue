<template>
  <component v-for="component in visibleComponent" :key="component.id" :is="component.name"></component>
  <button @click="nextMenu()">Next</button>

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
          id: 1
        },
        { // THIS OBJECT CAN BE REMOVED OR IT NAME CAN BE MODIFIED TO REUSE IT BUT DON'T FORGET TO MODIFIED IT CORRESPONDING FILE NAME
          name: "Probando",
          visible: false,
          id: 2
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
  width: 30%

</style>