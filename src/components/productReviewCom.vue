<script setup lang="ts">
import { onClickOutside } from '@vueuse/core'
import Footer1 from './Footer.vue'
import { useCampaignStore } from '~/stores/campaign'

const props = defineProps<{
  results: []
  campaign: []
  campaign_management: []
  campaign_name: string
  campaign_id: number
}>()
const campaignStore = useCampaignStore()

const campaign_management = computed(() => props.campaign_management)
const campaign_id = ref()
const campaign_name = ref()
const campaign_image = ref()
const campaign_status = ref()

const getData = () => {
  for (const item in props.campaign_management) {
    campaign_id.value = campaign_management.value[item].campaign_id
    campaign_name.value = campaign_management.value[item].campaign_name
    campaign_image.value = campaign_management.value[item].campaign_image
    campaign_status.value = campaign_management.value[item].status

    campaignStore.current.id = campaign_id.value
    campaignStore.current.label = campaign_name.value
    campaignStore.current.image = campaign_image.value
  }
}

watch(() => campaign_management.value, () => {
  for (let i = 0; i < 1; i++) {
    campaign_id.value = campaign_management.value[i]?.campaign_id
    campaign_name.value = campaign_management.value[i]?.campaign_name
    campaign_image.value = campaign_management.value[i]?.campaign_image
    campaign_status.value = campaign_management.value[i]?.status
    if (campaign_id.value !== undefined) {
      campaignStore.current.id = campaign_id.value
      campaignStore.current.label = campaign_name.value
      campaignStore.current.image = campaign_image.value

      campaignStore.campaign_management.id = campaign_management.value[i].id
      campaignStore.campaign_management.campaign_id = campaign_id.value
      campaignStore.campaign_management.campaign_name = campaign_name.value
      campaignStore.campaign_management.platform = campaign_management.value[i].platform
      campaignStore.campaign_management.seller_name = campaign_management.value[i].seller_name
      campaignStore.campaign_management.seller_url = campaign_management.value[i].seller_url
      campaignStore.campaign_management.list_info = campaign_management.value[i].list_info
      campaignStore.campaign_management.platform_image = campaign_management.value[i].platform_image
      campaignStore.campaign_management.preview_image = campaign_management.value[i].preview_image
      campaignStore.campaign_management.product_url = campaign_management.value[i].product_url
    }
  }
})

// watch(() => campaign_status.value, () => {

// })

const id = ref()
const seller_url = ref()
const product_url = ref()
const platform_logo = ref()
const seller_name = ref()
const list_info = ref()
const source = ref()
const campaign_logo = ref()
const platform = ref()
const company = ref()
const c_status = ref()

const isOpen = ref(false)
const isSelected = ref(false)

const dropdownRef = ref(null)
const modalListing = ref(null)

const selected = (idNumber, s_url, p_url, p_logo, s_name, l_info, p_img, c_logo, p, company_cam, status) => {
  id.value = idNumber
  seller_url.value = s_url
  product_url.value = p_url
  platform_logo.value = p_logo
  seller_name.value = s_name
  list_info.value = l_info
  source.value = p_img
  campaign_logo.value = c_logo
  platform.value = p
  company.value = company_cam
  c_status.value = status
}

onClickOutside(
  dropdownRef,
  (event) => {
    isOpen.value = false
  },
)

onClickOutside(
  modalListing,
  (event) => {
    isSelected.value = false
  },
)

onMounted(() => {
  getData()
})
</script>

<template ref="el">
  <div class="nav" :class="{'overflow': isSelected}">
    <div class="flex1">
      <img src="artemis_login_svg/CM_Logo.svg" alt="">
      <p> ARTEMIS CM</p>
      <p>| Campaign Management</p>
    </div>
    <div class="flex2">
      <p id="browse">
        Browse Cases
      </p>
      <div class="icon1">
        <a id="icon1" href="" class="r-appbar-counterfeitchecker" />
        <Tooltip id="tooltip1" text="Access Counterfeit Checker" />
      </div>
      <div class="icon2">
        <a id="icon2" href="" class="r-appbar-spg" />
        <Tooltip id="tooltip2" text="Submissions Pack Monitoring Page" />
      </div>
      <div class="icon3">
        <a id="icon3" href="" class="r-appbar-reportbug" />
        <Tooltip id="tooltip3" text="Report a Bug" />
      </div>
      <a id="icon4" href="" class="r-appbar-notification" />
      <div id="dropdown-container" ref="dropdownRef" style="position: relative">
        <button class="flex" @click="isOpen = !isOpen">
          <p id="burger">
            ☰
          </p>
          <img id="avatar_img" src="avatar_png/Profile2.png" alt="">
          <menuDropdown-navbar :is-open="isOpen" />
        </button>
      </div>
    </div>
  </div>
  <hr>
  <div class="nav2">
    <Navbar2Sticky
      :status="campaign_status"
      :campaign_management="props.campaign_management"
      :campaign_image="campaign_image"
      :campaign_name="campaign_name"
      :campaign_id="campaign_id"
      :campaign="campaign"
      :page-number="1"
      :results="props.results"
      @isClickStatus="(n) => campaign_status=n"
    />
  </div>
  <div class="list" :class="{'overflow': isSelected}">
    <CampaignManagementProductCom
      v-for="(item, index) in props.campaign_management" :id="item.id" :key="index"
      :seller_url="item.seller_url"
      :product_url="item.product_url"
      :platform_logo="item.platform_image"
      :seller_name="item.seller_name"
      :list_info="item.list_info"
      :source="item.preview_image"
      :status="item.status"
      :total-index="index"
      @click="selected(item.id,item.seller_url,item.product_url,item.platform_image,item.seller_name,item.list_info,item.preview_image,item.campaign_image, item.platform, item.campaign_name, item.status)"
      @isSelected="(n: boolean) => isSelected=n"
    />
    <!-- modal -->
  </div>
  <div v-if="isSelected" ref="modalListing">
    <ModalListingOverviewCom
      :id-number="id"
      :preview_img="source"
      :platform_logo="platform_logo"
      :seller_url="seller_url"
      :product_url="product_url"
      :seller_name="seller_name"
      :campaign="company"
      :list_info="list_info"
      :campaign_logo="campaign_logo"
      :platform="platform"
      :status="campaign_status"
      :is-click="isSelected" @clickBy="(n: boolean) => isSelected=n"
    />
  </div>
  <div
    :class="{'overflow': isSelected}"
  >
    <Footer1 />
  </div>
</template>

<style scoped>

hr {
  color: #707070;
  opacity: 20%;
}

/* tooltip styles */
#tooltip1,
#tooltip2,
#tooltip3 {
  display: none;
  margin: 10px auto;
  position: absolute;
  z-index: 3;
}
/* ---------------- */

/* div tooltip */
.icon1:hover #tooltip1,
.icon2:hover #tooltip2,
.icon3:hover #tooltip3 {
  display: flex;
}

/* ----------------- */

/* nav */
.nav {
  display: flex;
  justify-content: space-between;
  align-items: center;

  max-width: 1240px;
  margin: 0 auto;

  padding: 20px;
}
.nav.overflow {
  overflow: hidden;
}

/* flex1 */
.flex1 {
  display: flex;
  justify-content:center;
  align-items: center;
  gap: 8px;
}

.flex1 p {
  font-size: 16px;
  color: #3B5998;
  font-weight: bold;
  letter-spacing: 1.28px;
}

/* flex2 */

.flex2 {
  display: flex;
  justify-content: center;
  align-items: center;
}

#browse {
  display: flex;
  justify-content: center;
  align-items: center;

  padding: 11px 15px;

  width: 123px;
  height: 40px;
  color: #383A3D;

  font-size: 14px;
  font-weight: bold;
}

#browse:hover {
  color: #ADBBD8;
  background: #ECF5FF;
  border-radius: 20px;
}

.flex2 #icon1,
.flex2 #icon2,
.flex2 #icon3,
.flex2 #icon4{
  display:flex;
  justify-content: center;
  align-items: center;
  width: 40px;
  height: 40px;
}

.flex2 #icon1:hover,
.flex2 #icon2:hover,
.flex2 #icon3:hover,
.flex2 #icon4:hover{
  background:#ECF5FF;
  color: #ADBBD8;
  border-radius: 50%;
}

.flex2 #icon1,
.flex2 #icon2 {
  transform: scale(1);
}

.flex2 #icon1:hover,
.flex2 #icon2:hover {
  transform: scale(1.2);
}

.flex2 #icon3:hover,
.flex2 #icon4:hover {
  transform: rotate(45deg)
}

/* dropdown container */
#dropdown-container{
  width: 80px;
  height: 40px;
  border-radius: 20px;
  border: 1px solid #70707033;

  margin-left: 20px;

  display: flex;
  align-items: center;
  justify-content: center;

}

#dropdown-container:hover {
  background: #ECF5FF;
  box-shadow: 0px 1px 2px #00000029;
  color: #ADBBD8;
}

#dropdown-container:hover img {
  opacity: 50%;
}

#dropdown-container:active,
#dropdown-container:focus-within {
  background: #3B5998;
  color: #FFFFFF;
  opacity: 100%;
}

#avatar_img {
  width: 30px;
  height: 30px;
  border-radius: 50%;
  border: 1px solid #EB77408C;
  margin-right: 8px;
}

#burger {
  font-weight: bold;
  margin-left: 15px;
}

.flex {
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 80px;
  height: 40px;
}

/* nav 2 */

.nav2 {
  position: sticky;
  top: 0;
  z-index: 2;
  background: #FFFFFF;
}

.nav2.background-shadow {
  box-shadow: 0px 1px 2px #00000029;
}

/* list */
.list {
  /* display: flex;
  align-items: center;
  justify-content: center; */
  display: grid;
  grid-template-columns: 281px 281px 281px 281px;
  justify-content: center;
  gap: 25px;
  width: 1240px;
  margin: 0 auto;
  padding-top: 40px;
}

.list.overflow {
  overflow: hidden;
  height: 0;
}

</style>
