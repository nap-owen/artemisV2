<!-- This is the product component
to be used for duplication
 -->
<script setup lang="ts">
const props = defineProps<{
  product1: string
  product2: string
  seller: string
}>()

</script>
<template>
  <body>
    <div class="container">
      <div id="img-container">
        <!-- image component attached here -->
        <div id="img-item">
          <image-product :product1="props.product1" :product2="props.product2" />
        </div>
        <img src="avatar_png/Default-Listing.png" alt="">
      </div>
      <div class="flex">
        <div class="flex-item1">
          <div class="idNumber">
            <p>id number</p>
          </div>
          <p class="r-appbar-search" />
          <p>For Review</p>
        </div>
        <div class="flex-item2">
          <h3>{{ props.seller }}</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation</p>
        </div>
      </div>
    </div>
  </body>
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

    #img-item {
      position: absolute;
      margin-top: 8px;
      margin-left: 8px;
      margin-bottom: 8px;
      z-index: 1;
    }

    #img-container {
      overflow: hidden;
      width: 200px;
      height: 168px;
      border-radius: 12px;
    }

    #img-container img {
      width: 100%;
      position: relative;
      top: -45%;
      transform: scale(1.5);
      transition: .5s;
    }

    #img-container img:hover {
      transform: scale(.75);
    }

    /* media */
    @media screen and (max-width:1160px) {
      #img-container{
        width: 180px;
        height: 148px;
      }
      #img-container img {
        top: -45%;
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
    }
    .flex {
        display: flex;
        align-items: left;
        justify-content: center;
        flex-direction: column;
        gap: 10px;
        width: 358px;
    }

    .flex-item1 {
        display: flex;
        align-items: center;
        justify-content: flex-start;
        gap: 10px;
    }

    .idNumber {
        width: 70px;
        height: 20px;

        display: flex;
        align-items: center;
        justify-content: center;
        border-radius: 4px;
        background: #c0dfff;
    }

    .idNumber p {
        font-weight: bold;
        color: #2D599E;
        opacity: 100%;
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
