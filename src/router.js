import Vue from "vue";
import VueRouter from 'vue-router';
import MainPage from '@/pages/MainPage'

Vue.use(VueRouter);

export default new VueRouter ({
  mode: 'history',
  routes: [
    {
      path: '/',
      component: MainPage,
    },
    {
      path: '/photos',
      component: () => import('@/pages/PhotosPage'),
    },
  ],
});