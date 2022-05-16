<script setup lang="ts">
import axios from 'axios'
import LandingpageCom from '~/components/landingpage-com.vue'
import SellersReview1 from '~/components/sellers-review.vue'

const headers = JSON.parse(JSON.parse(localStorage.getItem('lawfirm')).headers)
const results = ref()

const campaign1 = ref()

const getData = () => {
  axios.get(`${import.meta.env.VITE_VUE_APP_URL}/listings/for_review/main?page_size=100&page=1`, headers)
    .then((response) => {
      results.value = response.data.data.map((r: any) => {
        return {
          company: r.campaign,
          campaign_logo: r.campaign_image,
          platform_logo: r.platform_image,
          list_info: r.listing_info.listing_title,
          id: r.id,
          seller_name: r.seller[0].name,
          campaign_url: r.seller[0].url,

          // evidences preview
          preview_img: `${import.meta.env.VITE_VUE_APP_URL}/files/${r.evidences.preview}`,
        }
      })
      console.log(results.value[0].campaign_logo)
      console.log(response)
    })
    .catch((error) => {
      console.log(error)
    })
    .then(() => {
    })
}

// company: r.campaign,
// campaign_logo: r.campaign_image,
// platform_logo: r.platform_image,
// list_info: r.listing_info.listing_title,
// id: r.id,
// seller_name: r.seller[0].name,

interface Item {
  seller: string
  company: string
  logo: string
}

const var1 = ref<Item>()

onMounted(() => {
  getData()
})
</script>

<template>
  <div>
    <!-- :search-item="var1" -->
    <LandingpageCom :results="results" @click-by="var1=$event" />
    <SellersReview1 :results="results" :campaign="campaign1" />
    <Footer />
  </div>
</template>

<route lang="yaml">
meta:
  layout: home
</route>
