<template>
    <div id="header" class="gradient-background">
        <div id="header-background">
            <div id="header-box">
                <span id="header-title">Ted</span>
                <span id="header-subtitle">AHLBERG</span>
            </div>
        </div>
    </div>
</template>

<script>
</script>

<style lang="css" scoped>
#header {
    border-radius: 50%;
    box-shadow: var(--main-box-shadow);

    margin-top: 100px;
    margin-right: auto;
    margin-left: auto;
    width: 550px;
    height: 550px;
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
    font-size: 11em;
    font-family: 'DM Serif Display', serif;
    letter-spacing: -3.5px;
    color: var(--main-title-color);
    user-select: none;

    padding-right: 5px;
    margin-top: -55px;
    margin-left: auto;
    margin-right: auto;
}

#header-subtitle {
    font-size: 2.25em;
    font-family: 'Montserrat', sans-serif;
    letter-spacing: 11px;
    color: var(--main-title-color);
    user-select: none;

    padding-left: 30px;
    margin-top: -55px;
    margin-left: auto;
    margin-right: auto;
}

</style>