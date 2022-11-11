<template>
<!--  <button class="btn primary" @click="changeLangen"> en</button>-->
<!--  <button class="btn primary" @click="changeLangru">ru</button>-->
  <form class="card" @submit.prevent="createT">
    <h1>{{ $i18n('lng.heading')}}</h1>
    <div class="form-control">
      <label for="title">{{ $i18n('lng.title') }}</label>
      <input type="text" id="title"
             v-model="$store.state.title">
    </div>

    <div class="form-control">
      <label for="date">{{ $i18n('lng.deadline')}}</label>
      <input type="date" id="date"
             v-model="$store.state.deadline">
    </div>

    <div class="form-control">
      <label for="description">{{ $i18n('lng.description')}}</label>
      <textarea id="description"
                v-model="$store.state.description">
      </textarea>
    </div>

    <button class="btn primary"
            :disabled="btnDisabled">
      {{ $i18n('lng.create') }}
    </button>
  </form>
</template>

<script>
import {mapActions, mapGetters, mapMutations, mapState} from 'vuex'

export default {
  inject: ['changeI18N'],
  computed: {
    ...mapState(['title']),
    ...mapGetters(['btnDisabled'])
  },
  methods: {
    ...mapMutations(['createTsk']),
    ...mapActions(["submitTaskDB"]),
    createT() {
      this.$router.push('/tasks')
      this.createTsk()
      this.submitTaskDB()
    },

  },
}
</script>

<style scoped>

</style>