import { createRouter, createWebHistory } from 'vue-router';
import Home from './views/Home.vue';
import Magazine from './views/Magazine.vue';
import Podcast from './views/Podcasts.vue';
import PodcastPost from './views/PodcastPost.vue';
import MagazinePost from './views/MagazinePost.vue';
import AuthorPost from './views/AuthorPost.vue';
import Authors from './views/Authors.vue';

const routes = [
  { path: '/',name: 'Home', component: Home  },
  { path: '/magazine', name: 'Magazine', component: Magazine },
  { path: '/podcast', name: 'Podcast', component: Podcast },
  { path: '/podcast-post', name: 'Podcast-post', component: PodcastPost },
  { path: '/magazine-post', name: 'Magazine-post', component: MagazinePost },
  { path: '/author-post', name: 'Author-post', component: AuthorPost },
  { path: '/authors', name: 'Authors', component: Authors },


];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;