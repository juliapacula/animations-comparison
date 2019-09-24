<template>
  <li
    @click="selectTodo(todo)"
    :class="{ 'selected': isSelected }"
    class="list-group-item">{{ todo.text }}
  </li>
</template>

<script>
import Vue from 'vue';
import { Todo } from '@/models';

export default Vue.extend({
  name: 'ListItem',
  props: {
    todo: Object,
  },
  data() {
    return {
      isSelected: false,
    };
  },
  methods: {
    selectTodo(todo) {
      if (this.isSelected) {
        this.$emit('deselected', todo);
        this.isSelected = false;
      } else {
        this.$emit('selected', todo);
        this.isSelected = true;
      }
    },
  },
});
</script>

<style lang="scss" scoped>
@import 'mixins';
@import 'variables';

.list-group-item {
  transition: 100ms background-color;
  cursor: pointer;
  background-color: v('surface');
  color: v('on-surface');

  &.selected {
    background-color: rgba(v('primary'), 0.2);
  }
}
</style>
