<script setup lang="ts">
import { onClickOutside } from '@vueuse/core'
import Footer1 from './Footer.vue'

const props = defineProps<{
  results: []
  campaign: []
}>()

const id = ref()
const seller_url = ref()
const product_url = ref()
const platform_logo = ref()
const seller_name = ref()
const list_info = ref()
const source = ref()
const campaign_logo = ref()
const platform = ref()

const isOpen = ref(false)
const selectedProduct = ref()
const selectedIndex = ref()
const isSelected = ref(false)

const dropdownRef = ref(null)
const modalListing = ref(null)

const selected = (idNumber, s_url, p_url, p_logo, s_name, l_info, p_img, c_logo, p) => {
  id.value = idNumber
  seller_url.value = s_url
  product_url.value = p_url
  platform_logo.value = p_logo
  seller_name.value = s_name
  list_info.value = l_info
  source.value = p_img
  campaign_logo.value = c_logo
  platform.value = p

  isSelected.value = true
  console.log(isSelected.value)
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
</script>

<template>
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
  <div :class="{'overflow': isSelected}" class="nav2">
    <Navbar2Sticky :campaign="campaign" :page-number="1" :results="props.results" />
  </div>
  <div class="list">
    <button v-for="(item, index) in props.results" :key="index" @click="selected(item.id,item.seller_url,item.product_url,item.platform_logo,item.seller_name,item.list_info,item.preview_img,item.campaign_logo, item.platform)">
      <CampaignManagementProductCom
        :id="item.id"
        :seller_url="item.seller_url"
        :product_url="item.product_url"
        :platform_logo="item.platform_logo"
        :seller_name="item.seller_name"
        :list_info="item.list_info"
        :source="item.preview_img"
      />
      <!-- modal -->
    </button>
  </div>
  <div v-if="isSelected" ref="modalListing">
    <ModalListingOverviewCom
      :id-number="id"
      :preview_img="source"
      :platform_logo="platform_logo"
      :seller_url="seller_url"
      :product_url="product_url"
      :seller_name="seller_name"
      :list_info="list_info"
      :campaign_logo="campaign_logo"
      :platform="platform"
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
.nav2.overflow {
  overflow: hidden;
}

/* list */
.list {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 1240px;
  margin: 0 auto;
  flex-wrap:wrap;
  gap: 25px;
  margin-top: 40px;
}

</style>
