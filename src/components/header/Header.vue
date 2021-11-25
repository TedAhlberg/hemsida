<template>
    <div id="header-wrapper">
        <div>
            <div id="header" class="gradient-background">
                <div id="header-background">
                    <div id="header-box">
                        <span id="header-title">Ted</span>
                        <span id="header-subtitle">AHLBERG</span>
                    </div>
                </div>
            </div>
        </div>
        <IconArrow id="icon-arrow" />
    </div>
</template>

<script>
    import IconArrow from './../icons/iconArrow.vue'

    export default {
        name: 'Header',
        components: {
            IconArrow
        }
    }
</script>

<style lang="css" scoped>
    #header-wrapper {
        padding: 0;
        margin: 0;
        top: 0;
        left: 0;

        width: 100%;
        height: 100vh;
        min-height: 650px;

        display: flex;
        justify-content: center;
        flex-direction: column;
    }

    #header {
        border-radius: 50%;
        box-shadow: var(--header-box-shadow);

        margin: 2.5rem auto 0 auto;

        width: 75vw;
        max-width: 550px;
        height: 75vw;
        max-height: 550px;
        position: relative;
        z-index: 0;
    }

    #header-background {
        background-color: var(--main-bg-color);
        width: 85%;
        height: 85%;
        border-radius: 50%;
        opacity: 0.7;

        margin: 0;
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        z-index: 1;
    }

    #header-box {
        display: flex;
        justify-content: space-evenly;
        flex-direction: column;

        margin: 0;
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
    }

    #header-title {
        font-size: 11.5em;
        letter-spacing: -5.5px;
        margin-top: -58px;

        font-family: var(--font1);
        color: var(--text-color);
        user-select: none;

        padding-right: 2%;
        margin-left: auto;
        margin-right: auto;
        z-index: 2;
    }

    #header-subtitle {
        font-size: 2.53em;
        letter-spacing: 11.7px;
        margin-top: -51px;

        font-family: var(--font2);
        color: var(--text-color);
        user-select: none;

        padding-left: 5.25%;
        margin-left: auto;
        margin-right: auto;
    }

    #icon-arrow {
        position: relative;
        top: 0;

        padding: 3rem;
        margin: 5rem auto 0 auto;
        width: 5rem;
        height: 5rem;
        opacity: 0.6;
        cursor: pointer;
        animation: updown 2s ease infinite;
        transition: transform 0.25s ease-out;
    }

    #icon-arrow:hover {
        transform: scale(1.1);
    }

    #icon-arrow:active {
        transform: scale(0.9);
    }

    @media screen and (max-width: 735px) {
        #header-title {
            font-size: 25vw;
            letter-spacing: -0.75vw;
            margin-top: -8vw;
        }

        #header-subtitle {
            font-size: 5.5vw;
            letter-spacing: 1.6vw;
            margin-top: -7vw;
        }

        #icon-arrow {
            width: calc(2rem + 5vw);
            height: calc(2rem + 5vw);
        }
    }

    @keyframes updown {
        50% {
            top: -7.5px
        }
    }
</style>