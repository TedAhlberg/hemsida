<template>
  <div class="card-wrapper">
    <div class="card-background">
    </div>
    <div class="card-gradient">
      <div class="card-content">
        <span class="card-title">PROJECT
          <div class="card-title-line"></div>
        </span>
        <span class="card-text">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin non enim aliquam, aliquet urna ac, pellentesque
          turpis. Integer congue lorem quis ex cursus elementum. Proin porttitor leo arcu, vitae mollis eros dapibus
          nec.
        </span>
        <button class="card-button"><span>MORE INFO</span></button>
      </div>
    </div>
  </div>

</template>

<script>
  export default {
    name: 'Card',
  }
</script>

<style lang="css" scoped>
  .card-wrapper {
    position: relative;
    margin: 1.5rem;
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

    background-image: url('./../../../assets/img/card-placeholder.jpg');
    background-size: contain;
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
    padding: 1.2rem;
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
    transform: scaleX(1);
  }

  .card-text {
    font-family: Arial;
    font-weight: 500;
    font-size: 1.1rem;
    color: var(--main-title-color);
    margin-bottom: 1.1rem;
  }

  .card-button {
    font-family: var(--font2);
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

  @media screen and (max-width: 600px) {
    .card-title {
      font-size: 1.5rem;
    }

    .card-text {
      font-size: 0.975rem;
    }

    .card-button {
      padding: 0.6rem 0.75rem 0.75rem 0.75rem;
    }

    .card-button>span {
      font-size: 0.7rem;
    }
  }

  @media screen and (max-width: 735px) {
    .card-wrapper {
      box-shadow: var(--main-r-box-shadow);
    }

    .card-button {
      box-shadow: var(--main-r-box-shadow);
    }
  }
</style>