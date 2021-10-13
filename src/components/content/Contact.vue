<template>
  <div id="contact-wrapper">
    <IconMail class="icon" />
    <IconGitHub class="icon" />
    <IconLinked class="icon" />
  </div>
</template>

<script>
import IconMail from './../icons/IconMail.vue'
import IconGitHub from './../icons/IconGitHub.vue'
import IconLinked from './../icons/IconLinked.vue'

export default {
  name: 'Contact',
  components: {
    IconMail,
    IconGitHub,
    IconLinked
  }
}
</script>

<style>
  #contact-wrapper {
    margin: 2.5rem auto 0 auto;
    max-width: 60%;

    display: flex;
    justify-content: space-around;
  }
  
  #contact-wrapper>.icon {
    margin: 0 1.25rem 0 1.25rem;
    width: 15rem;
    height: 15rem;
    color: var(--a-color3);
    cursor: pointer;
    transition: transform 0.25s ease-out;
  }

  #contact-wrapper>.icon:hover {
    transform: scale(1.1);
  }

   @media screen and (max-width: 865px) {
     #contact-wrapper {
       max-width: 100%;
     }

     #contact-wrapper>.icon {
       width: calc(5rem + 7vw);
       height: calc(5rem + 7vw);
     }
   }
</style>