<template>
  <div class="main-partners" ref="partnersRef">
    <div class="main-partners__container">
      <p class="main-partners__caption">
        Used by the world's most amazing companies
      </p>

      <MainPartnersCarousel />
    </div>
  </div>
</template>

<script lang="ts" setup>
import MainPartnersCarousel from './MainPartnersCarousel.vue';
import { useGsapScrollAnimations } from '@/composables/useGsapScrollAnimations';

const partnersRef = useGsapScrollAnimations();
</script>

<style lang="scss">
.main-partners {
  position: relative;
  overflow: hidden;
  width: 100%;
  height: 100%;
  background-color: $color-black;

  &__container {
    display: flex;
    flex-direction: column;
    padding-top: $spacing-22;
    width: 100%;
    align-items: center;
    gap: $gap-14;
  }

  &__caption {
    font: $text-caption;
    color: $color-light-gray;
  }
}
</style>
