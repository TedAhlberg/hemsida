<template>
  <div id="projects">
    <Card />
  </div>
</template>

<script>
  import Card from './Card.vue'
  export default {
    name: 'Projects',
    components: {
      Card
    }
  }
</script>

<style>
  #projects {
    display: flex;
    flex-flow: row wrap;
    justify-content: space-evenly;
    width: 100%;
  }
</style>