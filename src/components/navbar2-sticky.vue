<template>
  <div class="container">
    <div class="upperDiv">
      <div class="upperLeft">
        <button class="upperLeft1">
          <img src="/JPG Campaigns/Nestle.jpg " alt="">
          <p>Nestle</p>
        </button>
        <div class="upperLeft2">
          <input type="text" placeholder="Search">
          <button class="r-appbar-search search-btn" />
        </div>
        <button>
          <Button icon="r-actionbar-breakdown" />
        </button>
        <button>
          <Button icon="r-actionbar-selection" />
        </button>
      </div>
      <div class="upperRight">
        <button>
          <Button icon="r-actionbar-layout" title="Layout" />
        </button>
        <button>
          <Button icon="r-actionbar-platform" title="Platforms" />
        </button>
        <button>
          <Button icon="r-actionbar-filters" title="Filters" />
        </button>
      </div>
    </div>
    <div>
      lower div
    </div>
  </div>
</template>

<style scoped>
.container {
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;

  width: 1240px;
  margin: 0 auto;
}

.upperDiv {
  display: flex;
  align-items: center;
  justify-content: space-between;

  width: 1240px;
  margin-top: 10px;
  margin-bottom: 10px;

  padding: 20px;
}

/* upperLeft */
.upperLeft {
  display: flex;
  align-items: center;
  justify-content: flex-start;
  gap: 8px;
}

.upperLeft1 {
  display: flex;
  align-items: center;
  justify-content: space-between;

  width: 114px;
  height: 40px;
  border-radius: 20px;
  border: 1px solid #70707033;

  padding-left: 12px;
  padding-right: 22px;

  font-size: 14px;
  font-weight: bold;
}

.upperLeft1 img{
  height: 30px;
  width: 30px;
  border-radius: 50%;
  border: 1px solid #8B9DC333;
}

.upperLeft2 {
  display: flex;
  align-items: center;
  justify-content: space-between;

  height: 40px;
  width: 300px;

  border: 1px solid #70707033;
  border-radius: 20px;
  padding-left: 16px;
  padding-right: 12px;
}

.upperLeft2 input {
  outline: none;
  border: none;
  width: 88%;
}

.search-btn{
  display: flex;
  justify-content: center;
  align-items: center;

  height: 24px;
  width: 24px;

  background: #8B9DC3;
  border-radius: 50%;

  color: #FFFFFF;

  font-size: 12px;
}

/* upperRight */

.upperRight {
  display: flex;
  justify-content: flex-end;
  align-items: center;
  gap: 8px;
}

</style>
