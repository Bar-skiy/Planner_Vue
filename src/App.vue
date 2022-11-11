<template>
  <the-navbar></the-navbar>
  <div class="container with-nav">
    <router-view></router-view>
  </div>
</template>

<script>
import TheNavbar from "./components/TheNavbar";
import { mapActions } from "vuex";

export default {
  components: { TheNavbar },
  methods: {
    ...mapActions(["loadDataDB"]),
  },
  mounted() {
    this.loadDataDB();
  },
};
</script>
