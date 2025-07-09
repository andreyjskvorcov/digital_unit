<template>
  <MainLayout>
    <MainBanner />

    <MainPartners />

    <MainBannerInfo />

    <MainAnalytics />
  </MainLayout>
</template>

<script setup lang="ts">
import {
  MainBanner,
  MainPartners,
  MainBannerInfo,
  MainAnalytics,
} from '@/components/widgets';
import MainLayout from '@/layouts/MainLayout.vue';
</script>

<style lang="scss"></style>
