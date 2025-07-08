<template>
  <button :class="['button', type]">
    <slot />
  </button>
</template>

<script setup lang="ts">
import { defineProps } from 'vue'

defineProps({
  type: {
    default: 'primary-black',
    validator: (val: string) =>
      ['primary-black', 'primary-white', 'secondary', 'tertiary'].includes(val),
  },
})
</script>

<style scoped lang="scss">
.button {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  border: none;
  font-family: inherit;
  cursor: pointer;
  transition: $transition-fast;
  padding: $spacing-1 $spacing-7;
  border-radius: 80px;
  height: 60px;
  font: $text-link-m;

  @media ($media-sm) {
    padding: $spacing-1 $spacing-6;
    height: 52px;
  }

  &:active,
  &:hover,
  &:focus {
    opacity: 0.7;
  }

  &:disabled {
    opacity: 0.6;
    cursor: not-allowed;
  }

  &.primary-black {
    background-color: $color-black;
    color: $color-white;

    &:hover,
    &:active,
    &:focus {
      background-color: $color-gray;
      opacity: 1;
    }
  }

  &.primary-white {
    background-color: $color-white;
    color: $color-black;
  }

  &.secondary {
    background-color: $color-white-10;
    backdrop-filter: blur(20px);
    color: $color-white;

    &:hover,
    &:active,
    &:focus {
      background-color: $color-white-20;
      opacity: 1;
    }
  }

  &.tertiary {
    height: 36px;
    padding: $spacing-1 14px;
    background-color: $color-white-10;
    backdrop-filter: blur(20px);
    color: $color-white;

    &:hover,
    &:active,
    &:focus {
      background-color: $color-white-20;
      opacity: 1;
    }

    @media ($media-sm) {
      height: 32px;
      font: $text-link-s;
      padding: $spacing-1 $spacing-3;
    }
  }
}
</style>
