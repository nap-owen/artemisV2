<script setup lang="ts">
import axios from 'axios'
import ProductReview from '~/components/productReviewCom.vue'

const headers = JSON.parse(JSON.parse(localStorage.getItem('lawfirm')).headers)
const campaign = ref()
const results = ref()

const getData = () => {
  axios.get(`${import.meta.env.VITE_VUE_APP_URL}/listings/for_review/main?page_size=50&page=1`, headers)
    .then((response) => {
      results.value = response.data.data.map((r: any) => {
        return {
          company: r.campaign,
          campaign_logo: r.campaign_image,
          platform_logo: r.platform_image,
          list_info: r.listing_info.listing_title,
          id: r.id,
          seller_name: r.seller[0].name,
          seller_: r.seller[0].url,
          product_url: r.url,
          platform: r.platform,

          // evidences preview
          preview_img: `${import.meta.env.VITE_VUE_APP_URL}/files/${r.evidences.preview}`,
        }
      })
    })
    .catch((error) => {
      console.log(error)
    })
    .then(() => {
    })
}

const getCampaignData = () => {
  axios.get(`${import.meta.env.VITE_VUE_APP_URL}/my/campaigns/main?page_size=1000`, headers)
    .then((response) => {
      campaign.value = response.data.data.map((r: any) => {
        return {
          id: r.id,
          campaign_name: r.name,
        }
      })
      // console.log(campaign.value)
    })
    .catch((error) => {
      console.log(error)
    })
    .then(() => {
    })
}

onMounted(() => {
  getCampaignData()
  getData()
})

</script>

<template>
  <ProductReview :campaign="campaign" :results="results" />
</template>

<route lang="yaml">
meta:
  layout: home
</route>
