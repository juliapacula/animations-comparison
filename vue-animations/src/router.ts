import Vue from 'vue';
import Router from 'vue-router';
import Home from './views/Home.vue';
import About from './views/About.vue';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home,
      meta: {
        tab: 'left',
      },
    },
    {
      path: '/about',
      name: 'about',
      component: About,
      meta: {
        tab: 'right',
      },
    },
  ],
});
