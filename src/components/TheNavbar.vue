<template>
<!--todo: доработать мультиязычность интерфейса($forceUpdate на каждой странице, запоминание выбраного языка, немецкий, низпадающий список выбора языков, изменение языка в функциях )-->
  <header class="navbar">
    <h3>Planner</h3>
    <ul class="navbar-menu">
      <li><router-link to='/tasks'>{{$i18n('lng.alltasks')}}</router-link></li>
      <li><router-link to='/new'>{{$i18n('lng.create')}}</router-link></li>
      <li> <button class="btn" @click="changeLangEN"> en</button>
        <button class="btn" @click="changeLangRU">ru</button></li>
    </ul>
  </header>
</template>

<script>
export default {
  inject: ['changeI18N'],
  methods: {
    changeLangEN() {
      this.changeI18N('en')
      this.$forceUpdate()
    },
    changeLangRU() {
      this.changeI18N('ru')
      this.$forceUpdate()
    },
  },
}
</script>

<style scoped>

</style>