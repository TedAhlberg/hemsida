<template>
    <div id="content">
        <Title />
    </div>
</template>

<script>
    import Title from './content/Title.vue'

    export default {
        name: 'Content',
        components: {
            Title
        }
    }
</script>

<style lang="css" scoped>
    #content {
        background-color: var(--bg-color1);
        height: 20vh;
        width: 100%;

        overflow: auto;

        box-shadow: 0px 0px 40px var(--main-inset-shadow-color) inset;
    }
</style>