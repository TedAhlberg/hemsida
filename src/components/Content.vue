<template>
    <div id="content" :class="compColor">
        <Title :contentTitle="contentTitle" />
        <Projects v-if="projects" />
        <Resume v-if="resume" />
        <Contact v-if="contact" />
    </div>
</template>

<script>
    import Title from './content/Title.vue'
    import Projects from './content/Projects.vue'
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
    #content {
        height: 50vh;
        width: 100%;
        margin-bottom: -40px;

        overflow: hidden;

        box-shadow: 0px 0px 35px var(--main-inset-shadow-color) inset;
    }
</style>