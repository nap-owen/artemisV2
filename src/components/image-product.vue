<!-- image component for the product -->
<script setup lang="ts">
const props = defineProps<{
  platform: string
  campaign: string
  company_campaign: string
  campaign_url: string
}>()

console.log(props.campaign)
</script>
<template>
  <div class="image">
    <a :href="campaign_url" class="img1">
      <img :src="props.platform" alt="">
      <div class="tooltip-div">
        <tooltip id="tooltip1" text="Click to Open Product page" />
      </div>
    </a>
    <div class="img2">
      <img :src="props.campaign" alt="">
      <div class="tooltip-div">
        <tooltip id="tooltip2" :text="props.company_campaign" />
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
