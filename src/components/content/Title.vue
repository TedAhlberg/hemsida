<template>
    <div class="title">
        {{contentTitle}}
    </div>
</template>

<script>
    export default {
        name: 'Title',
        props: ['contentTitle'],
    }
</script>

<style>
    .title {
        margin: 1em auto 0.6em auto;
        padding-left: 0.2em;
        width: fit-content;
        position: relative;

        font-family: var(--font2);
        color: var(--main-title-color);
        opacity: 65%;
        text-align: center;

        font-size: 2.7em;
        letter-spacing: 10px;
        user-select: none;
    }

    @media screen and (max-width: 600px) {
        .title {
            font-size: 7.25vw;
            letter-spacing: 1.75vw;
        }
    }
</style>