<template>
  <div class="card-wrapper">
    <div class="card-background" :style="{ backgroundImage: this.imgPath }">
    </div>
    <div class="card-gradient">
      <div class="card-content">
        <span class="card-title">{{ this.title }}
          <div class="card-title-line"></div>
        </span>
        <span class="card-text">
          {{ this.text }}
        </span>
        <div class="card-button-wrapper">
          <button v-if="this.button2" class="card-button" v-on:click="goToLink2()"><span>CHECK OUT</span></button>
          <button v-if="this.button1" class="card-button" v-on:click="goToLink1()"><span>MORE INFO</span></button>
        </div>
      </div>
    </div>
  </div>

</template>

<script>
  export default {
    name: 'Card',
    props: ['title', 'text', 'img', 'buttons', 'link1', 'link2'],
    data() {
      return {
        imgPath: "",
        button1: true,
        button2: true,
      }
    },
    created() {
      this.imgPath = 'url(' + require('./../../../assets/img/' + this.img) + ')'

      if (this.buttons == 0) this.button1 = false
      if (this.buttons == 1) this.button2 = false
    },
    methods: {
      goToLink1() {
        window.open(this.link1, '_blank')
      },
      goToLink2() {
        window.open(this.link2, '_blank')
      }
    }
  }
</script>

<style lang="css" scoped>
  .card-wrapper {
    position: relative;
    margin: 1.5rem 1.5rem 1.5rem 1.5rem;
    height: fit-content;
    width: 20rem;
    padding: 7.5rem 1rem 1rem 1rem;
    box-shadow: var(--main-box-shadow);
    overflow: hidden;
    border-radius: 2rem;
    transition: 0.25s ease-in-out;
  }

  .card-wrapper:hover {
    transform: translateY(-0.35rem);
    box-shadow: var(--main-h-box-shadow);
  }

  .card-background {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    z-index: 0;
    opacity: 75%;
    filter: blur(1px);
    border-radius: 2rem;

    background-size: cover;
    background-repeat: no-repeat;
    background-position: center;
  }

  .card-gradient {
    width: 100%;
    height: 100%;
    margin-top: -5rem;
    padding-top: 5rem;
    filter: blur(0px);
    background: linear-gradient(180deg,
        rgba(100%, 100%, 100%, 0%) 5%,
        rgba(100%, 100%, 100%, 75%) 35%,
        rgba(100%, 100%, 100%, 80%) 100%);
    border-radius: 1.5rem;
  }

  .card-content {
    height: 90%;
    padding: 1.2rem 1.2rem 0.5rem 1.2rem;
    opacity: 65%;

    display: flex;
    flex-flow: column;
    align-items: center;
    justify-content: flex-end;
  }

  .card-title {
    padding-bottom: 0;
    font-size: 1.75em;
    letter-spacing: 0.2rem;
    text-align: center;
    font-family: var(--font2);
    color: var(--main-title-color);
  }

  .card-title-line {
    height: 4px;
    background-color: var(--a-color2);
    margin-top: 0.25rem;
    margin-bottom: 0.75rem;
    transform: scaleX(0);
    transition: 0.5s ease-in-out;
    transition-delay: 0.25s;
    border-radius: 2px;
  }

  .card-wrapper:hover .card-title-line {
    transform: scaleX(0.9);
  }

  .card-text {
    font-family: Arial;
    font-weight: 500;
    font-size: 1.1rem;
    color: var(--main-title-color);
    margin-bottom: 1.1rem;
  }

  .card-button-wrapper{
    display: flex;
  }

  .card-button {
    font-family: var(--font2);
    margin: 0 0.25rem 0.75rem 0.25rem;
    padding: 0.75rem;
    border: 0;
    color: rgba(247, 241, 232);
    background-color: var(--a-color2);
    box-shadow: var(--main-box-shadow);
    cursor: pointer;
    transition: 0.2s;
    border-radius: 3px;
  }

  .card-button>span {
    font-size: 0.9rem;
    opacity: 90%;
    letter-spacing: 0.1rem;
  }

  .card-button:hover {
    transform: scale(1.05);
    box-shadow: var(--main-h-box-shadow);
  }

  .card-button:active {
    transform: scale(1.025);
  }

  @media screen and (max-width: 865px) {
    .card-title {
      font-size: calc(1rem + 1.5vw);
    }

    .card-text {
      font-size: calc(0.8rem + 0.5vw);
    }

    .card-button {
      padding: calc(0.45rem + 0.5vw) calc(0.4rem + 0.6vw) calc(0.4rem + 0.6vw) calc(0.4rem + 0.6vw);
    }

    .card-button>span {
      font-size: calc(0.6rem + 0.4vw);
    }
  }
</style>