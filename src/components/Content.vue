<template>
    <div class="content" :class="compColor">
        <Title :contentTitle="contentTitle" />
        <Projects v-if="projects" />
        <Resume v-if="resume" />
        <Contact v-if="contact" />
    </div>
</template>

<script>
    import Title from './content/Title.vue'
    import Projects from './content/projects/Projects.vue'
    import Resume from './content/Resume.vue'
    import Contact from './content/Contact.vue'

    export default {
        name: 'Content',
        components: {
            Title,
            Projects,
            Resume,
            Contact
        },
        props: ['contentTitle', 'color'],
        data: () => {
            return ({
                projects: false,
                resume: false,
                contact: false,
            })
        },
        computed: {
            compColor() {
                return {
                    ['bg-color' + this.color]: true
                }
            }
        },
        created() {
            if (this.contentTitle == "PROJECTS") this.projects = true
            if (this.contentTitle == "RESUME") this.resume = true
            if (this.contentTitle == "CONTACT") this.contact = true
        }
    }
</script>

<style lang="css" scoped>
    .content {
        height: 50vh;
        width: 100%;
        margin-bottom: -35px;
        overflow: hidden;
        box-shadow: 0px 0px 35px var(--main-inset-shadow-color) inset;
    }

    @media screen and (max-width: 735px) {
        .content {
            box-shadow: 0px 0px 5vw var(--main-inset-shadow-color) inset;
        }
    }
</style>