<script setup lang="ts">
const props = defineProps<{
  titles: [{}]
}>()
</script>

<template>
  <div class="container">
    <div v-for="(title, index) in props.titles" :key="index" class="item">
      <a href="">{{ title }}</a>
    </div>
  </div>
</template>

<style scoped>
.container {
  display: flex;
  align-items: flex-start !important;
  justify-content: space-evenly;
  flex-direction: column;
  gap: 24px;

  /* max-width:100%; */
  width: max-content;
  height: max-content;
  padding: 24px 15px;
  background: #FFFFFF;
  border: 1px solid #7070703D;
  border-radius: 16px;
}
.item {
  font-size: 14px;
  color: #383A3D;
}

.item:hover {
  color: #8B9DC3;
}
</style>
