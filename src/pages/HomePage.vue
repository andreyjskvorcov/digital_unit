<template>
  <MainLayout>
    <MainBanner />

    <MainPartners />

    <MainBannerInfo />
  </MainLayout>
</template>

<script setup lang="ts">
import { MainBanner, MainPartners, MainBannerInfo } from '@/components/widgets';
import MainLayout from '@/layouts/MainLayout.vue';
</script>

<style lang="scss"></style>
