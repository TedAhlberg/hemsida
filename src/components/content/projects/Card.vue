<template>
  <div class="card-wrapper">
    <div class="card-background">
    </div>
    <div class="card-gradient">
      <div class="card-content">
        <span class="card-title">PROJECT</span>
        <span class="card-text">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin non enim aliquam, aliquet urna ac, pellentesque
          turpis. Integer congue lorem quis ex cursus elementum. Proin porttitor leo arcu, vitae mollis eros dapibus
          nec. Vestibulum elementum neque dapibus lacus egestas tristique. Morbi quis nisi suscipit nisl
        </span>
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
    height: 25rem;

    width: 20rem;
    padding: 1rem;
    box-shadow: var(--main-box-shadow);
    border-radius: 2rem;
    overflow: hidden;
  }

  .card-background {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    z-index: 0;
    opacity: 75%;
    filter: blur(1.5px);
    border-radius: 2rem;

    background-image: url('./../../../assets/img/card-placeholder.jpg');
    background-size: contain;
  }

  .card-gradient {
    width: 100%;
    height: 100%;
    filter: blur(0px);
    background: linear-gradient(180deg,
        rgba(247, 241, 232, 0) 2%,
        rgba(247, 241, 232, 80%) 35%,
        rgba(247, 241, 232, 85%) 100%);

    border-radius: 1.5rem;
  }

  .card-content {
    height: 92.5%;
    padding: 1rem;
    opacity: 65%;

    display: flex;
    flex-flow: column;
    align-items: center;
    justify-content: flex-end;
  }

  .card-title {
    padding-bottom: 0.75rem;
    font-size: 1.75em;
    font-family: var(--font2);
    color: var(--main-title-color);
  }

  .card-text {
    font-family: Arial;
    font-weight: 500;
    font-size: 1.1rem;
    color: var(--main-title-color);
  }

  @media screen and (max-width: 735px) {
    .card {
      box-shadow: var(--main-r-box-shadow);
    }
  }
</style>