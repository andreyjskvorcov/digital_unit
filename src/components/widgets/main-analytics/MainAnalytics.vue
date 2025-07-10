<template>
  <div class="main-analytics" ref="analyticsRef">
    <div class="main-analytics__container">
      <div class="main-analytics__text">
        <h2>
          Spending insights

          <span>
            at your <br />
            fingertips
          </span>
        </h2>

        <p>
          Crafted to enhance your day-to-day spending with a focus on
          transparency and efficiency. Instant transfers, virtual cards, and
          heads-up displays offer reassurance and peace of mind when it comes to
          managing your finances.
        </p>
      </div>

      <div class="main-analytics__iphone">
        <div class="main-analytics__badge" ref="badgeRef">
          <div class="main-analytics__badge-item">
            <p>Financial control</p>

            <span>Improving visibility of transactions</span>
          </div>

          <div class="main-analytics__badge-item">
            <p>Easily get paid</p>

            <span>Make payments in a few minutes</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { useGsapScrollAnimations } from '@/composables/useGsapScrollAnimations';

const analyticsRef = useGsapScrollAnimations();

const badgeRef = useGsapScrollAnimations({
  opacity: 0,
  duration: 0.7,
  scale: 0,
  ease: 'power2.out',
});
</script>

<style lang="scss">
.main-analytics {
  padding: 0 $spacing-10;
  background-color: $color-black;
  height: 640px;
  overflow: hidden;

  &__container {
    border-radius: $radius-rounded-3xl;
    background-color: $color-light-black;
    display: flex;
    padding: $spacing-16;
    height: 100%;
    position: relative;
  }

  &__text {
    display: flex;
    flex-direction: column;
    gap: $gap-12;
    max-width: 538px;
    width: 100%;

    h2 {
      color: $color-white;
      letter-spacing: -0.24rem;

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

  &__iphone {
    position: relative;
    background-image: url(../../../assets/images/main-analytics/iphone.png);
    background-repeat: no-repeat;
    background-position: center;
    background-size: cover;
    width: 397px;
    height: 575px;
    position: absolute;
    right: calc(14% - 4px);
    bottom: 0;
  }

  &__badge {
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;

    &-item {
      position: absolute;
      height: 101px;
      display: flex;
      flex-direction: column;
      justify-content: center;
      overflow: hidden;
      z-index: 2;

      &:first-child {
        padding: $spacing-4;
        max-width: 183px;
        width: 100%;
        border-radius: $radius-rounded-3xl $radius-rounded-3xl 0
          $radius-rounded-3xl;
        left: -156px;
        top: 122px;
      }

      &:last-child {
        padding: $spacing-5;
        border-radius: $radius-rounded-3xl $radius-rounded-3xl
          $radius-rounded-3xl 0;
        max-width: 173px;
        width: 100%;
        bottom: 96px;
        right: -128px;
      }

      &::before {
        content: '';
        background-color: $color-black-30;
        position: absolute;
        width: 100%;
        height: 100%;
        backdrop-filter: blur(24px);
        left: 0;
        top: 0;
      }

      span {
        position: relative;
        z-index: 1;
        font: $text-caption;
        color: $color-white-60;
      }

      p {
        color: $color-white;
        position: relative;
        z-index: 1;
      }
    }
  }
}
</style>
