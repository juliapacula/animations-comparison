<template>
  <div id="app">
    <div class="navbar navbar-expand navbar-dark bg-dark">
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
    };
  },
  created(): void {
    this.$router.beforeEach((to, from, next) => {
      this.transitionName = from.meta.tab ? `slide-${from.meta.tab}` : 'slide';
      next();
    });
  },
});
</script>

<style lang="scss">
@import 'styles';
</style>
