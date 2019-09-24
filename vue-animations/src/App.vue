<template>
  <div
    id="app"
    :class="[darkMode ? 'dark': 'light']">
    <div class="navbar navbar-expand justify-content-between">
      <ul class="navbar-nav">
        <li class="nav-item">
          <router-link
            class="nav-link"
            to="/">Dashboard
          </router-link>
        </li>
        <li class="nav-item">
          <router-link
            class="nav-link"
            to="/about">About
          </router-link>
        </li>
      </ul>
      <button
        class="btn btn-fab btn-outline-primary"
        @click="darkMode = !darkMode">
        <span
          :class="[darkMode ? 'mdi-weather-night' : 'mdi-weather-sunny']"
          class="mdi"></span>
      </button>
    </div>
    <div class="container">
      <transition :name="transitionName">
        <router-view />
      </transition>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';

export default Vue.extend({
  name: 'app',
  data() {
    return {
      transitionName: 'slide',
      darkMode: true,
    };
  },
  created(): void {
    this.$router.beforeEach((to, from, next) => {
      this.transitionName = from.meta.tab ? `slide-${from.meta.tab}` : 'slide';
      next();
    });
  },
  watch: {
    darkMode: {
      handler(changedToDarkMode) {
        const { body } = document;

        if (changedToDarkMode) {
          body.classList.add('dark');
        } else {
          body.classList.remove('dark');
        }
      },
      immediate: true,
    },
  },
});
</script>

<style lang="scss">
@import 'styles';
</style>
