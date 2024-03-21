<template>
    <div class="todo-list">
        <q-list>
            <q-item class="item" v-for="todo in todoList" :key="todo.id">
                <p :class="{ completed: todo.completed }">{{ todo.item }}</p>
                <div class="icons">
                    <span @click.stop="toggleCompleted(todo.id)">
                        <q-icon name="task_alt" size="24px" color="597d9a" />
                    </span>
                    <span @click="deleteTodo(todo.id)" class="x">
                        <q-icon name="delete" size="24px" color="red" />
                    </span>
                </div>
            </q-item>
        </q-list>
    </div>
</template>

<script setup>
import { useTodoListStore } from "stores/todoList";
import { storeToRefs } from "pinia";

const store = useTodoListStore();
const { todoList } = storeToRefs(store);
const { toggleCompleted, deleteTodo } = store;

defineOptions({
    name: "TodoList",
});
</script>

<style scoped>
.todo-list {
    width: 100%;
}

.icons {
    margin-left: 16px;
    display: flex;
}

.icons span {
    margin-left: 16px;
    cursor: pointer;
}

.item {
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    overflow: hidden;
    margin-bottom: 16px;
}

p {
    max-width: 60%;
    margin: 0;
    word-wrap: break-word;
}

.completed {
    text-decoration: line-through;
}
</style>
