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
    visibleComponent: function() {
      return this.componentNames.filter(i => i.visible === true)
    }
  },
  data() {
    return {
      componentNames: [
        {
          name: "ConstructionsMenu",
          visible: true,
          id: 1
        },
        {
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
    nextMenu(): void {
      for (let i = 0; i < this.componentNames.length; i++) {
        this.componentNames[i].visible = !this.componentNames[i].visible;
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