<script setup lang="ts">
const props = defineProps<{
  seller_name: string
  idNumber: number
  campaign: string
  campaign_logo: string
  platform_logo: string
  platform: string
  list_info: string
  preview_img: string
  status: string
}>()
</script>

<template>
  <div class="l-product-container">
    <div class="left">
      <div class="left-upper">
        <p class="title">
          {{ props.seller_name }}
        </p>
        <div class="buttons">
          <button>
            <ResearchStatusButtonCom icon="r-status-haspotential" :research_status="props.status" />
          </button>
          <button>
            <IdNumberCom :id-number="props.idNumber" />
          </button>
          <button>
            <CampaignButtonCom :campaign="props.campaign" :campaign_logo="props.campaign_logo" />
          </button>
          <button>
            <PlatformButtonCom :platform="props.platform" :platform_logo="props.platform_logo" />
          </button>
        </div>
      </div>
      <div class="left-lower">
        <p>{{ props.list_info }}</p>
      </div>
    </div>
    <div class="right">
      <img :src="props.preview_img" alt="" @error="(event) => event.target.src='/avatar_png/Default-Listing.png'">
    </div>
  </div>
</template>

<style scoped>

.l-product-container {
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  gap: 18px;

  border-bottom: 1px solid #d1d1d1d1;
  padding-bottom: 30px;
  width: 655.5px;
  height: 222.5px;
  margin-top: 36px;
}

.left {
  display: flex;
  align-items: flex-start;
  justify-content: center;
  gap: 26px;
  flex-direction: column;
}

/* left-upper */
.left-upper {
  display: flex;
  align-items: flex-start;
  justify-content: center;
  gap: 5px;
  flex-direction: column;

  max-width: 400px;
  max-height: 60px;
}

.title {
  font-size: 24px;
  font-weight: bold;
  color: #383A3D;
  text-align: left;
  width: 400px;
}

.buttons {
  display: flex;
  align-items: center;
  justify-content: flex-start;
  gap: 4px;
}

/* left-lower */
.left-lower {
  width: 400px;
  height: 100px;

  font-size: 16px;
  color: #383A3D;

  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  overflow: hidden;
}

.left-lower p {
  text-align: left;
}

/* right */

.right {
  width: 234px;
  height: 196px;

  border: 1px solid #70707066;
  border-radius: 6px;
  position: relative;
  overflow: hidden;
}
.right img {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%) scale(1);
  transition: .5s;
}

.right img:hover {
  transform: translate(-50%, -50%) scale(.75);
}

.right:hover {
  border: 1px solid #3B5998;
}
</style>
