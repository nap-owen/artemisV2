import { defineStore } from 'pinia'

export const useCampaignStore = defineStore('campaign', () => {
  const current = reactive({ id: 0, label: '', image: '' })
  const data = ref([])
  const status = ref('qualified')

  const campaign_management = reactive({
    id: 0,

    campaign_id: 0,
    campaign_name: '',
    // status: '',

    platform: '',

    seller_name: '',
    seller_url: '',

    list_info: '',

    platform_image: '',

    preview_image: '',
    product_url: '',
  })

  return {
    current,
    data,
    status,
    campaign_management,
  }
})
