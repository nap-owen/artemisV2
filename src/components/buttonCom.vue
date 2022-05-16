<script setup lang="ts">
const props = defineProps<{
  icon: string
  title: string
}>()
</script>

<template>
  <button class="btn1">
    <p :class="props.icon" />
    <p v-if="title">
      {{ props.title }}
    </p>
  </button>
</template>

<style scoped>
.btn1 {
    display: flex;
    align-items: center;
    justify-content: center;

    background: #FFFFFF;
    color: #383A3D;

    gap: 10px;

    padding: 11px 16px;
    font-size: 14px;

    height: 40px;

    border: 1px solid #70707033;
    border-radius: 20px;
}

.btn1:hover {
    background: #ECF5FF;
    box-shadow: 0px 1px 2px #00000029;
    color: #8B9DC3;
}

.btn1:active,
.btn1:focus,
.btn1:focus-within {
    background: #3B5998;
    color: #FFFFFF;
}
</style>
