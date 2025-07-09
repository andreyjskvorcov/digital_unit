<template>
  <div class="main-analytics" ref="analyticsRef" :id="Anchors.Analytics">
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
import { Anchors } from '@/constants';

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

  @media ($media-lg) {
    height: 722px;
  }

  @media ($media-sm) {
    padding: 0 $spacing-4;
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
    max-width: 538px;
    width: 100%;

    @media ($media-sm) {
      gap: $gap-8;
    }

    h2 {
      color: $color-white;
      letter-spacing: -0.24rem;

      @media ($media-sm) {
        letter-spacing: -0.16rem;

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
      max-width: 510px;
      width: 100%;

      @media ($media-sm) {
        letter-spacing: -0.014rem;
      }
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

    @media ($media-lg) {
      width: 204px;
      height: 291px;
      transform: translate(50%);
      right: 50%;
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
      height: 101px;
      display: flex;
      flex-direction: column;
      justify-content: center;
      overflow: hidden;
      z-index: 2;

      @media ($media-sm) {
        height: 59px;
      }

      &:first-child {
        padding: $spacing-4;
        max-width: 183px;
        width: 100%;
        border-radius: $radius-rounded-3xl $radius-rounded-3xl 0
          $radius-rounded-3xl;
        left: -156px;
        top: 122px;

        @media ($media-sm) {
          max-width: 110px;
          top: $spacing-4;
          left: -52px;
          padding: $spacing-2;
          border-radius: $radius-xl $radius-xl 0 $radius-xl;
        }
      }

      &:last-child {
        padding: $spacing-5;
        border-radius: $radius-rounded-3xl $radius-rounded-3xl
          $radius-rounded-3xl 0;
        max-width: 173px;
        width: 100%;
        bottom: 96px;
        right: -128px;

        @media ($media-sm) {
          max-width: 99px;
          padding: $spacing-2;
          right: -54px;
          bottom: 46px;
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
