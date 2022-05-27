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
    height: 20px;

    background: #3E88DA;
    border-radius: 4px;
    color: #FFFFFF;
}
.icon,
.title {
  font-size: 10px;
  text-transform: uppercase;
  font-family: ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji";
}
</style>
