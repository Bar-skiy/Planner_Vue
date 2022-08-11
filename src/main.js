import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import './theme.css'
import translatePlugin from "@/translatePlugin";

const ru = {
    lng: {
        create: 'Создать',
        look: 'Посмотреть',
        delete: 'Удалить',
        cancel: 'Отменить',
        tocomplete: 'Завершить',
        takework: 'Взять в работу',
        heading: 'Создать новую задачу',
        title: 'Название',
        deadline: 'Дата дедлайна',
        status: 'Статус',
        description: 'Описание',
        alltasks: 'Все задачи',
        totaltasks: 'Всего задач',
        activetasks: 'Активных задач',
        completedtasks: 'Завершенных задач'

    }
}
const en = {
    lng: {
        create: 'Create',
        look: 'Look',
        delete: 'Delete',
        cancel: 'Cancel',
        tocomplete: 'To complete',
        takework: 'Take to work',
        heading: 'Create a new task',
        title: 'Title',
        deadline: 'Deadline date',
        status: 'Status',
        description: 'Description',
        alltasks: 'All tasks',
        totaltasks: 'Total tasks',
        activetasks: 'Active tasks',
        completedtasks: 'Completed tasks'

    }
}

createApp(App)
    .use(router)
    .use(store)
    .use(translatePlugin, {ru, en})
    .mount('#app')
