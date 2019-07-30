import Vue from 'vue';
import Vuex from 'vuex';
import { MockedApi } from '@/api';
import { Todo } from '@/models';

import { Actions } from './actions';
import { Mutations } from './mutations';

Vue.use(Vuex);

const mockedApi = new MockedApi();

export default new Vuex.Store({
  state: {
    todos: [] as Todo[],
  },

  mutations: {
    [Mutations.setTodos](state, todos: Todo[]) {
      state.todos = todos;
    },
    [Mutations.addTodo](state, todo: Todo) {
      state.todos.push(todo);
    },
  },
  actions: {
    async [Actions.fetchTodos]({ commit }) {
      const todos = await mockedApi.fetchTodos();
      commit(Mutations.setTodos, todos);
    },
    async [Actions.addTodo]({ commit }, todo: Todo) {
      commit(Mutations.addTodo, todo);
    },
    async [Actions.removeTodos]({ commit, state }, todos: Todo[]) {
      const todosToStay = state.todos.filter(t => !todos.includes(t));
      commit(Mutations.setTodos, todosToStay);
    },
  },
});
