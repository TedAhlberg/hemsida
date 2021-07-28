<template>
  <div id="app">
    <Header />
    <Content contentTitle="PROJECTS" color='1' />
    <Content contentTitle="RESUME" color='2' />
    <Content contentTitle="CONTACT" color='3' />
  </div>
</template>

<script>
  import Header from './components/Header.vue'
  import Content from './components/Content.vue'

  export default {
    name: 'App',
    components: {
      Header,
      Content
    }
  }
</script>

<style>
</style>