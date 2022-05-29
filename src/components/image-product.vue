<!-- image component for the product -->
<script setup lang="ts">
const props = defineProps<{
  platform: string
  campaign: string
  company_campaign: string
  seller_url: string
  product_url: string
}>()

const ucFirst = (str: string) => {
  if (typeof str !== 'string')
    throw new Error('Given value is not a string')

  return str.charAt(0).toUpperCase() + str.slice(1)
}

const getCampaignImage = (name) => {
  name = ucFirst(name).replace(/\(.+?\)/g, '')
    .replace(/[^a-z0-9+]+/gi, '')
    .replace(/\s/g, '')

  return `https://artemisapi.newalchemysolutions.com/jpg/campaigns/${name}.jpg`
}
</script>
<template>
  <div class="image">
    <a :href="props.product_url" class="img1">
      <img :src="props.platform" alt="">
      <div class="tooltip-div">
        <tooltip id="tooltip1" text="Click to Open Product page" />
      </div>
    </a>
    <div v-if="company_campaign" class="img2">
      <img :src="getCampaignImage(props.campaign)" alt="">
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
  z-index: 99;
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
