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
    height: 60rem;
    border-radius: 80rem;
    outline: none;
    padding: 17rem 28rem 18rem;
    color: $color-white;
    font: $text-link-m;
    width: 100%;

    @media ($media-sm) {
      height: 51rem;
    }

    &::placeholder {
      color: $color-white-60;
      font: $text-link-m;
    }
  }
}
</style>
