<template>
  <Vue3Marquee
    :pause-on-hover="true"
    :pause-on-click="true"
    class="main-partners-carousel"
  >
    <div class="main-partners-carousel__item" v-for="el in 5" :key="el">
      <Icon image-name="bono-logo.svg" />
    </div>
  </Vue3Marquee>
</template>

<script lang="ts" setup>
import { ref } from 'vue';
import { Icon } from '@/components/ui';
import { onClickOutside } from '@vueuse/core';
import { Vue3Marquee } from 'vue3-marquee';

const componentRef = ref();

const pauseAutoScroll = () => {
  console.log('pause');
};

const resumeAutoScroll = () => {
  console.log('resume');
};

onClickOutside(componentRef, (event) => resumeAutoScroll());
</script>

<style lang="scss">
.main-partners-carousel {
  max-width: 100%;
  margin: auto;
  gap: 110rem;

  @media ($media-sm) {
    gap: 40rem;
  }

  .marquee {
    gap: 110rem;

    @media ($media-sm) {
      gap: 40rem;
    }
  }

  &__item {
    width: 330rem;

    @media ($media-sm) {
      width: 251rem;
    }
  }
}
</style>
