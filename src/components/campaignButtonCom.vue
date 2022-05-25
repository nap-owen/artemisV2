<script setup lang="ts">
const props = defineProps<{
  campaign: string
  campaign_logo: string
}>()
</script>

<template>
  <div class="c-btn-container">
    <img :src="props.campaign_logo" alt="" class="c-img">
    <p class="item">
      {{ props.campaign }}
    </p>
  </div>
</template>

<style scoped>
.c-btn-container {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 4px;

    padding: 4px;

    border-radius: 4px;
    border: 1px solid #383A3D26;

    background: #FFFFFF;

    font-size: 10px;

    width: max-content;
}
.c-img {
  width: 12px;
  height: 12px;
  border-radius: 1px;
}
.item {
  text-transform: uppercase;
}
</style>
