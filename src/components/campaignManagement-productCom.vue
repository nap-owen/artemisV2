<template>
  <div class="container-product">
    <div class="img-div1">
      <img src="" alt="">
    </div>
    <div class="txt-div">
      <div class="upper">
        <div class="upperLeft">
          <p class="r-status-forreview" />
          <p>For Review</p>
        </div>
        <div class="upperRight">
          <IdNumberCom :id-number="123123" />
        </div>
      </div>
      <div class="lower">
        <div class="lower1">
          <p class="title">
            Sample Seller Name
          </p>
        </div>
        <div class="lower2">
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua</p>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.container-product {
    height: 292px;
    width: 281px;
    display: flex;
    align-items: center;
    justify-content: space-evenly;
    flex-direction: column;
    gap: 10px;
}
.img-div1 {
    width: 280px;
    height: 165px;

    background: red;

    border-radius: 12px;
}
.txt-div {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;

    width: 280px;
}
.upper {
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 280px;
}

.upperLeft {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 3px;
    font-size: 12px;
}
.upperRight {
  font-size: 10px;
}
.lower {
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  text-align: left;
  gap: 5px;
}
.lower1 {
  width: 280px;
}

.title {
  font-size: 16px;
  font-weight: bold;
}

.lower2 p {
  font-size: 14px;
}
</style>
