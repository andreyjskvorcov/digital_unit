<template>
  <div class="accordion">
    <div
      v-for="(item, index) in items"
      :key="index"
      class="accordion__item"
      @click="toggle(index)"
    >
      <div
        class="accordion__header"
        :class="{ 'is-active': activeIndex === index }"
      >
        <h3>{{ item.title }}</h3>

        <Icon image-name="dropdown-arrow.svg" />
      </div>

      <Transition name="accordion">
        <div @click.stop v-if="isOpen(index)" class="accordion__body">
          <p>{{ item.content }}</p>
        </div>
      </Transition>
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
    transition: $transition-fast;
  }

  &__header {
    display: flex;
    color: $color-white;
    display: flex;
    justify-content: space-between;
    cursor: pointer;

    h3 {
    }

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
    margin-top: 44px;

    p {
      color: $color-light-gray;
    }
  }
}

.accordion-enter-active,
.accordion-leave-active {
  transition: opacity 0.3s ease;
}

.accordion-enter,
.accordion-leave-to {
  opacity: 0;
}
</style>
