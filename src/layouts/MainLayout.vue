<template>
  <div class="main-layout">
    <Header />

    <div class="main-layout__content">
      <slot></slot>
    </div>

    <Footer />
  </div>
</template>

<script setup lang="ts">
import { Header } from './header'
import { Footer } from './footer'
</script>

<style lang="scss">
.main-layout {
  display: flex;
  flex-direction: column;

  &__content {
    // padding-top: $header-height-xs;

    // @media ($media-sm) {
    //   padding-top: $header-height-sm;
    // }
  }
}
</style>
