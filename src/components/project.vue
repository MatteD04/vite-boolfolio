<script>
import axios from 'axios';
import ProjectCard from './ProjectCard.vue';

export default {
    name: 'project',
    data() {
        return {
            projects: []
        };
    },
    components: {
        ProjectCard
    },
    methods: {
        getProjectsApi() {
            axios.get('http://127.0.0.1:8000/api/projects')
            .then((response) => {
                this.projects = response.data.results;
            });
        }
    },
    mounted() {
        this.getProjectsApi();
    }
}
</script>

<template>
    <div class="container">
        <div>
            <h1>I MIEI PROGETTI</h1>
        </div>
        <div class="row row-cols-3">
            <div class="col" v-for="project in projects" :key="project.id">
                <ProjectCard :infoProject="project"></ProjectCard>
            </div>
        </div>
    </div>
</template>

<style scoped lang="scss"></style>