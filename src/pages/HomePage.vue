<template>
  <MainLayout>
    <MainBanner />

    <MainPartners />

    <MainBannerInfo />

    <MainAnalytics />

    <MainNoticed />
  </MainLayout>
</template>

<script setup lang="ts">
import {
  MainBanner,
  MainPartners,
  MainBannerInfo,
  MainAnalytics,
  MainNoticed,
} from '@/components/widgets';
import MainLayout from '@/layouts/MainLayout.vue';
</script>

<style lang="scss"></style>
