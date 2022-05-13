<script setup lang="ts">
import LandingpageCom from '~/components/landingpage-com.vue'
import SellersReview1 from '~/components/sellers-review.vue'

// import { useUserStore } from '~/stores/user'

// const user = useUserStore()
// const name = $ref(user.savedName)

// const router = useRouter()
// const go = () => {
//   if (name)
//     router.push(`/hi/${encodeURIComponent(name)}`)
// }

interface Item {
  seller: string
  company: string
  logo: string
}

const var1 = ref<Item>()

</script>

<template>
  <div>
    <LandingpageCom @click-by="var1=$event" />
    <SellersReview1 :search-item="var1" />
    <Footer />
  </div>
</template>

<route lang="yaml">
meta:
  layout: home
</route>
