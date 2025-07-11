<template>
  <div class="main-partners-carousel">
    <Vue3Marquee :pause-on-hover="true" :pause-on-click="true">
      <div class="item" v-for="el in 5" :key="el">
        <Icon image-name="bono-logo.svg" />
      </div>
    </Vue3Marquee>
  </div>
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
  padding: 20px;
}
</style>
