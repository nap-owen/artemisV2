<!-- image component for the product -->
<script setup lang="ts">
const props = defineProps<{
  product1: string
  product2: string
}>()
</script>
<template>
  <div class="image">
    <div class="img1">
      <img :src="`/JPG Campaigns/${props.product1}`" alt="">
      <div class="tooltip-div">
        <tooltip id="tooltip1" text="Click to Open Product page" />
      </div>
    </div>
    <div class="img2">
      <img :src="`/JPG Campaigns/${props.product2}`" alt="">
      <div class="tooltip-div">
        <tooltip id="tooltip2" :text="props.product2" />
      </div>
    </div>
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
.tooltip-div {
  /* min-width: 250px; */
}

.image img {
    width: 36px;
    height: 36px;
    box-shadow: 0px 1px 3px #00000029;
    border-radius: 4px;
}

.image img:hover {
  border: 1px solid #3B5998;
}

#tooltip1,
#tooltip2 {
  display: none;
  margin: 8px auto;
  position: absolute;

  /* min-width: 100px; */
  /* max-width: 250px; */

  text-align: left;
}

.img1:hover #tooltip1,
.img2:hover #tooltip2 {
  display: flex;
}

</style>
