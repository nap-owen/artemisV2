<script setup lang="ts">
const props = defineProps<{
  platform: string
  platform_logo: string
}>()
</script>
<template>
  <div class="p-btn-container">
    <img class="p-img" :src="props.platform_logo" alt="">
    <p class="item">
      {{ props.platform }}
    </p>
  </div>
</template>

<style scoped>
.p-btn-container {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 4px;

    padding: 4px;

    border: 1px solid #383A3D26;
    border-radius: 4px;
}
.p-img {
    width: 12px;
    height: 12px;
  border-radius: 1px;
}
.item {
  text-transform: uppercase;
}
</style>
