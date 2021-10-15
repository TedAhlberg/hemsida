<template>
  <div id="footer">
    <div id="footer-icons-wrapper">
      <IconMail class="icon" />
      <IconGitHub class="icon" />
      <IconLinked class="icon" />
    </div>
    <div id="footer-line"></div>
    <span>Icons made by <a href="https://freeicons.io/icon-list/business-and-online-icons" target="_blank">Raj Dev</a></span>
    <span>© Ted Alhberg 2021</span>
  </div>
</template>

<script>
  import IconMail from './icons/IconMail.vue'
  import IconGitHub from './icons/IconGitHub.vue'
  import IconLinked from './icons/IconLinked.vue'

  export default {
    name: 'Footer',
    components: {
      IconMail,
      IconGitHub,
      IconLinked
    }

  }
</script>

<style>
  #footer {
    height: 5rem;
    background-color: var(--main-bg-color);
  }

  #footer-icons-wrapper {
    display: flex;
    justify-content: center;
  }

  #footer-icons-wrapper>.icon {
    margin: 2rem 1rem 1rem 1rem;
    width: 5rem;
    height: 5rem;
    color: var(--text-color);
    opacity: 70%;
    cursor: pointer;
    transition: transform 0.125s ease-out;
  }

  #footer-icons-wrapper>.icon:hover {
    transform: scale(1.05);
  }

  #footer-line {
    height: 4px;
    width: 260px;
    margin: 0 auto 0 auto;
    opacity: 60%;
    background-color: var(--text-color);
    border-radius: 2px;
  }

  #footer>span {
    display: block;
    text-align: center;
    font-family: var(--font3);
    color: var(--text-color);
    opacity: 70%;
  }

  #footer>span:first-of-type {
    margin: 1rem 0 0.125rem 0;
  }

  #footer>span:last-of-type {
    margin: 0.1rem 0 2.5rem 0;
  }

  #footer>span>a {
    text-decoration: none;
    color: var(--text-color);
    transition: opacity 0.15s ease-out;
  }

  #footer>span>a:hover {
    opacity: 50%;
  }


  @media screen and (max-width: 865px) {
    #footer-icons-wrapper>.icon {
      width: calc(3rem + 3.5vw);
      height: calc(3rem + 3.5vw);
    }
  }
</style>