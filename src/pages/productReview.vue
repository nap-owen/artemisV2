<script setup lang="ts">
import axios from 'axios'
import ProductReview from '~/components/productReviewCom.vue'
import { useCampaignStore } from '~/stores/campaign'

const campaignStore = useCampaignStore()

const headers = JSON.parse(JSON.parse(localStorage.getItem('lawfirm')).headers)
const campaign = ref()
const results = ref()
const route = useRoute()

const campaign_management = ref()

const campaign_id = computed(() => route.query.campaign_id)

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

const campaign_status = computed(() => campaignStore.status)

const getCampaignManagementData = () => {
  axios.get(`${import.meta.env.VITE_VUE_APP_URL}/listings/${campaign_id.value}/${campaign_status.value}/SearchBy/seller_name/0/with/platforms/0?page=1&page_size=100`, headers)
    .then((response) => {
      campaign_management.value = response.data.data.map((r: any) => {
        return {
          id: r.id,
          campaign_id: r.campaign_id,
          campaign_name: r.campaign,
          status: r.status,

          platform: r.platform,

          seller_name: r.seller[0].name,
          seller_url: r.seller[0].url,

          list_info: r.listing_info.listing_title,

          campaign_image: r.campaign_image,
          platform_image: r.platform_image,

          preview_image: `${import.meta.env.VITE_VUE_APP_URL}/files/${r.evidences.Preview}`,
          product_url: r.url,
        }
      })
      console.log(campaign_management.value)
    })
    .catch((error) => {
      console.log(error)
    })
    .then(() => {
    })
}

watch(() => campaign_id.value, () => {
  getCampaignManagementData()
  console.log(campaign_id.value)
})

watch(() => campaign_status.value, () => {
  getCampaignManagementData()
})

onMounted(() => {
  getCampaignData()
  getData()
  getCampaignManagementData()
})

</script>

<template>
  <ProductReview
    v-if="campaign_management"
    :campaign="campaign"
    :results="results"
    :campaign_management="campaign_management"
    :campaign_id="campaign_id"
  />
</template>

<route lang="yaml">
meta:
  layout: home
</route>
