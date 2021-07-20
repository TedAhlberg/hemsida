<template>
    <button class="down">▲</button>
</template>

<script>
</script>

<style lang="css" scoped>
button {
    width: 35%;

    text-shadow: 0 0 20px var(--main-shadow-color);
    color: var(--main-arrow-color);
    cursor: pointer;

    padding: 0px;
    background-color: transparent;
    border: none;
    display: block;

    animation: breath 3.5s ease-out infinite;
    -moz-osx-font-smoothing: grayscale;
    -webkit-font-smoothing: antialiased;
    
    font-size: 73px;
    margin: 74px auto;
}

.down {
    transform: rotate(180deg);
}

@media screen and (max-width: 735px) {
    button {
        /* height: ;
        font-size: ;
        margin-top: ; 
        text-shadow: ;*/
        font-size: 10vw;
        margin-top: 10vw;
    }
}

@keyframes breath {
    50% {
        transform: scale(1.15) rotate(180deg);
        -webkit-transform: scale(1.15) rotate(180deg);
    }
}
</style>