<template>
    <div class="circle-wrapper" :style="{ width: computedSize, height: computedSize }">
        <svg :style="{ width: computedSize, height: computedSize }">
            <circle class="bar" :cx="radius" :cy="radius" :r="radius"></circle>
            <circle class="fill" :cx="radius" :cy="radius" :r="radius" :style="{ strokeDashoffset: computedFill}"></circle>
        </svg>
        <div class="circle-title">
            <h3>{{ this.title }}</h3>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'CircleBar',
        props: ['title', 'level'],
        data: function () {
            return {
                radius: 50,
            }
        },
        computed: {
            computedSize: function () {
                return (this.radius * 2) + 10 + 'px'
            },
            computedFill: function () {
                return 315 - (315 * (this.level * 10)) / 100
            }
        }
    }
</script>

<style>
    .circle-wrapper {
        position: relative;
    }

    .circle-wrapper>svg {
        transform: rotate(-90deg);
    }

    .circle-wrapper>svg>circle {
        fill: none;
        stroke-width: 6px;
        stroke: #000;
        transform:  translate(5px, 5px);

        stroke-dasharray: 315;
        stroke-dashoffset: 315;
    }

    .circle-wrapper>svg>.bar {
        stroke-dashoffset: 0;
        stroke: var(--bar-color);
    }

    .circle-wrapper>svg>.fill {
        stroke: var(--a-color1);
        stroke-linecap: round;
    }

    .circle-title {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
        padding: 0;
    }

    .circle-title>h3 {
        margin: 2px 5px 0 5px;
        font-family: var(--font3);
        color: var(--text-color);
        letter-spacing: 0.5px;
        text-align: center;
        opacity: 0.6;
        padding: 0 5px 0 5px;
    }
</style>