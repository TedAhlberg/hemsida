<template>
    <div class="bar-wrapper">
        <div class="bar-fill" :style="{ width: computedWidth }"></div>
    </div>
</template>

<script>
    export default {
        name: "Bar",
        props: ["level"],
        computed: {
            computedWidth: function () {
                return this.level * 10 + "%";
            },
        },
    };
</script>

<style>
    .bar-wrapper {
        height: 6px;
        background-color: var(--bar-color);
        border-radius: 3px;
    }

    .bar-fill {
        background-color: var(--a-color1);
        height: 6px;
        border-radius: 3px;
    }
</style>