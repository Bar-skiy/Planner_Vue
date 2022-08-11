import { createRouter, createWebHistory } from 'vue-router'
import TasksPage from "@/views/TasksPage";
import NewPage from "@/views/NewPage";
import TaskPage from "@/views/TaskPage";
import NotFound from "@/views/NotFound";


const routes = [
  {path: '/tasks', component: TasksPage, alias: '/'},
  {path: '/new', component: NewPage},
  {path: '/task/:taskId?', component: TaskPage},
  {path: '/:notFound(.*)', component: NotFound},
]

const router = createRouter({
  history: createWebHistory(),
  routes,
  linkActiveClass: 'active',
  linkExactActiveClass: 'active',
})
export default router
