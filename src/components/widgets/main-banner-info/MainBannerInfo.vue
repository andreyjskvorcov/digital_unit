<template>
  <div class="main-banner-info" ref="partnersRef">
    <div class="main-banner-info__container">
      <div class="main-banner-info__hero" ref="redRef"></div>

      <div class="main-banner-info__text">
        <h2>Spend anywhere with a <span>physical debit card</span></h2>

        <p>
          Experience the ease of using WIVO, a digital bank that offers a
          physical debit card tailored for effortless daily transactions. This
          card comes equipped with an integrated RFID transponder to enable
          fast, contactless payments.
        </p>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { useGsapScrollAnimations } from '@/composables/useGsapScrollAnimations';
import { onMounted } from 'vue';

const partnersRef = useGsapScrollAnimations();

const redRef = useGsapScrollAnimations({
  x: -200,
  opacity: 0,
  duration: 1,
  ease: 'power2.out',
});
</script>

<style lang="scss">
.main-banner-info {
  background-color: $color-black;
  height: auto;
  display: flex;
  height: 828px;

  @media ($media-md) {
    height: 798px;
  }

  &__container {
    position: relative;
    height: 100%;
    display: flex;
    flex-direction: column;
    padding: 240px 86px 0 0;
    width: 100%;
    align-items: flex-end;

    @media ($media-md) {
      padding: 110px 86px 0 0;
    }

    @media ($media-sm) {
      padding: 110px 0 0 0;
    }
  }

  &__hero {
    background-image: url(../../../assets/images/main-banner-info/hand-with-card.png);
    background-repeat: no-repeat;
    background-position: center;
    background-size: cover;
    width: 746px;
    height: 467px;
    position: absolute;
    left: 0;
    bottom: 180px;

    @media ($media-xl) {
      width: 546px;
    }

    @media ($media-lg) {
      width: 346px;
      height: 267px;
    }

    @media ($media-md) {
      bottom: 100px;
    }

    @media ($media-sm) {
      width: 444px;
      height: 267px;
      left: -88px;
      bottom: 84px;
    }
  }

  &__text {
    max-width: 538px;
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: $gap-12;

    @media ($media-sm) {
      gap: $gap-8;
    }

    h2 {
      color: $color-white;
      letter-spacing: -0.22rem;

      @media ($media-sm) {
        text-align: center;
      }

      span {
        color: $color-light-gray;
      }
    }

    p {
      color: $color-light-gray;
      max-width: 510px;
      width: 100%;

      @media ($media-sm) {
        text-align: center;
        padding: 0 $spacing-4;
        letter-spacing: -0.04rem;
      }
    }
  }
}
</style>
