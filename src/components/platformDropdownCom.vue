<script setup lang="ts">
const props = defineProps<{
  items: []
}>()
</script>

<template>
  <div class="platformContainer">
    <div class="upper">
      <div class="upperContent">
        <input type="text" placeholder="Search Platform">
        <p class="r-appbar-search" />
      </div>
    </div>
    <div class="middle">
      <div v-for="(item, index) in props.items" :key="index" class="middleContent">
        <input type="checkbox">
        <p>{{ item.platform_name }}</p>
      </div>
    </div>
    <div class="lower">
      <button class="clearBtn">
        Clear
      </button>
      <button class="applyBtn">
        Apply
      </button>
    </div>
  </div>
</template>

<style scoped>
/* container styles */
.platformContainer {
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    flex-direction: column;
    border-radius: 16px;
    border: 1px solid #7070703D;

    height: 413px;
    width: 239px;

    background: #FFFFFF;
}

.platformContainer input {
  outline: none;
  border: none;
}

/* upper styles */
.upper {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  padding: 22px 16px;
}
.upperContent {
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;

  padding: 10px 16px;

  font-size: 14px;

  border-radius: 4px;
  border: 1px solid #DEDEDF;
  color: #383A3D;
}

.middle {
  display: flex;
  align-items: center;
  justify-content: flex-start;
  flex-direction: column;
  gap: 24px;

  overflow: scroll;
  width: 100%;
  padding: 5px 16px;

  -ms-overflow-style: none;  /* IE and Edge */
  scrollbar-width: none;  /* Firefox */
}

.middle::-webkit-scrollbar {
  display: none;
}

.middleContent {
  display: flex;
  align-items: center;
  justify-content: flex-start;
  gap: 12px;
  width: 100%;

  font-size: 14px;

}

.middleContent input {
  color: #3B5998;
}

/* lower styles */
.lower {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 20px 16px;
  width: 100%;
  border-top: 1px solid #7070703D;
}

.clearBtn {
  width: 72px;
  height: 36px;
  background: #ECF5FF;
  border-radius: 4px;

  font-size: 14px;
  color: #383A3D;
  font-weight: bold;
  letter-spacing: 1.25px;

  opacity: 48%;
}

.clearBtn:hover {
  opacity: 100%;
}

.clearBtn:active,
.clearBtn:focus {
  background: #FFFFFF;
  opacity: 100%;
}

.applyBtn {
  width: 76px;
  height: 36px;
  border-radius: 4px;

  background: #3B5998;
  opacity: 48%;
  color: #FFFFFF;

  font-size: 14px;
  letter-spacing: 1.25px;
  font-weight: bold;
}

.applyBtn:hover {
  opacity: 100%;
}

.applyBtn:active,
.applyBtn:focus {
  color: #2D599E;
  opacity: 100%;
  color: #FFFFFF;
}
</style>
