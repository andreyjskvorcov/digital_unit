<template>
  <div class="main-noticed" ref="noticedRef" :id="Anchors.CUSTOMIZE">
    <div class="main-noticed__container">
      <div class="main-noticed__text">
        <h1>
          Get noticed with a custom card to

          <span> fit your style </span>
        </h1>

        <p>
          Stand out from the crowd by not settling for a boring bank card.
          Choose a card color that reflects your style, and the app will adapt
          to match it.
        </p>
      </div>

      <div class="main-noticed__cards" />
    </div>
  </div>
</template>

<script lang="ts" setup>
import { useGsapScrollAnimations } from '@/composables/useGsapScrollAnimations';
import { Anchors } from '@/constants';

const noticedRef = useGsapScrollAnimations();
</script>

<style lang="scss">
.main-noticed {
  background-color: $color-black;
  height: 1545rem;
  overflow: hidden;
  background-image: url(../../../assets/images/main-noticed/bg.png);
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  width: 100%;

  @media ($media-sm) {
    background-image: url(../../../assets/images/main-noticed/bg-mobile.png);
    height: 821rem;
  }

  &__cards {
    background-image: url(../../../assets/images/main-noticed/cards.png);
    background-repeat: no-repeat;
    background-position: center;
    background-size: cover;
    width: 620rem;
    height: 836rem;
    position: absolute;
    top: 710rem;
    left: 53%;
    transform: translate(-50%);

    @media ($media-sm) {
      top: 446rem;
      width: 277rem;
      height: 375rem;
    }
  }

  &__container {
    display: flex;
    justify-content: center;
    width: 100%;
    height: 100%;
    position: relative;
    padding-top: 240rem;

    @media ($media-sm) {
      padding-top: 120rem;
    }
  }

  &__text {
    display: flex;
    flex-direction: column;
    gap: $gap-12;
    max-width: 710rem;
    width: 100%;
    text-align: center;

    @media ($media-sm) {
      gap: $gap-8;
    }

    h1 {
      color: $color-white;
      letter-spacing: -5.5%;
      display: flex;
      flex-direction: column;

      @media ($media-sm) {
        font: $text-heading-2-mobile;
        display: block;
      }

      span {
        color: $color-light-gray;
      }
    }

    p {
      color: $color-light-gray;
      width: 100%;
      padding: 0 $spacing-10;

      @media ($media-sm) {
        letter-spacing: -2.1%;
        padding: 0 $spacing-6;
      }
    }
  }
}
</style>
