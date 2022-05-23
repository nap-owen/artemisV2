<script setup lang="ts">
const props = defineProps<{
  titles: [{}]
}>()
</script>

<template>
  <div class="container">
    <a v-for="(title, index) in props.titles" :key="index" href="" class="item">
      <p>{{ title }}</p>
    </a>
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
  max-width: auto;
  width: 257px;
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
