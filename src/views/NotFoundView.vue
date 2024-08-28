<script setup>
    import { useRoute, useRouter } from 'vue-router';


    const route = useRoute();
    const router = useRouter();

    const backButton = () => {
    router.push('/')
}

</script>



<template>
    <h1>404</h1>
    <button @click="backButton" class="btn btn-outline-primary">volver</button>
</template>
