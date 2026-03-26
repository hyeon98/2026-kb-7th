<script>
import TodoHeader from './components/TodoHeader.vue';
import TodoInput from './components/TodoInput.vue';
import TodoList from './components/TodoList.vue';

export default {
  data() {
    return {
      todo: [],
      current: 'all',
    };
  },

  methods: {
    addTodo(inputMsg) {
      const item = {
        id: Math.random(),
        msg: inputMsg,
        completed: false,
      };
      this.todo.push(item);
    },

    updateTab(tab) {
      this.current = tab;
    },

    toggleTodo(id) {
      const target = this.todo.find((item) => item.id === id);
      if (target) {
        target.completed = !target.completed;
      }
    },

    deleteTodo(id) {
      this.todo = this.todo.filter((item) => item.id !== id);
    },
  },

  computed: {
    computedTodo() {
      if (this.current === 'all') {
        return this.todo;
      } else {
        return this.todo.filter((v) => v.completed);
      }
    },
  },

  components: {
    TodoHeader,
    TodoInput,
    TodoList,
  },
};
</script>

<template>
  <div class="todo">
    <TodoHeader :current="current" @update-tab="updateTab" />
    <TodoList
      :computed-todo="computedTodo"
      @toggle-todo="toggleTodo"
      @delete-todo="deleteTodo"
    />
    <TodoInput @add-todo="addTodo" />
  </div>
</template>
