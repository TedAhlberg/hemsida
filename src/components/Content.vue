<template>
    <div id="content" :class="compColor">
        <Title :contentTitle="contentTitle" />
    </div>
</template>

<script>
    import Title from './content/Title.vue'

    export default {
        name: 'Content',
        components: {
            Title
        },
        props: ['contentTitle', 'color'],
        computed: {
            compColor() {
               return {['bg-color' + this.color]: true}
            }
        }
    }
</script>

<style lang="css" scoped>
    #content {
        height: 20vh;
        width: 100%;
        margin-bottom: -40px;

        overflow: hidden;

        box-shadow: 0px 0px 35px var(--main-inset-shadow-color) inset;
    }
</style>