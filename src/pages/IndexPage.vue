<template>
    <q-page class="index-page">
        <todo-app></todo-app>
    </q-page>
</template>

<script setup>
import TodoApp from "components/TodoApp.vue";

defineOptions({
    name: "IndexPage",
});
</script>

<style scoped>
.index-page {
    display: flex;
    text-align: center;
    justify-content: center;
    color: #2c3e50;
    background-color: #597d9a;
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
}
</style>
