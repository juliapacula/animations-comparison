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
      <router-view />
    </div>
  </div>
</template>

<style lang="scss">
@import 'styles';
</style>
