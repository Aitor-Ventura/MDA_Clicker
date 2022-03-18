<template>
    <div class="constructionContainer">
        <img :src=image width="110" height="110">
        <p>{{ name }}</p>
        <p>{{ price }}</p>
        <p>{{ iGot }}</p>
    </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
    props: {
        id: Number,
        image: String,
        name: String,
        price: Number,
        iGot: Number // How many of X construction do I have
    }
})
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