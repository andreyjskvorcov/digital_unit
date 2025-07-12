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
  height: 640rem;
  margin-top: -4rem;

  @media ($media-sm) {
    padding: 0 $spacing-4;
    height: 722rem;
  }

  &__container {
    border-radius: $radius-rounded-3xl;
    background-color: $color-light-black;
    display: flex;
    padding: $spacing-16;
    height: 100%;
    position: relative;

    @media ($media-sm) {
      padding: $spacing-8 $spacing-5;
    }
  }

  &__text {
    display: flex;
    flex-direction: column;
    gap: $gap-12;
    max-width: 538rem;
    width: 100%;

    @media ($media-sm) {
      gap: $gap-8;
    }

    h2 {
      color: $color-white;
      letter-spacing: -5.5%;

      @media ($media-sm) {
        br {
          display: none;
        }
      }

      span {
        color: $color-light-gray;
      }
    }

    p {
      color: $color-light-gray;
      max-width: 510rem;
      width: 100%;

      @media ($media-sm) {
        letter-spacing: -1.1%;
        max-width: 100%;
      }
    }
  }

  &__iphone {
    position: relative;
    background-image: url(../../../assets/images/main-analytics/iphone.png);
    background-repeat: no-repeat;
    background-position: center;
    background-size: cover;
    width: 397rem;
    height: 575rem;
    position: absolute;
    right: 186rem;
    bottom: 0;

    @media ($media-sm) {
      right: 50%;
      transform: translate(50%);
      width: 204rem;
      height: 290rem;
      background-position: top;
    }
  }

  &__badge {
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;

    &-item {
      position: absolute;
      height: 101rem;
      display: flex;
      flex-direction: column;
      justify-content: center;
      overflow: hidden;
      z-index: 2;

      @media ($media-sm) {
        height: 59rem;
      }

      &:first-child {
        padding: $spacing-4;
        max-width: 183rem;
        width: 100%;
        border-radius: $radius-rounded-3xl $radius-rounded-3xl 0
          $radius-rounded-3xl;
        left: -156rem;
        top: 122rem;

        @media ($media-sm) {
          max-width: 110rem;
          top: $spacing-4;
          left: -52rem;
          padding: $spacing-2;
          border-radius: $radius-xl $radius-xl 0 $radius-xl;
        }
      }

      &:last-child {
        padding: $spacing-5;
        border-radius: $radius-rounded-3xl $radius-rounded-3xl
          $radius-rounded-3xl 0;
        max-width: 173rem;
        width: 100%;
        bottom: 96rem;
        right: -128rem;

        @media ($media-sm) {
          max-width: 99rem;
          padding: $spacing-2;
          right: -54rem;
          bottom: 46rem;
          border-radius: $radius-xl $radius-xl $radius-xl 0;
        }
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

        @media ($media-sm) {
          background-color: $color-black-50;
          backdrop-filter: blur(13px);
        }
      }

      span {
        position: relative;
        z-index: 1;
        font: $text-caption;
        color: $color-white-60;

        @media ($media-sm) {
          font: $text-badge;
        }
      }

      p {
        color: $color-white;
        position: relative;
        z-index: 1;

        @media ($media-sm) {
          font: $text-badge;
        }
      }
    }
  }
}
</style>
