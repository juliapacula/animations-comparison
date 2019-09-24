<template>
  <div>
    <div
      v-if="selectedTodos.length !== 0"
      class="header">
      <button
        class="btn btn-secondary"
        type="button"
        @click="removeSelected">
        Delete
      </button>
    </div>
    <transition-group
      class="list-group my-4"
      name="stagerred-list"
      tag="ul">
      <ListItem
        v-for="(todo, index) in todos"
        :data-index="index"
        :key="todo.id"
        :todo="todo"
        @deselected="deselectTodo"
        @selected="selectTodo" />
    </transition-group>
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
