<template>
  <transition name="modal">
    <div
      v-if="isVisible"
      class="modal-box">
      <div class="modal">
        <div class="modal-dialog">
          <div class="modal-content">
            <div class="modal-header">
              <h5 class="modal-title">Add new todo</h5>
            </div>
            <div class="modal-body">
              <div class="inputs">
                <div class="form-group">
                  <textarea
                    id="todo-text"
                    v-model="todoToAddText"
                    class="form-control todo-text"
                    cols="30"
                    rows="5"></textarea>
                </div>
                <div class="form-group with-icon">
                  <label for="todo-interval"><i class="mdi mdi-timer-sand mr-2"></i>Interval</label>
                  <input
                    id="todo-interval"
                    v-model="intervalNumber"
                    class="form-control"
                    type="number" />
                </div>
              </div>
            </div>
            <div class="modal-footer">
              <button
                class="btn btn-primary"
                @click="addTodo">
                Add
              </button>
            </div>
          </div>
        </div>
      </div>

      <div class="overlay"></div>
    </div>
  </transition>
</template>

<script>
import Vue from 'vue';
import { Actions } from '@/store';

export default Vue.extend({
  name: 'ItemInput',
  props: {
    isVisible: Boolean,
  },
  data() {
    return {
      todoToAddText: '',
      intervalNumber: 0,
    };
  },
  methods: {
    async addTodo() {
      const todoToAdd = {
        id: Math.random(),
        date: new Date().toLocaleDateString(),
        text: this.todoToAddText,
        interval: this.intervalNumber,
      };

      await this.$store.dispatch(Actions.addTodo, todoToAdd);
      this.$emit('close');
    },
  },
});
</script>

<style
  lang="scss"
  scoped>
@import 'components/item-input';
</style>
