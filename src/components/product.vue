<!-- This is the product component
to be used for duplication
 -->
<script setup lang="ts">
const props = defineProps<{
  platform: string
  campaign: string
  id: number
  seller: string
  list_info: string
  company_campaign: string
  seller_url: string
  product_url: string
  preview_img: string
}>()
// product 1 = platform
// product 2 = campaign
</script>
<template>
  <div>
    <div class="container">
      <div id="img-item">
        <image-product :platform="props.platform" :campaign="props.campaign" :company_campaign="props.company_campaign" :seller_url="props.seller_url" :product_url="props.product_url" />
      </div>
      <div id="img-container">
        <!-- image component attached here -->
        <a :href="props.product_url"><img :src="props.preview_img" alt="" @error="(event) => event.target.src='/avatar_png/Default-Listing.png'"></a>
      </div>
      <div class="flex">
        <div class="flex-item1">
          <IdNumberCom :id-number="props.id" />
          <p class="r-status-forreview" />
          <p>For Review</p>
        </div>
        <div class="flex-item2">
          <h3>{{ props.seller }}</h3>
          <p>{{ props.list_info }}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
    * {
      box-sizing: border-box;
    }
    .line-clamp {
      display: -webkit-box;
      -webkit-line-clamp: 3;
      -webkit-box-orient: vertical;
      overflow: hidden;
    }
    /* body img {
        width: 200px;
        height: 168px;
        border-radius: 12px;
    } */

    /* image design */
    #img-container {
      overflow: hidden;
      width: 200px;
      height: 168px;
      border-radius: 12px;
      position: relative;
    }

    #img-item {
      position: absolute;
      top: 0;
      left: 0;
      margin-top: 8px;
      margin-left: 8px;
      margin-bottom: 8px;
      z-index: 1;
    }

    #img-container img {
      position: relative;
      top: 50%;
      left: 50%;
      width: 100%;
      transform: translate(-50%, -50%) scale(1.5);
      /* transform:  translateY(-15%) scale(1.5); */

      transition: .5s;
    }

    #img-container img:hover {
      transform:translate(-50%, -50%) scale(.75);
    }

    /* media */
    @media screen and (max-width:1160px) {
      #img-container{
        width: 180px;
        height: 148px;
      }
      #img-container img {
        /* top: -45%; */
        transform: scale(1.5);
        transition:.5s;
      }
      #img-container img:hover {
        transform: scale(.75);
      }
    }

    @media screen and (max-width:1024px) {
      #img-container{
        width: 150px ;
        height: 130px;
      }
      #img-container img {
        top: -25%;
        transform: scale(2);
        transition:.5s;
      }
      #img-container img:hover {
        transform: scale(1);
      }
    }

    @media screen and (max-width:768px) {
      #img-container img {
        top: -10%;
        transform: scale(2);
        transition:.5s;
      }
      #img-container img:hover {
        transform: scale(1);
      }
    }

    /* container design */

    .container {
        display: flex;
        justify-content: center;
        align-items: center;
        gap: 18px;
        /* border: 1px solid black; */
        margin: 0 auto;
        text-align: left;
        height: 168px;
        width: 576px;
        padding: 0px;
        border-radius: 12px;

        position: relative;
    }

    .flex {
        display: flex;
        align-items: left;
        justify-content: flex-start;
        flex-direction: column;
        gap: 10px;
        width: 358px;
        height: 168px;
    }

    .flex::before{
      content: "";
      top: 0;
      left: 0;
      position: absolute;
      width: 0;
      height: 100%;
      transition: all .5s;
      transform: translateX(-100%);
      border-radius: 12px;
      z-index: -1;
    }
    .flex:hover::before{
      transform: translateX(0);
      background: #f3f1f1;
      width: 100%;
    }

    .flex-item1 {
        display: flex;
        align-items: center;
        justify-content: flex-start;
        gap: 10px;
    }

    .flex-item1 div {
        font-size: 10px;
    }

    .flex-item1 p {
        font-size: 12px;
    }
    .flex-item2 {
        display: flex;
        align-items: left;
        flex-direction: column;
        justify-content: flex-start;
        gap: 10px
    }

    .flex-item2 h3 {
        font-size: 16px;
        font-weight: bold;
    }
    .flex-item2 p {
        font-size: 14px;
    }

    /* media */
    @media screen and (max-width:1186px) {
      .container{
        width: 480px;
        height: 168px;
        display: flex;
        justify-content: center;
        align-items: center;
      }
      .flex{
        width: 250px;
      }
      .flex p {
        display: -webkit-box;
        -webkit-line-clamp: 3;
        -webkit-box-orient: vertical;
        overflow: hidden;
      }
    }
    @media screen and (max-width:1024px) {
      .container{
        width: 350px;
        display: flex;
        justify-content: center;
        align-items: center;
      }
      .flex {
        height: 150px;
      }
    }
    @media screen and (max-width:768px) {
      .container{
        max-width: 300px;
        display: flex;
        justify-content: center;
        align-items: center;
      }
      .container p {
        font-size: 12px;
      }
      .flex {
        height: 150px;
      }
    }
</style>
