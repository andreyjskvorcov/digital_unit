<template>
  <div class="image">
    <img :src="getIconImage(props.imageName)" :alt="props.imageName" />
  </div>
</template>

<script lang="ts" setup>
const props = defineProps<{ imageName: string }>();

function getIconImage(imageName: string) {
  try {
    return new URL(`/src/assets/images/icons/${imageName}`, import.meta.url)
      .href;
  } catch {
    return new URL(`/src/assets/images/icons/default.svg`, import.meta.url)
      .href;
  }
}
</script>

<style lang="scss">
.image {
  img {
    width: 100%;
    height: 100%;
    object-fit: contain;
    outline: none;
    border: none;
  }
}
</style>
