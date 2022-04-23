<template>
  <div v-for="(component, index) in visibleComponent" :key="index" class="h-screen pt-4 component">
    <div class="main">
      <div class="componentsContainer">
        <component :is="component.name"></component>
      </div>
      <button id="prevButton" class="mr-4 mb-4" @click="prevMenu(component.position)">
        <!-- 76px1 Caret Left-->
        <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-caret-left" width="76" height="76" viewBox="0 0 24 24" stroke-width="1" stroke="#d3d3d3" fill="none" stroke-linecap="round" stroke-linejoin="round">
          <path stroke="none" d="M0 0h24v24H0z" fill="none" />
          <path d="M18 15l-6 -6l-6 6h12" transform="rotate(270 12 12)" />
        </svg>
      </button>
      <button id="nextButton" class="mr-4 mb-4" @click="nextMenu(component.position)">
        <!-- 76px1 Caret Right-->
        <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-caret-right" width="76" height="76" viewBox="0 0 24 24" stroke-width="1" stroke="#d3d3d3" fill="none" stroke-linecap="round" stroke-linejoin="round">
          <path stroke="none" d="M0 0h24v24H0z" fill="none" />
          <path d="M18 15l-6 -6l-6 6h12" transform="rotate(90 12 12)" />
        </svg>
      </button>
    </div>
  </div>
</template>

<script setup lang="ts">
import ConstructionsMenu from "./SubcomponentsMenu/ConstructionsMenu.vue";
import UpgradesMenu from "./SubcomponentsMenu/UpgradesMenu.vue";
import SkinsMenu from "./SubcomponentsMenu/SkinsMenu.vue";
</script>

<script lang="ts">
export default {
  computed: {
    /**
     * Filter all components to find out which ones are visible (Only one should be visible)
     * This will allow us to display the corresponding menu
     */
    visibleComponent: function () {
      return this.components.filter((i) => i.visible === true);
    },
  },
  data() {
    return {
      components: [
        {
          name: "ConstructionsMenu",
          visible: true,
          position: 0,
        },
        {
          name: "UpgradesMenu",
          visible: false,
          position: 1,
        },
        {
          name: "SkinsMenu",
          visible: false,
          position: 2,
        },
      ],
    };
  },
  components: {
    ConstructionsMenu,
    UpgradesMenu,
    SkinsMenu,
  },
  methods: {
    /**
     * Makes the actual menu hidden and the following menu visible
     */
    nextMenu(pos: number): void {
      this.components[pos].visible = false;

      if (pos++ < this.components.length - 1) {
        this.components[pos++].visible = true;
      } else {
        // If the actual component is the last one in the array, then the next menu that should be
        // visible is the starter one
        this.components[0].visible = true;
      }
    },
    prevMenu(pos: number): void {
      this.components[pos].visible = false;

      if (pos-- > 0) {
        this.components[pos--].visible = true;
      } else {
        this.components[this.components.length - 1].visible = true;
      }
    },
  },
};
</script>

<style lang="sass" scoped>


div
  background: #333333
  color: #d3d3d3


#prevButton
  -webkit-order: 1
  -ms-flex-order: 1
  order: 1
  -webkit-flex: 0 1 auto
  -ms-flex: 0 1 auto
  flex: 0 1 auto
  -webkit-align-self: center
  -ms-flex-item-align: center
  align-self: center

#nextButton
  -webkit-order: 3
  -ms-flex-order: 3
  order: 3
  -webkit-flex: 0 1 auto
  -ms-flex: 0 1 auto
  flex: 0 1 auto
  -webkit-align-self: center
  -ms-flex-item-align: center
  align-self: center


.componentsContainer
  width: 90%
  -webkit-order: 2
  -ms-flex-order: 2
  order: 2


.main
  height: 100vh
  display: -ms-flexbox
  display: -webkit-flex
  display: flex
  -webkit-flex-direction: row
  -ms-flex-direction: row
  flex-direction: row
  -webkit-flex-wrap: nowrap
  -ms-flex-wrap: nowrap
  flex-wrap: nowrap
  -webkit-justify-content: center
  -ms-flex-pack: center
  justify-content: center
  -webkit-align-content: stretch
  -ms-flex-line-pack: stretch
  align-content: stretch
  -webkit-align-items: flex-start
  -ms-flex-align: start
  align-items: flex-start

.component
  overflow-y: scroll
  align-self: center
  order: 2



//button
//  display: inline-block
//  padding: 15px 25px
//  font-size: 24px
//  cursor: pointer
//  text-align: center
//  text-decoration: none
//  outline: none
//  color: #fff
//  background-color: #4CAF50
//  border: none
//  border-radius: 15px
//  box-shadow: 0 9px #999

//button:hover
//  background-color: #3e8e41


//button:active
//  background-color: #3e8e41
//  box-shadow: 0 5px #666
//  transform: translateY(4px)
</style>
