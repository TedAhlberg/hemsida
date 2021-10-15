<template>
  <div id="app">
    <Header />
    <Content contentTitle="RESUME" color='1' />
    <Content contentTitle="PROJECTS" color='2' />
    <Footer />
  </div>
</template>

<script>
  import Header from './components/Header.vue'
  import Content from './components/Content.vue'
  import Footer from './components/Footer.vue'

  import colors from './util/colors.js'

  export default {
    name: 'App',
    components: {
      Header,
      Content,
      Footer
    },
    created() {
      colors.setAccentColors()
    }
  }
</script>

<style>
</style>