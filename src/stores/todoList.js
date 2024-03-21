import { defineStore } from "pinia";

export const useTodoListStore = defineStore("todoList", {
    state: () => ({
        todoList: [],
        id: 0,
    }),
    actions: {
        addTodo(item) {
            console.log(item);
            this.todoList.push({ item, id: this.id++, completed: false });
        },
        deleteTodo(id) {
            this.todoList = this.todoList.filter((todo) => todo.id !== id);
        },
        toggleCompleted(id) {
            const todo = this.todoList.find((todo) => todo.id === id);
            if (todo) {
                todo.completed = !todo.completed;
            }
        },
    },
});
