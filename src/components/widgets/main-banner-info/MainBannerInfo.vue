<template>
  <div class="main-banner-info" ref="partnersRef" :id="Anchors.CARD">
    <div class="main-banner-info__container">
      <div class="main-banner-info__hero" ref="partnersHeroRef"></div>

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
import { Anchors } from '@/constants';

const partnersRef = useGsapScrollAnimations();

const partnersHeroRef = useGsapScrollAnimations({
  x: -200,
  opacity: 0,
  duration: 1,
  ease: 'power2.out',
});
</script>

<style lang="scss">
.main-banner-info {
  background-color: $color-black;
  display: flex;
  height: 828rem;
  width: 100%;
  overflow: hidden;

  @media ($media-md) {
    height: 798rem;
  }

  &__container {
    position: relative;
    height: 100%;
    display: flex;
    align-items: flex-start;
    padding: 182rem 86rem 0 0;
    width: 100%;
    gap: 12rem;

    @media ($media-sm) {
      padding: 106rem 0 0 0;
      flex-direction: column-reverse;
      justify-content: flex-end;
      gap: 0;
    }
  }

  &__hero {
    background-image: url(../../../assets/images/main-banner-info/hand-with-card.png);
    background-repeat: no-repeat;
    background-position: center;
    background-size: cover;
    width: 746rem;
    height: 467rem;
    position: relative;

    @media ($media-sm) {
      width: 414rem;
      height: 414rem;
      position: absolute;
      bottom: 16rem;
      left: -72rem;
    }
  }

  &__text {
    max-width: 538rem;
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: $gap-12;
    margin-left: auto;
    padding-top: 58rem;

    @media ($media-sm) {
      gap: $gap-8;
      padding: 0;
    }

    h2 {
      color: $color-white;
      letter-spacing: -5.5%;

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
        max-width: 100%;
        padding: 0 $spacing-4;
        letter-spacing: -0.04rem;
        margin: 0 auto;
      }
    }
  }
}
</style>
