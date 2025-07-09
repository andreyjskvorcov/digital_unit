<template>
  <MainLayout>
    <MainBanner />

    <MainPartners />

    <MainBannerInfo />

    <MainAnalytics />

    <MainNoticed />

    <MainFaq />
  </MainLayout>
</template>

<script setup lang="ts">
import {
  MainBanner,
  MainPartners,
  MainBannerInfo,
  MainAnalytics,
  MainNoticed,
  MainFaq,
} from '@/components/widgets';
import MainLayout from '@/layouts/MainLayout.vue';
</script>

<style lang="scss"></style>
