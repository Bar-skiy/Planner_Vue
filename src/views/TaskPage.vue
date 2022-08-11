<template>
  <div class="card">
    <h2 class="up-first"> {{ block.title }} </h2>
    <p><strong>{{ $i18n('lng.status')}} </strong>:
      <AppStatus :type="block.valuestatus"
                 :color="block.colorstatus"
      />
    </p>
    <p><strong>{{ $i18n('lng.deadline')}}</strong>: {{ block.deadline }} </p>
    <p><strong>{{ $i18n('lng.description')}}</strong>: {{ block.description }}</p>
    <div>
      <button class="btn" @click="inProgress(block)">{{ $i18n('lng.takework')}}</button>
      <button class="btn primary" @click="finalizeTask(block)">{{ $i18n('lng.tocomplete')}}</button>
      <button class="btn danger" @click="canceledTask(block)">{{ $i18n('lng.cancel')}}</button>
      <!--      todo: добавить кнопку дублирования задачи-->
      <!--      todo: добавить кнопку редактирование задачи-->

    </div>
  </div>
  <h3 class="text-white center"
      v-if="havingTask === false">
    Задачи с id = <strong>{{ routeTask }}</strong> нет.
  </h3>
</template>
<!--todo: исправить ошибку отрисовки страницы TaskPage при перезагрузке данных c DB -->
<script>
import AppStatus from '../components/AppStatus'
import {mapState, mapMutations} from "vuex";

export default {
  components: {AppStatus},
  computed: {
    ...mapState(['blocks']),
    routeTask() {
      return this.$route.params.taskId
    },
     block() {
      return this.blocks.find(b => b.id === Number(this.routeTask))
    },
    havingTask() {
      return this.block.id === Number(this.routeTask)
    },
  },
  methods: {
    ...mapMutations(['submitStatusDB']),
   inProgress(block) {
     this.submitStatusDB({
        keydb: block.keydb,
        value: 'в процессе',
        color: 'badge warning',
        id: this.routeTask,
      })
    },
    finalizeTask(block) {
      this.submitStatusDB({
        keydb: block.keydb,
        value: 'завершено',
        color: 'badge primary',
        id: this.routeTask
      })
    },
    canceledTask(block) {
      this.submitStatusDB({
        keydb: block.keydb,
        value: 'отменено',
        color: 'badge danger',
        id: this.routeTask
      })
    },
  },
}
</script>

<style scoped>
.up-first {
  text-transform: capitalize;
}
</style>