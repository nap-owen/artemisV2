<script setup lang="ts">
const props = defineProps<{
  icon: string
  research_status: string
}>()
</script>

<template>
  <div class="r-status-btn">
    <p class="icon" :class="props.icon" />
    <p class="title">
      {{ props.research_status }}
    </p>
  </div>
</template>

<style scoped>
.r-status-btn {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 4px;
    padding: 4px;
    width: max-content;

    background: #3E88DA;
    border-radius: 4px;
}
.icon,
.title {
  font-size: 10px;
  text-transform: uppercase;
}
</style>
