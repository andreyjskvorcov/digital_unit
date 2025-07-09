<template>
  <div class="label">
    <slot></slot>
  </div>
</template>

<script setup lang="ts"></script>

<style lang="scss">
.label {
  display: flex;
  align-items: center;
  font: $text-link-m;
  color: $color-white;
  width: 100%;
}
</style>
