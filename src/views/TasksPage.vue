<template>
  <h1 class="text-white center" v-if="!blocks.length">Задач пока нет</h1>
  <div>
    <h3 class="text-white">
      {{ $i18n("lng.totaltasks") }}: {{ counterTask }} /
      {{ $i18n("lng.activetasks") }}: {{ counterProgress }} /
      {{ $i18n("lng.completedtasks") }}: {{ counterFinalize }}
    </h3>

    <div class="card" v-for="block in blocks" :key="block.id">
      <h2 class="card-title up-first">
        {{ block.title }}
        <AppStatus :type="block.valuestatus" :color="block.colorstatus" />
      </h2>
      <p>
        <strong>
          <small>
            {{ block.deadline }}
          </small>
        </strong>
      </p>
      <div class="inline">
        <button class="btn primary" @click="$router.push('/task/' + block.id)">
          {{ $i18n("lng.look") }}
        </button>
        <button class="btn danger" @click="removeT(block)">
          {{ $i18n("lng.delete") }}
        </button>
      </div>
    </div>
  </div>
  <div class="loader" v-if="loading"></div>
</template>

<script>
import { mapState, mapGetters, mapActions } from "vuex";
import AppStatus from "../components/AppStatus";

export default {
  computed: {
    ...mapState(["blocks", "loading"]),
    ...mapGetters(["counterTask", "counterProgress", "counterFinalize"]),
  },
  methods: {
    ...mapActions(["removeTask"]),
    removeT(block) {
      this.removeTask({
        keydb: block.keydb,
      });
    },
  },
  components: { AppStatus },
};
</script>
<style scoped>
.inline {
  display: flex;
  justify-content: space-between;
}
.up-first {
  text-transform: capitalize;
}
</style>