<template>
    <div id="title" class="gradient-background">
        <div class="fade-background">
            <div id="title-text">
                <span id="main-title">PROJECTS</span>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'Title'
    }
</script>

<style>
    #title {
        width: 50%;
        height: 125px;

        margin-left: auto;
        margin-right: auto;

        border-radius: 30px;
        box-shadow: var(--main-inset-box-shadow);
    }

    #title-text {
        margin-left: auto;
        margin-right: auto;

        padding-top: 30px;
        letter-spacing: 11.7px;

        font-family: var(--font2);
        font-size: 2.53em;
        text-align: center;
        
        color: var(--main-title-color);
        opacity: 75%;

        border-radius: 30px;
    }
</style>