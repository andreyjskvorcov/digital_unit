<template>
  <div class="accordion">
    <div
      v-for="(item, index) in items"
      :key="index"
      class="accordion__item"
      @click="toggle(index)"
      :class="{ 'is-active': activeIndex === index }"
    >
      <div
        class="accordion__header"
        :class="{ 'is-active': activeIndex === index }"
      >
        <h3>{{ item.title }}</h3>

        <Icon image-name="dropdown-arrow.svg" />
      </div>

      <div
        class="accordion__body"
        :class="{ 'is-active': activeIndex === index }"
      >
        <p>{{ item.content }}</p>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue';
import { Icon } from '@/components/ui';

interface Item {
  title: string;
  content: string;
}

defineProps<{ items: Item[] }>();

const activeIndex = ref<number | null>(null);

const toggle = (index: number) => {
  activeIndex.value = activeIndex.value === index ? null : index;
};

const isOpen = (index: number) => {
  return activeIndex.value === index;
};
</script>

<style lang="scss">
.accordion {
  display: flex;
  flex-direction: column;
  width: 100%;
  gap: $gap-3;

  &__item {
    background-color: $color-light-black;
    border-radius: $radius-rounded-3xl;
    padding: $spacing-10;
    transition: all ease-in-out 0.3s;
    height: 111px;
    overflow: hidden;

    &.is-active {
      height: 228px;
    }
  }

  &__header {
    display: flex;
    color: $color-white;
    display: flex;
    justify-content: space-between;
    cursor: pointer;

    &.is-active {
      .image {
        transform: scale(1, -1);
      }
    }

    .image {
      transition: $transition-fast;
    }
  }

  &__body {
    overflow: hidden;
    color: $color-white;
    overflow: hidden;
    height: 0;
    opacity: 0;
    transition: all ease-in-out 0.3s;

    &.is-active {
      overflow: visible;
      height: auto;
      opacity: 1;
      margin-top: 44px;
    }

    p {
      color: $color-light-gray;
    }
  }
}
</style>
