<script setup lang="ts">
import Aftersearch1 from './aftersearch.vue'

// company: r.campaign,
// campaign_logo: r.campaign_image,
// platform_logo: r.platform_image,
// list_info: r.listing_info.listing_title,
// id: r.id,
// seller_name: r.seller[0].name,

const props = defineProps<{
  // itemSearch: Item
  results: []
  campaign: string
}>()
console.log('sellers')
console.log(props.results)

</script>
<template>
  <body>
    <!-- :search-item="props.itemSearch" -->
    <Aftersearch1 :results="results" />
    <div class="container">
      <h1>Sellers for Review</h1>
      <p>12 Sellers Ready for you to check for Acceptance</p>
      <div class="flex">
        <product
          v-for="(item, index) in props.results"
          :id="item.id" :key="index"
          :platform="item.platform_logo"
          :campaign="item.campaign_logo"
          :list_info="item.list_info"
          :seller="item.seller_name"
          :company_campaign="item.company"
          :campaign_url="item.campaign_url"
          :preview_img="item.preview_img"
        />
      </div>
    </div>
  </body>
</template>

<style scoped>

.container {
  display: flex;
  justify-content: center;
  flex-direction: column;
  text-align: left;
  max-width: 1240px;
  margin: 0 auto;
  color: #383A3D;
  margin-top: 74px;
  padding: 0 10px;
}

.container h1 {
  font-size: 35px;
  font-weight: 900;
}

.container p {
  font-size: 14px;
  font-weight: bold;
}
.flex {
  margin: 56px auto;
  max-width: 1240px;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  align-items: center;
  row-gap: 56px;
  column-gap: 0px;
}

@media screen  and (max-width:1440px) {
  .container{
    padding: 0 16px;
  }
}
@media screen  and (max-width:768px) {
  .container h1{
    font-size: 30px;
  }
  .container p{
    font-size: 12px;
  }
  .container{
    align-items: center;
  }
}
</style>
