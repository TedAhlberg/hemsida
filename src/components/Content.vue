<template>
    <div class="content-wrapper" :class="compColor">
        <Title :contentTitle="contentTitle" />
        <div class="content">
            <Resume v-if="resume" />
            <Projects v-if="projects" />
        </div>
    </div>
</template>

<script>
    import Title from './content/Title.vue'
    import Resume from './content/resume/Resume.vue'
    import Projects from './content/projects/Projects.vue'

    export default {
        name: 'Content',
        components: {
            Title,
            Resume,
            Projects,
        },
        props: ['contentTitle', 'color'],
        data: () => {
            return ({
                resume: false,
                projects: false,                
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
            if (this.contentTitle == "RESUME") this.resume = true
            if (this.contentTitle == "PROJECTS") this.projects = true
        }
    }
</script>

<style lang="css" scoped>
    .content-wrapper {
        height: auto;
        width: 100%;
        margin-bottom: -35px;
        overflow: hidden;
        box-shadow: var(--main-inset-box-shadow);
    }

    .content {
        padding-bottom: 5rem;
        padding-left: 1rem;
        padding-right: 1rem;
    }

    @media screen and (max-width: 735px) {
        .content-wrapper {
            box-shadow: var(--main-r-inset-box-shadow);
        }
    }
</style>