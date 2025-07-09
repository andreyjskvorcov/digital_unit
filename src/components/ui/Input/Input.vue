<!-- InputComponent.vue -->
<template>
  <div class="input">
    <input v-bind="$attrs" v-model="model" />
  </div>
</template>

<script setup lang="ts">
const model = defineModel();
</script>

<style lang="scss">
.input {
  input {
    background: none;
    outline: none;
    border: 1px solid $color-white-30;
    height: 60px;
    border-radius: 80px;
    outline: none;
    padding: 17px 28px 18px;
    color: $color-white;
    font: $text-link-m;
    width: 100%;

    @media ($media-sm) {
      height: 52px;
    }

    &::placeholder {
      color: $color-white-60;
      font: $text-link-m;
    }
  }
}
</style>
