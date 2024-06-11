<script>
export default {
    name: 'ProjectCard',
    props: {
        infoProject: Object
    }
}
</script>

<template>
    <div class="card my-3">
        <div class="card-body">
            <h5 class="card-title">{{ infoProject.name }}</h5>
            <div v-if="infoProject.type">
                <strong>Type</strong>:
                {{ infoProject.type.name }}
            </div>
            <p v-if="infoProject.summary" class="card-text">{{ infoProject.summary }}</p>
        </div>
    </div>
</template>

<style scoped lang="scss">
</style>