<script setup lang="ts">
const props = defineProps<{
  idNumber: number
  text: string
}>()
</script>

<template>
  <div class="idNumber">
    <p v-if="idNumber">
      {{ props.idNumber }}
    </p>
    <p v-else>
      {{ props.text }}
    </p>
  </div>
</template>

<style scoped>
    .idNumber {
        width: auto;
        height: 20px;

        display: flex;
        align-items: center;
        justify-content: center;
        border-radius: 4px;
        background: #c0dfff;

        padding: 4px;
    }

    .idNumber p {
        font-weight: bold;
        color: #2D599E;
        opacity: 100%;
        font-size: 10px;
    }
</style>
