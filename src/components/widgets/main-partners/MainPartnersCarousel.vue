<template>
  <div class="main-partners-carousel">
    <div class="embla-carousel">
      <div
        class="embla"
        ref="emblaRef"
        @mouseleave="onMouseleave"
        @mouseenter="onMouseEnter"
      >
        <div class="embla__container">
          <div class="embla__slide" v-for="el in 20" :key="el">
            <Icon image-name="bono-logo.svg" />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { Icon } from '@/components/ui';
import emblaCarouselVue from 'embla-carousel-vue';
import AutoScroll from 'embla-carousel-auto-scroll';
import { onMounted } from 'vue';

const [emblaRef, emblaApi] = emblaCarouselVue(
  {
    align: 'start',
    containScroll: 'keepSnaps',
    dragFree: true,
    loop: true,
  },
  [AutoScroll({ startDelay: 100 })],
);

const onMouseEnter = () => {
  if (!emblaApi.value) return;

  const autoScroll = emblaApi.value.plugins().autoScroll;
  autoScroll.stop();
};

const onMouseleave = () => {
  if (!emblaApi.value) return;

  const autoScroll = emblaApi.value.plugins().autoScroll;
  autoScroll.play();
};
</script>

<style lang="scss">
.main-partners-carousel {
  height: 92px;

  @media ($media-sm) {
    height: 71px;
  }
}

.embla-carousel {
  position: relative;
}

.embla {
  overflow: hidden;

  &.is-draggable {
    cursor: grab;
  }

  &.is-dragging {
    cursor: grabbing;
  }

  &__container {
    display: flex;
    display: flex;
    user-select: none;
    -webkit-touch-callout: none;
    -webkit-tap-highlight-color: transparent;
  }

  &__slide {
    flex: 0 0 330px;
    margin-right: 110px;

    @media ($media-sm) {
      flex: 0 0 251px;
      margin-right: 40px;
    }
  }
}
</style>
