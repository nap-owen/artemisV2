<script setup lang="ts">
import { onClickOutside } from '@vueuse/core'

const props = defineProps<{
  icon: string
  title: string
  numItems: string
}>()

const isClick = ref(false)

const dropdownRef = ref(null)

onClickOutside(
  dropdownRef,
  (event) => {
    isClick.value = false
  },
)

</script>

<template>
  <button ref="dropdownRef" class="clickable" @click="isClick=!isClick">
    <div v-if="isClick">
      <p :class="props.icon" />
    </div>
    <p>{{ props.title }}</p>
    <div v-if="!isClick" class="number">
      <p>{{ props.numItems }}</p>
    </div>
  </button>
</template>

<style scoped>
.clickable {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 5px;

    padding-bottom: 19px;
    padding-left: 5px;
    padding-right: 5px;
    font-size: 14px;

    height: 38px;
    width: auto;
}

.clickable:active,
.clickable:focus {
    border-bottom: 2px solid #3B5998;
    color: #3B5998;
    font-weight: bold;
}

.number {
    font-size: 10px;
    color: #383A3D;

    height: 16px;
    width: auto;
    padding: 0 4px;

    background: #ECF5FF;
    border: 1px solid #2D599E30;
    border-radius:8px;
}
</style>
