<script setup lang="ts">
import { useScroll } from '@vueuse/core'

const el = ref<HTMLElement | null>(null)
const { x, y } = useScroll(el)

const isOpen = ref(false)

const payment_clicked = ref(-1)

const props = defineProps<{
  isClick: boolean

  seller_name: string
  idNumber: number
  campaign: string
  campaign_logo: string
  platform_logo: string
  platform: string
  list_info: string
  preview_img: string
  product_url: string
  seller_url: string
  status: string
}>()

const items = [{
  hist_date: 'Dec 5, 2020',
  hist_r_name: 'Researcher name',
  hist_update_from: 'Submitted',
  hist_update_to: 'Has Potential',
  hist_status: 'r-status-haspotential',
}, {
  hist_date: 'Dec 5, 2020',
  hist_r_name: 'Researcher name',
  hist_update_from: 'Submitted',
  hist_update_to: 'Has Potential',
  hist_status: 'r-status-haspotential',
}, {
  hist_date: 'Dec 5, 2020',
  hist_r_name: 'Researcher name',
  hist_update_from: 'Submitted',
  hist_update_to: 'Has Potential',
  hist_status: 'r-status-haspotential',
}, {
  hist_date: 'Dec 3, 2020',
  hist_r_name: 'Researcher name',
  hist_update_from: 'Accepted',
  hist_update_to: 'Submitted',
  hist_status: 'r-status-submitted',
}, {
  hist_date: 'Dec 1, 2020',
  hist_r_name: 'Researcher name',
  hist_update_from: 'For Review',
  hist_update_to: 'Accepted',
  hist_status: 'r-status-accepted',
}, {
  hist_date: 'Nov 26, 2020',
  hist_r_name: 'Researcher name',
  hist_update_from: 'Qualified',
  hist_update_to: 'For Review',
  hist_status: 'r-status-forreview',
}, {
  hist_date: 'Nov 15, 2020',
  hist_r_name: 'Researcher name',
  hist_update_from: 'For Review',
  hist_update_to: 'For Internal Review',
  hist_status: 'r-status-for-internal',
}]

const evidence_items = [{
  icon: 'r-product-claimtype',
  title: 'Trademark (Standard)',
  type: 'Claim Type',
}, {
  icon: 'r-product-itemtype',
  title: 'Class 25 - Clothing',
  type: 'Item Type',
}, {
  icon: 'r-product-transact-history',
  title: 'Q1W2E3R4T5Y6A7S8D9',
  type: 'Transaction History',
}, {
  icon: 'r-product-dummy',
  title: 'qwerty asdfgh',
  type: 'Dummy Account Used',
}]

const infringement_items = [{
  icon: 'r-product-infringement',
  desc: 'Item is from China',
}, {
  icon: 'r-product-infringement',
  desc: 'Bad reviews on customer\'s buying experience',
}, {
  icon: 'r-product-infringement',
  desc: 'Suspicious product description',
}]

const seller_items = [{
  icon: 'r-product-seller',
  title: 'Seller Name',
}, {
  icon: 'r-product-seller',
  title: 'Alias',
}, {
  icon: 'r-product-mobile',
  title: '09123456789',
}, {
  icon: 'r-product-phone',
  title: '232-1234',
}, {
  icon: 'r-product-email',
  title: 'selleremail@gmail.com',
}, {
  icon: 'r-product-date',
  title: 'March 30, 2021',
}, {
  icon: 'r-product-vpn',
  title: 'VPN here',
}, {
  icon: 'r-product-conversation',
  title: 'Conversation Method',
}, {
  icon: 'r-product-address',
  title: 'Zhi Fu Tun Lu 65-6hao Si Lou Kai Di Gong Si',
}, {
  icon: 'r-product-country',
  title: 'Shandong, China',
}]

const payment_accs = [{
  img: 'artemis_login_svg/Logo.svg',
  title: 'Paypal',
  email: 'thisisemail@paypal.com',
  ref_code: '*5d3ebd3570327a308efcdacf',
}, {
  img: 'artemis_login_svg/Logo.svg',
  title: 'Wish',
  email: 'thisisemail@wish.com',
  ref_code: '*5d3ebd3570327a308efcdacf',
}, {
  img: 'artemis_login_svg/Logo.svg',
  title: 'Alipay',
  email: 'thisisemail@alipay.com',
  ref_code: '*5d3ebd3570327a308efcdacf',
}]

const purchase_brand = [{
  icon: 'r-product-brand-name',
  desc1: 'Brand Name is ',
  visibility: 'visible',
  desc2: ' on Item Image',
}, {
  icon: 'r-product-logo',
  desc1: 'Logo is ',
  visibility: 'not visible',
  desc2: ' on Item Image',
}]

const purchase_details = [{
  icon: 'r-product-purchase-type',
  desc: 'No need to purchase',
  type: 'Purchase Type',
}, {
  icon: 'r-product-platform',
  desc: 'Platform',
  type: 'Payment Platform',
}, {
  icon: 'r-product-transact-number',
  desc: 'A9B2C3D4E5F6G7',
  type: 'Transaction Number',
}, {
  icon: 'r-product-purchase-price',
  desc: '600 $USD',
  type: 'Purchase Price',
}, {
  icon: 'r-product-location',
  desc: 'China',
  type: 'Listing Location',
}, {
  icon: 'r-product-shipping',
  desc: 'Illinois',
  type: 'Shipping Location',
}]

const clicked = ref(props.isClick)

</script>
<template>
  <!-- the background -->
  <div class="modal-container">
    <!-- the inside container -->

    <!-- navbar -->
    <div v-if="y>=0 && y<100" class="nav">
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
    <div v-else class="nav2">
      <a class="nav2-item" href="">Main Info</a>
      <a class="nav2-item" href="">Infringement</a>
      <a class="nav2-item" href="">Seller Info</a>
      <a class="nav2-item" href="">Payment Accounts</a>
      <a class="nav2-item" href="">Purchase Details</a>
    </div>
    <hr>
    <div class="inside-container">
      <div ref="el" class="left">
        <ListingOverviewProductCom
          :id-number="props.idNumber"
          :seller_name="props.seller_name"
          :campaign="props.campaign"
          :campaign_logo="props.campaign_logo"
          :platform_logo="props.platform_logo"
          :platform="props.platform"
          :list_info="props.list_info"
          :preview_img="props.preview_img"
          :status="props.status"
        />
        <!-- evidence -->
        <div class="evidence-container">
          <div class="evidence-top">
            <div class="evidence-top-top">
              <p class="r-upload-file" />
              <p>Evidence</p>
            </div>
            <p class="evidence-top-item">
              In case the product and store pages are no longer available, you can check this captured evidence.
            </p>
          </div>
          <div class="evidence-bottom">
            <div v-for="(item,index) in evidence_items" :key="index" class="evidence-bottom-item">
              <p :class="item.icon" class="bottom-icon" />
              <div class="bottom-item-right">
                <p class="bottom-item-title">
                  {{ item.title }}
                </p>
                <p class="bottom-item-subtitle">
                  {{ item.type }}
                </p>
              </div>
            </div>
          </div>
        </div>
        <!-- Infringement Indicators -->
        <div class="infringement-container">
          <p class="infringement-title">
            Infringement Indicators
          </p>
          <div v-for="(item, index) in infringement_items" :key="index" class="infringement-item">
            <p class="infringement-icon" :class="item.icon" />
            <p>{{ item.desc }}</p>
          </div>
        </div>
        <!-- Seller Information -->
        <div class="seller-container">
          <div class="seller-top">
            <p>Seller Information</p>
            <IdNumberCom text="WILL SHIP TO US" />
          </div>
          <div class="seller-bottom">
            <div v-for="(item,index) in seller_items" :key="index" class="seller-item">
              <p class="seller-icon" :class="item.icon" />
              <p>{{ item.title }}</p>
            </div>
          </div>
        </div>
        <!-- Payment Accounts -->
        <div class="payment-container">
          <p class="payment-title">
            Payment Accounts
          </p>
          <div class="payment-bottom">
            <div class="payment-bottom-item-container">
              <div v-for="(item, index) in payment_accs" :key="index" :class="{'isSelected': !index}" class="payment-bottom-item">
                <p v-if="index==0" class="r-product-main-account payment-icon" />
                <div class="payment-item2">
                  <img :src="item.img" alt="Payment Logo" class="payment-logo">
                  <p class="payment-bottom-title">
                    {{ item.title }}
                  </p>
                  <p class="payment-bottom-sub">
                    {{ item.email }}
                  </p>
                  <p class="payment-bottom-sub">
                    {{ item.ref_code }}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <!-- Purchase Details -->
        <div class="purchase-container">
          <div class="purchase-title">
            Purchase Details
          </div>
          <div class="purchase-price-container">
            <p class="r-product-price purchase-icon" />
            <p class="purchase-price">
              Price
            </p>
            <p class="purchase-currency">
              $ USD
            </p>
            <p>/ piece</p>
          </div>
          <div class="purchase-item-container">
            <div v-for="(item, index) in purchase_brand" :key="index" class="purchase-item1">
              <p class="purchase-item-icon" :class="item.icon" />
              <div class="purchase-item1-item">
                <p>{{ item.desc1 }}</p>
                <p class="visible">
                  {{ item.visibility }}
                </p>
                <p>{{ item.desc2 }}</p>
              </div>
            </div>
            <div v-for="(item, index) in purchase_details" :key="index" class="purchase-item2">
              <p class="purchase-item-icon" :class="item.icon" />
              <div class="purchase-item2-item">
                <p class="purchase-item2-desc">
                  {{ item.desc }}
                </p>
                <p class="purchase-item2-type">
                  {{ item.type }}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <!-- right -->
      <div class="right">
        <div class="right-top">
          <p>Status History</p>
          <button class="right-top-btn" @click="clicked=false; $emit('clickBy', clicked)">
            <p class="r-product-close" />
            <p>Close Overview</p>
          </button>
        </div>
        <div class="right-middle">
          <div v-for="(item, index) in items" :key="index" class="history-container">
            <div class="vertical-line" />
            <div :class="item.hist_status" class="history-bullet" />
            <div class="history-item">
              <p class="history-item-date">
                {{ item.hist_date }}
              </p>
              <p class="history-item-name">
                {{ item.hist_r_name }}
              </p>
              <p class="history-item-action">
                Updated Status from <strong>{{ item.hist_update_from }}</strong>  to <strong>{{ item.hist_update_to }}</strong>
              </p>
            </div>
          </div>
        </div>

        <div class="right-bottom">
          <button class="right-bottom-btn">
            Change Status
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.modal-container {
  position: fixed;
  top:0;
  left:0;
  right:0;
  z-index: 2;
  height: 100%;
  width: 100%;
  background: #FFFFFF;
  /* overflow: hidden; */
}

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
  background: #FFFFFF;

  /* border-bottom: 1px solid #e7e7e7; */
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

/* nav2 */
.nav2 {
    display: flex;
    justify-content: flex-start;
    align-items: center;
    gap: 20px;
    margin: 0 auto;
    max-width: 1240px;
    padding: 0 20px;
    position: sticky;
}

.nav2-item {
  font-size: 14px;
  font-weight: bold;
  padding: 30px 0;
}
.nav2-item:hover{
  border-bottom: 2px solid #3B5998;
  color: #3B5998;
}

/* inside container */

.inside-container {
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  padding: 0 20px;
  max-width: 1240px;
  /* width: 100%; */
  margin: 0 auto;
  height: 100vh;
}

/* left */
.left {
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
  flex-direction: column;
  margin-top: 36px;

  width: 60%;
  height: 80vh;
  overflow: scroll;

  -ms-overflow-style: none;  /* IE and Edge */
  scrollbar-width: none;  /* Firefox */
}
.left::-webkit-scrollbar {
  display: none;
}

/* evidence */
.evidence-container {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 40px;

  padding-top: 40px;

  border-bottom: 1px solid #d1d1d1d1;
  padding-bottom: 40px;
}

/* evidence-top */
.evidence-top {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  gap: 22px;

  width: 653px;
  height: 132px;

  border: 1px solid #83828233;
  border-radius: 12px;
  padding: 0 25px;
}

.evidence-top-top {
  display: flex;
  align-items: center;
  justify-content: flex-start;
  gap: 18px;
  font-size: 16px;
  font-weight: bold;
  color:#383A3D;
}
.evidence-top-item {
  width: 510px;
  height: 40px;
  font-size: 14px;
  color: #595959;

  text-align: left;
}
.evidence-top:hover {
  background: #F7F8FB;
  border: 1px solid #3B599836;
}

.evidence-top:hover .evidence-top-top p {
  color: #3B5998;
}

/* evidence-bottom */
.evidence-bottom {
  display: grid;
  grid-template-columns: 1fr 1fr;
  row-gap: 24px;
  column-gap: 125px;
  width: 100%;
}
.evidence-bottom-item {
  display: flex;
  align-items: flex-start;
  justify-content: flex-start;
  gap: 16px;

  width: 218px;
  height: 44px;

  color: #595959;
}
.bottom-item-right {
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
}
.bottom-icon {
  padding-top: 5px;
  font-weight: bold;
  font-size: 16px;
}

.bottom-item-title {
  font-size: 16px;
  font-weight: bold;
  color: #383A3D;
}
.bottom-item-subtitle {
  font-size: 14px;
  color: #595959;
}
/* evidence end */

/* infringement */
.infringement-container {
  width: 655.5px;
  height: 250px;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  gap: 22px;

  padding:40px 0;

  border-bottom: 1px solid #d1d1d1d1;

  color: #383A3D;
}
.infringement-title {
  font-size: 24px;
  font-weight: bold;
}
.infringement-item {
  display: flex;
  align-items: center;
  justify-content: flex-start;
  gap: 18px;
  font-size: 16px;
}
.infringement-icon {
  font-size: 20px;
}
/* infringement--end */

/* Seller */
.seller-container {
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  gap: 22px;

  color:#383A3D;
  margin-top: 40px;
  padding-bottom: 40px;

  height: calc(padding-bottom + 300px);
  width: 655.5px;

  border-bottom: 1px solid #d1d1d1d1;
}
.seller-top {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 15px;
}
.seller-top p {
  font-size: 24px;
  font-weight: bold;
}

.seller-bottom {
  display: grid;
  grid-template-columns: 1fr 1fr;
  column-gap: 43px;
  row-gap: 18px;
  text-align: left;
}

.seller-item {
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
  gap: 20px;

  font-size: 16px;
}
.seller-icon {
  font-size: 20px;
}

/* seller---end  */

/* Payment */
.payment-container {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  gap: 20px;

  color: #383A3D;
  margin-top: 40px;
  padding-bottom: 40px;
  height: calc(padding-bottom + 267px);
  width: 655.5px;
  border-bottom: 1px solid #d1d1d1d1;
}
.payment-title {
  font-size: 24px;
  font-weight: bold;
}
.payment-bottom {
  display: flex;
  gap: 25px;
  max-width: 654px;
  overflow-x: scroll;
  -ms-overflow-style: none;  /* IE and Edge */
  scrollbar-width: none;  /* Firefox */
}
.payment-bottom::-webkit-scrollbar {
  display: none;
}
.payment-bottom-item-container {
  display: flex;
  gap: 25px;
  width: 1000px;
}
.payment-bottom-item {
  display: flex;
  align-items: center;

  height: 168px;
  width: 280px;

  border-radius: 12px;
  border: 1px solid #383A3D33;
  position: relative;
  background: #FFFFFF;
  outline: none;
}

.payment-bottom-item.isSelected {
  border: 1px solid #259E09E8;
}

.payment-item2 {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  gap: 8px;

  padding: 0 22px;
}

.payment-logo {
  width: 32px;
  height: 32px;
}
.payment-bottom-title {
  font-size: 16px;
  font-weight: bold;
  color: #383A3D;
}

.payment-bottom-sub {
  font-size: 14px;
  color: #595959;
}

.payment-icon {
  position: absolute;
  z-index: 1;
  top: 0;
  right:0;
  font-size: 24px;
  padding: 12px;
}

/* payment---end */

/* purchase */
.purchase-container {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  gap: 20px;
  color: #383A3D;

  margin-top: 40px;
  padding-bottom: 40px;

  height: calc(padding-bottom + 385px);
  width: 655.5px;
  /* border-bottom: 1px solid #d1d1d1d1; */
}

.purchase-icon {
  font-size: 20px;
}
.purchase-title {
  font-size: 24px;
  font-weight: bold;
}

.purchase-price-container {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 16px;
  font-size: 14px;
}

.purchase-price {
  font-size: 32px;
  color: #3B5998;
  font-weight: bold;
}
.purchase-currency {
  font-size: 16px;
  color: #E3707F;
  font-weight: bold;
}

/* purchase item */

.purchase-item-container {
  display: grid;
  grid-template-columns: 1fr 1fr;
  width: 100%;
  text-align: left;

  column-gap: 28px;
  row-gap: 24px;
  font-size: 16px;
}

.purchase-item1 {
  display: flex;
  align-items: center;
  gap:16px;
  font-weight: bold;
}

.purchase-item1-item {
  display: flex;
  align-items: center;
  gap: 3px;
}

.purchase-item-icon {
  font-size: 20px;
}

.purchase-item2 {
  display: flex;
  gap: 16px;
  font-size: 14px;
  color: #383A3D;
}

.purchase-item2-item {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  gap: 5px;
}

.purchase-item2-desc {
  font-size: 16px;
  font-weight: bold;
}

.purchase-item2-type {
  color: #595959;
}

/* purchase---end */

/* left ---- end */

/* right */
.right {
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-direction: column;
  margin-top: 36px;

  border-left: 2px solid #d1d1d1d1;

  width: 40%;
  /* height: 528px; */
  height: 80%;
}

/* top */
.right-top {
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 80%;

  font-size: 16px;
  font-weight: bold;
  color: #383A3D;

  margin-bottom: 10px;
}
.right-top-btn {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 11px;
  font-size: 14px;
  font-weight: bold;

  height: 32px;
  width: 154px;

  border-radius: 6px;
  border: 1px solid #383A3D;
}

.right-top-btn:hover {
  background: #ECF5FF;
  color: #8B9DC3;
  border: 1px solid #8B9DC3;
}

/* middle */
.right-middle {
  height: 100%;
  width: 80%;
  /* border: 1px solid red; */

  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;

  text-align: left;

  /* left: 15px; */
  position: relative;
  overflow: scroll;

  -ms-overflow-style: none;  /* IE and Edge */
  scrollbar-width: none;  /* Firefox */
}

.right-middle::-webkit-scrollbar {
  display: none;
}

.history-container {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 12px;

  padding: 24px 0;
  /* left: 35px; */

  max-width: 400px;
  position: relative;
}
.history-bullet {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 48px;
  width: 48px;
  border-radius: 100%;
  border: 1px solid #383A3D;
  background: #FFFFFF;

  font-size: 14px;
}

.history-item {
  display: flex;
  flex-direction: column;
  gap: 1px;

  color: #595959;
}
.history-item-date {
  font-size: 12px;
  font-weight: bold;
}
.history-item-name,
.history-item-action {
  font-size: 14px;
}
.vertical-line {
  position: absolute;
  height: 100px;
  top: 50%;
  left: 24px;
  z-index: -1;
  border: 1px solid #a5a5a5cc;
}

/* bottom */

.right-bottom {
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 10px;
}

.right-bottom-btn {
  /* display: flex;
  align-items: center;
  justify-content: center; */
  text-align: center;

  height: 48px;
  width: 380px;

  border: 1px solid #3B5998;
  border-radius: 6px;

  color: #FFFFFF;
  background: #8B9DC3;

  font-size: 14px;
  font-weight: bold;
}

.right-bottom-btn:hover {
  background: #ADBBD880;
  border: 1px solid #8B9DC3;
  color: #8B9DC3;
}

.right-bottom-btn:active,
.right-bottom-btn:focus {
  background: #3B5998;
  color: #FFFFFF;
  border: 1ps solid #70707033;
}
</style>
