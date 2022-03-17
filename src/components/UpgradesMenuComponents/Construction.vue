<template>
    <div class="constructionContainer">
        <div>
            <h1>{{ name }}</h1>
        </div>

        <div>
            <p>{{ price }}</p>
        </div>

        <div>
           <p>{{ iGot }}</p>
        </div>
    </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
    props: {
        image: Image,
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
    justify-content: space-around
    border: 5px solid black
    margin: 1em 1em

</style>