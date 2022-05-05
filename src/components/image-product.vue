<!-- image component for the product -->
<script setup lang="ts">
const props = defineProps<{
  product1: string
  product2: string
}>()
</script>
<template>
  <div class="image">
    <img :src="`/JPG Campaigns/${props.product1}`" alt="">
    <img :src="`/JPG Campaigns/${props.product2}`" alt="">
  </div>
</template>

<style scoped>
.image {
    display: flex;
    align-items: flex-start;
    justify-content: center;
    flex-direction: column;
    gap: 6px;

}

.image img {
    width: 36px;
    height: 36px;
    box-shadow: 0px 1px 3px #00000029;
    border-radius: 4px;
}
</style>
