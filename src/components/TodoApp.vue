<template>
    <div class="todo-app">
        <h1 class="title">TODO's</h1>
        <todo-form></todo-form>
        <todo-list></todo-list>
    </div>
</template>

<script setup>
import TodoForm from "./TodoForm.vue";
import TodoList from "./TodoList.vue";

defineOptions({
    name: "TodoApp",
});
</script>

<style scoped>
.todo-app {
    padding: 5vh;
    width: 400px;
    min-height: 100vh;
    background-color: #f7f8fc;
}

.title {
    font-size: 48px;
    font-weight: 700;
}
</style>
