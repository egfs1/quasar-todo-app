<template>
    <div class="todo-form">
        <q-form @submit.prevent="addItemToTodoList(todo)">
            <div class="input-wrapper">
                <q-input type="" v-model="todo"> </q-input>
            </div>
            <div class="flex flex-center">
                <q-btn round icon="arrow_downward" type="submit" />
            </div>
        </q-form>
    </div>
</template>

<script setup>
import { ref } from "vue";
import { useTodoListStore } from "stores/todoList";

const todo = ref("");
const store = useTodoListStore();

function addItemToTodoList(item) {
    if (item.length === 0) return;

    store.addTodo(item);
    todo.value = "";
}

defineOptions({
    name: "TodoForm",
});
</script>

<style scoped>
form {
    margin: 32px auto;
    display: flex;
    flex-direction: column;
    gap: 16px;
}

.input-wrapper {
    display: flex;
    align-items: center;
    width: 100%;
    border-radius: 8px;
    padding: 0 0.7rem;
    background-color: white;
    box-shadow: 0px 4px 15px -4px rgba(0, 0, 0, 0.1);
}

label {
    width: 100%;
}

button {
    background-color: #597d9a;
    color: #fff;
    cursor: pointer;
}
</style>
