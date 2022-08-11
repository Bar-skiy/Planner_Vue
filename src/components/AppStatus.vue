<template>
  <span :class="color">{{ type }}</span>
</template>

<script>
export default {
  props: [ 'type','color']
  }
</script>