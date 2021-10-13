<template>
    <div class="title">
        {{ contentTitle }}
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
        margin: 3rem auto 1.5rem auto;
        padding-left: 0.2em;
        width: fit-content;
        position: relative;

        font-family: var(--font2);
        color: var(--text-color);
        opacity: 65%;
        text-align: center;

        font-size: 3.75rem;
        letter-spacing: 10px;
        user-select: none;
    }

    @media screen and (max-width: 865px) {
        .title {
            font-size: calc(1.5rem + 4vw);
            letter-spacing: 1.25vw;
        }
    }
</style>