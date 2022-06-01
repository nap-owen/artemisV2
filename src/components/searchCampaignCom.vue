<script setup lang="ts">

const props = defineProps<{
  results: []
  campaign: []
}>()

const campaign_text = ref('')
const campaignFiltered = computed(() => campaign_text.value ? props.campaign.filter(r => r.campaign_name.toLowerCase().includes(campaign_text.value.toLowerCase())) : props.campaign)
const menuSelected = ref()

const router = useRouter()

const campaign_menu = [{
  menu: 'Go to Listings',
}, {
  menu: 'Go to Cases',
}]

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
  <div class="search-campaign-dropdown">
    <div class="search-campaign">
      <input v-model="campaign_text" type="text" placeholder="Search Campaign">
      <button class="r-appbar-search" />
    </div>
    <a class="search-campaign-box">
      <div v-for="(campaign_item, index2) in campaignFiltered" :key="index2" class="search-campaign-item" @click="menuSelected = index2">
        <img :src="getCampaignImage(campaign_item.campaign_name) " alt="">
        <p>{{ campaign_item.campaign_name }}</p>
        <div v-if="menuSelected == index2" class="campaign-sub-dropdown">
          <a v-for="(item,index) in campaign_menu" :key="index" class="campaign-sub-item" @click="router.push({path: '/productReview', query: {campaign_id: `${campaign_item.id}`}});$emit('clickBy', campaign_item.campaign_name);$emit('clickBy2', campaign_item.id)">{{ item.menu }}</a>
        </div>
      </div>
    </a>
  </div>
</template>

<style scoped>
.search-campaign-dropdown {
  width: 320px;
  height: 345px;

  display: flex;
  align-items: center;
  justify-content: flex-start;
  flex-direction: column;
  padding: 22px 16px;

  background: #FFFFFF;
  border: 1px solid #7070703D;
  border-radius: 16px;
  gap: 23px;

  overflow: visible;
}

.search-campaign {
  width: 285px;
  height: 38px;

  display: flex;
  align-items: center;
  justify-content: space-between;
  padding-left: 16px;
  padding-top: 10px;
  padding-bottom: 10px;
  padding-right: 12px;
  font-size: 14px;

  border: 1px solid #DEDEDF;
  border-radius: 4px;
  color: #383A3D;
}

.search-campaign:hover {
  color: #3E88DA;
}

.search-campaign input {
  outline: none;
  border: none;
  width: 88%;
}

.search-campaign-box {
  display: flex;
  justify-content: flex-start;
  flex-direction: column;
  align-items: center;
  gap: 8px;
  overflow: scroll;

  -ms-overflow-style: none;  /* IE and Edge */
  scrollbar-width: none;  /* Firefox */
  padding: 5px 16px;
  width: 740px;
  min-height: 110px;

  position: relative;
  cursor: pointer;
}

.search-campaign-box::-webkit-scrollbar {
    display: none;
}

.search-campaign-item {
  width: 285px;
  height: 40px;
  font-size: 14px;
  font-weight: bold;

  display: flex;
  align-items: center;
  justify-content: flex-start;
  padding: 5px 12px;

  gap: 16px;

}

.search-campaign-item:hover {
  background: #ECF5FF;
  border-radius: 20px;
  color: #3B5998;
}

.search-campaign-item img {
  width: 30px;
  height: 30px;
  border-radius: 50%;
}

.search-campaign-item p {
  text-overflow: ellipsis;
  overflow: hidden;
  white-space: nowrap;
}

/* campaign sub dropdown */

.campaign-sub-dropdown {
  position: absolute;

  width: 180px;
  height: 107px;

  display: flex;
  align-items: flex-start;
  justify-content: space-evenly;
  flex-direction: column;

  background: #FFFFFF;
  border-radius: 16px;
  border: 1px solid #7070703D;
  padding: 0 16px;

  font-size: 14px;
  left: 73%;
  margin-top: 65px;
}

.campaign-sub-item {
  cursor: pointer;
}
</style>
