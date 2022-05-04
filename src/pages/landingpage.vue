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

</script>

<template>
  <div>
    <LandingpageCom />
    <SellersReview1 />
    <Footer />
  </div>
</template>

<route lang="yaml">
meta:
  layout: home
</route>
