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
            <Arrow />
        </div>
    </div>
</template>

<script>
    import Arrow from './header/Arrow.vue'

    export default {
        name: 'Header',
        components: {
            Arrow
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
        justify-content: space-around;
        flex-direction: column;
    }

    #header {
        border-radius: 50%;
        box-shadow: var(--header-box-shadow);

        margin-top: 5.5%;
        margin-left: auto;
        margin-right: auto;
        margin-bottom: 55px;

        width: 75vw;
        max-width: 550px;
        height: 75vw;
        max-height: 550px;
        position: relative;
    }

    #header-background {
        background-color: var(--main-bg-color);
        width: 85%;
        height: 85%;
        border-radius: 50%;
        opacity: 75%;

        margin: 0;
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
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
    }
</style>