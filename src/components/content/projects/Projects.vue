<template>
  <div id="projects-wrapper">
    <Card v-for="project in projectsData" :key="project.title" :title="project.title" :text="project.text"
      :img="project.img" :buttons="project.buttons" :link1="project.link1" :link2="project.link2" />
  </div>
</template>

<script>
  import Card from './Card.vue'
  import ProjectsData from './../../../assets/data/projects.json'

  export default {
    name: 'Projects',
    components: {
      Card
    },
    data: function () {
      return {
        projectsData: ProjectsData.projects
      }
    }
  }
</script>

<style>
  #projects-wrapper {
    max-width: 70%;
    margin: 0 auto 0 auto;
    display: flex;
    flex-flow: row wrap;
    justify-content: space-evenly;
  }

  @media screen and (max-width: 865px) {
    #projects-wrapper {
      max-width: 100%;
      margin: 0;
    }
  }
</style>