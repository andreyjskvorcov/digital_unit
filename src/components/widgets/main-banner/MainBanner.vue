<template>
  <div class="main-banner" ref="bannerRef" :id="Anchors.APP">
    <div class="main-banner__container">
      <h1 class="main-banner__title">Your future revolutionary banking</h1>

      <p class="main-banner__description">
        <template v-if="!isMd">
          Introducing our innovative website featuring customized banking
          solutions that we can tailor to your unique needs
        </template>

        <template v-else>
          Introducing our innovative banking website that we can design for your
          unique needs. Offering both physical and virtual debit cards in
          addition to a user-friendly banking app. Create your personalized site
          with customized functionalities today.
        </template>
      </p>

      <div class="main-banner__action">
        <Button>Get started</Button>

        <Button type="secondary">Find out more</Button>
      </div>

      <div class="main-banner__hand"></div>

      <div class="main-banner__glass"></div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { Button } from '@/components/ui';
import { useBreakpoint } from '@/lib/breakpoints';
import { useGsapScrollAnimations } from '@/composables/useGsapScrollAnimations';
import { Anchors } from '@/constants';

const bannerRef = useGsapScrollAnimations();

const isMd = useBreakpoint('md');
</script>

<style lang="scss">
.main-banner {
  width: 100vw;
  height: 100vh;
  min-height: 100dvh; // для поддержки мобильных браузеров
  display: flex;
  align-items: center;
  justify-content: center;
  background: $color-gradient;
  color: $color-white;
  overflow: hidden;

  @media ($media-sm) {
    height: auto;
  }

  &__container {
    position: relative;
    height: 100%;
    display: flex;
    flex-direction: column;
    padding: 124px $spacing-10 $spacing-10;
    width: 100%;

    @media ($media-sm) {
      padding: 84px $spacing-4 530px;
    }
  }

  &__title {
    max-width: 558px;
    letter-spacing: -0.33rem;
    position: relative;
    z-index: 3;

    @media ($media-sm) {
      letter-spacing: -0.22rem;
    }
  }

  &__description {
    margin-top: auto;
    max-width: 558px;
    position: relative;
    z-index: 3;

    @media ($media-sm) {
      margin-top: $spacing-8;
    }
  }

  &__action {
    display: flex;
    gap: $gap-3;
    margin-top: $spacing-8;
    position: relative;
    z-index: 3;
  }

  &__hand {
    position: absolute;
    right: 218px;
    bottom: 0;
    z-index: 2;
    height: 100%;
    width: 563px;
    height: 775px;
    background-image: url(../../../assets/images/main-banner/hand.png);
    background-repeat: no-repeat;
    background-position: bottom center;
    background-size: contain;

    @media ($media-lg) {
      right: 12px;
    }

    @media ($media-md) {
      width: 363px;
      height: 575px;
    }

    @media ($media-sm) {
      background-image: url(../../../assets/images/main-banner/hand-mobile.png);
      width: 334px;
      right: initial;
      left: 44%;
      transform: translate(-50%);
    }
  }

  &__glass {
    position: absolute;
    z-index: 1;
    background-image: url(../../../assets/images/main-banner/glass.png);
    background-repeat: no-repeat;
    background-size: cover;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;

    @media ($media-sm) {
      background-image: url(../../../assets/images/main-banner/glass-mobile.png);
    }
  }
}
</style>
