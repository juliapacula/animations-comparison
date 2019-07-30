<template>
  <div>
    <div v-if="selectedTodos.length !== 0" class="header">
      <button
        @click="removeSelected"
        class="btn btn-secondary"
        type="button">Delete
      </button>
    </div>
    <ul class="list-group my-4">
      <template v-for="todo in todos">
        <ListItem
          :key="todo.id"
          :todo="todo"
          @deselected="deselectTodo"
          @selected="selectTodo" />
      </template>
    </ul>
  </div>
</template>

<script>
import Vue from 'vue';
import { Actions } from '@/store';
import ListItem from './ListItem.vue';

export default Vue.extend({
  name: 'List',
  components: {
    ListItem,
  },
  async created() {
    await this.$store.dispatch(Actions.fetchTodos);
  },
  computed: {
    todos() {
      return this.$store.state.todos;
    },
  },
  data() {
    return {
      selectedTodos: [],
    };
  },
  methods: {
    selectTodo(todo) {
      this.selectedTodos.push(todo);
    },
    deselectTodo(todo) {
      this.selectedTodos = this.selectedTodos.filter(t => t.id !== todo.id);
    },
    removeSelected() {
      this.$store.dispatch(Actions.removeTodos, this.selectedTodos);
      this.selectedTodos = [];
    },
  },
});
</script>

<style lang="scss" scoped>
.header {
  display: flex;
  justify-content: flex-end;
  margin-top: 1rem;
}
</style>
