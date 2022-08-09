import { createRouter, createWebHistory, RouteRecordRaw, useRoute} from 'vue-router';
import MdDoc from '../components/MdDoc.vue';
import App from '../App.vue';
import lang from '../language'

let route = useRoute()

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'index',
    component: MdDoc,
  }, {
    path:'/:path/:file',
    component: MdDoc
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router