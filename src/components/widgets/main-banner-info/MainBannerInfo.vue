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
  height: auto;
  display: flex;
  height: 828px;

  &__container {
    position: relative;
    height: 100%;
    display: flex;
    padding: 240px 86px 0 0;
    width: 100%;
  }

  &__hero {
    background-image: url(../../../assets/images/main-banner-info/hand-with-card.png);
    background-repeat: no-repeat;
    background-position: center;
    background-size: cover;
    width: 746px;
    height: 467px;
    left: 0;
    bottom: 180px;
  }

  &__text {
    max-width: 538px;
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: $gap-12;

    h2 {
      color: $color-white;
      letter-spacing: -0.22rem;

      span {
        color: $color-light-gray;
      }
    }

    p {
      color: $color-light-gray;
      max-width: 510px;
      width: 100%;
    }
  }
}
</style>
