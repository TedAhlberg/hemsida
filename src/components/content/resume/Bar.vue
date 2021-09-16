<template>
    <div class="bar-wrapper">
        <div class="bar-fill" :style="{ width: computedWidth }"></div>
    </div>
</template>

<script>
    export default {
        name: 'Bar',
        props: ['level'],
        data: function () {
            return {
                width: '0%'
            }
        },
        computed: {
            computedWidth: function () {
                return this.width
            }
        },
        created() {
            this.width = (this.level * 10) + '%'
        }
    }
</script>

<style>
    .bar-wrapper {
        height: 6px;
        box-shadow: 0px 0px 5px var(--main-shadow-color) inset;
        border-radius: 3px;
    }

    .bar-fill {
        background-color: var(--a-color1);
        height: 6px;
        border-radius: 3px;
    }
</style>