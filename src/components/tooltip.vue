<script setup lang="ts">

const props = defineProps<{
  text: string
  // icon: string
}>()

</script>

<template>
  <div class="tooltip-container">
    <!-- <div v-if="icon" class="icon">
      <p :class="props.icon" />
    </div> -->
    <span>{{ props.text }}</span>
  </div>
</template>

<style scoped>
.tooltip-container{
    display: flex;
    align-items: center;
    justify-content: flex-start;
    gap: 8px;

    width: max-content;

    padding: 5px 10px;

    background: #707070;
    border: 1px solid #3B599826;
    box-shadow: 0px 1px 6px #00000029;
    color: #FFFFFF;
    border-radius: 5px;

    font-size: 14px;
}
/* .icon {
  font-size: 14px;
  color: #FFFFFF;
} */

/* media */
@media screen and (max-width:768px) {
    .tooltip-container{
        width: 150px;
    }
}

</style>
