<template>
    <button class="down">▲</button>
</template>

<script>
</script>

<style lang="css" scoped>
button {
    width: 35%;
    height: 150px;

    text-shadow: 0 0 20px var(--main-shadow-color);
    font-size: 4em;
    color: var(--main-arrow-color);
    cursor: pointer;

    padding: 0px;
    margin: 30px auto;
    background-color: transparent;
    border: none;
    display: block;

    animation: breath 3s ease-out infinite;
    -moz-osx-font-smoothing: grayscale;
    -webkit-font-smoothing: antialiased;
}

.down {
    transform: rotate(180deg);
}

@keyframes breath {
    50% {
        transform: scale(1.2) rotate(180deg);
        -webkit-transform: scale(1.2) rotate(180deg);
    }
}
</style>