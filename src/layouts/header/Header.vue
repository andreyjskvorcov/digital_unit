<template>
  <header class="header" :class="{ 'is-open': openMenu }">
    <div class="header__container">
      <div class="header__logo" />

      <div
        class="header__burger"
        :class="{ 'is-open': openMenu }"
        @click="onClickOpenMenu()"
      >
        <span></span>
        <span></span>
      </div>

      <nav class="header__nav" :class="{ 'is-open': openMenu }">
        <ul class="header__list">
          <li class="header__item" v-for="(item, index) in list" :key="index">
            {{ item.label }}
          </li>
        </ul>
      </nav>

      <div class="header__info" :class="{ 'is-open': openMenu }">
        <span>Ⓒ 2025 WIVO Finance Inc. All rights reserved.</span>
      </div>

      <Button class="header__action" type="tertiary">Get started</Button>
    </div>
  </header>
</template>

<script lang="ts" setup>
import { ref } from 'vue';
import { Icon, Button } from '@/components/ui';

const openMenu = ref(false);
const isColor = ref(false);

const onClickOpenMenu = (): void => {
  openMenu.value = !openMenu.value;

  if (openMenu.value) {
    document.body.classList.add('is-hidden');
  } else {
    document.body.classList.remove('is-hidden');
  }
};

const list = ref([
  {
    label: 'Card',
    active: false,
  },
  {
    label: 'App',
    active: false,
  },
  {
    label: 'Customize',
    active: false,
  },
  {
    label: 'FAQs',
    active: false,
  },
]);
</script>

<style lang="scss">
.header {
  z-index: 99;
  position: fixed;
  left: 0;
  top: 0;
  transition: $transition-slow;
  width: 100%;
  height: $header-height-xs;
  display: flex;
  justify-content: center;
  align-items: center;

  &.is-open {
    background-color: $color-black;
  }

  @media ($media-sm) {
    height: $header-height-sm;
  }

  &__container {
    max-width: $wrap;
    width: 100%;
    padding: 0 $spacing-10;
    height: 100%;
    display: flex;
    align-items: center;

    @media ($media-sm) {
      padding: 0 $spacing-4;
    }
  }

  &__action {
    margin-left: $spacing-12;

    @media ($media-sm) {
      margin-left: initial;
    }
  }

  &__logo {
    background: url(../../assets/images/icons/logo.svg) no-repeat center /
      contain;
    height: 22px;
    width: 136px;

    @media ($media-sm) {
      background: url(../../assets/images/icons/logo_mob.svg) no-repeat center /
        contain;
      width: 80px;
      height: 22px;
    }
  }

  &__nav {
    margin-left: auto;

    @media ($media-sm) {
      position: fixed;
      bottom: 0;
      left: 0;
      width: 100%;
      height: calc(100% - $header-height-sm);
      background-color: $color-black;
      display: flex;
      flex-direction: column;
      justify-content: flex-end;
      padding: 0 $spacing-4 110px;
      transform: translate(0, 100%);
      transition: $transition-slow;
      margin: 0;
    }

    &.is-open {
      transform: translate(0);
    }
  }

  &__info {
    display: none;
    font: $text-link-s;
    z-index: 100;
    position: fixed;
    color: $color-light-gray;
    transition: $transition-slow;
    left: 0;
    bottom: $spacing-8;
    transform: translate(-100%);
    width: 100%;
    padding: 0 $spacing-4;

    @media ($media-sm) {
      display: block;
    }

    &.is-open {
      opacity: 1;
      transform: translate(0);
    }
  }

  &__list {
    display: flex;
    text-decoration: none;
    list-style: none;
    gap: $gap-8;
    padding: 0;
    font: $text-nav-link;

    @media ($media-sm) {
      gap: $gap-6;
      font: $text-nav-link-mobile;
      flex-direction: column;
    }
  }

  &__burger {
    display: none;
    margin: 0 auto;
    height: 40px;
    width: 54px;
    align-items: center;
    justify-content: center;
    position: relative;

    span {
      height: 2px;
      background-color: $color-white;
      position: absolute;
      width: 100%;
      transition: $transition-fast;

      &:first-child {
        top: 14px;
      }

      &:last-child {
        top: 24px;
      }
    }

    &.is-open {
      span {
        &:first-child {
          transform: rotate(45deg);
          top: initial;
        }

        &:last-child {
          transform: rotate(-45deg);
          top: initial;
        }
      }
    }

    @media ($media-sm) {
      display: flex;
    }
  }

  &__item {
    transition: $transition-fast;
    color: $color-white;
    cursor: pointer;

    &:hover {
      opacity: 0.7;
    }
  }
}
</style>
