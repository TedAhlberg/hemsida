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
    height: 72.5rem;
    max-width: 70%;
    margin: 0 auto 0 auto;
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
    align-content: center;
  }

  @media screen and (max-width: 1260px) {
    #projects-wrapper {
      height: 100rem;
    }
  }

  @media screen and (max-width: 865px) {
    #projects-wrapper {
      height: fit-content;
      flex-direction: row;
      justify-content: space-evenly;
      max-width: 100%;
      margin: 0;
    }
  }
</style>