<template>
  <the-navbar></the-navbar>
  <div class="container with-nav">
    <router-view></router-view>
  </div>
</template>

<script>
import TheNavbar from './components/TheNavbar'
import {mapMutations} from "vuex";


export default {
  components: {TheNavbar},
  methods: {
    ...mapMutations(['loadDataDB']),
  },
  mounted() {
    this.loadDataDB()
  },
}
</script>
