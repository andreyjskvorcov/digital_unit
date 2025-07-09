<template>
  <div class="main-faq" ref="faqRef">
    <div class="main-faq__container">
      <div class="main-faq__text">
        <h2>FAQs</h2>

        <p>Don’t see your question here?</p>

        <router-link to="/">Get in touch →</router-link>
      </div>

      <div class="main-faq__questions">
        <Accordion :items="items" />

        <Button type="primary-white">Get started</Button>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { Accordion, Button } from '@/components/ui';
import { useGsapScrollAnimations } from '@/composables/useGsapScrollAnimations';

const items = [
  {
    title: 'How can I sign up?',
    content:
      'Signing up for WIVO is quick and easy. Simply download the app from the App Store or Google Play, follow the on-screen instructions to create an account, and start managing your finances.',
  },
  {
    title: 'How does WIVO work?',
    content:
      'Signing up for WIVO is quick and easy. Simply download the app from the App Store or Google Play, follow the on-screen instructions to create an account, and start managing your finances.',
  },
  {
    title: 'Can I link multiple accounts?',
    content:
      'Signing up for WIVO is quick and easy. Simply download the app from the App Store or Google Play, follow the on-screen instructions to create an account, and start managing your finances.',
  },
  {
    title: 'How can I track my expenses?',
    content:
      'Signing up for WIVO is quick and easy. Simply download the app from the App Store or Google Play, follow the on-screen instructions to create an account, and start managing your finances.',
  },
  {
    title: 'Can I set financial goals?',
    content:
      'Signing up for WIVO is quick and easy. Simply download the app from the App Store or Google Play, follow the on-screen instructions to create an account, and start managing your finances.',
  },
];

const faqRef = useGsapScrollAnimations();
</script>

<style lang="scss">
.main-faq {
  background-color: $color-black;
  width: 100%;

  &__container {
    padding: 240px $spacing-10;
    display: flex;
    justify-content: space-between;
    gap: $gap-2;

    @media ($media-sm) {
      padding: 120px $spacing-4;
      flex-direction: column;
      justify-content: flex-start;
    }
  }

  &__text {
    color: $color-white;

    h2 {
      letter-spacing: -0.3rem;

      @media ($media-sm) {
        letter-spacing: -0.1rem;
      }
    }

    p {
      margin-top: $spacing-12;
      color: $color-light-gray;

      @media ($media-sm) {
        margin-top: $spacing-8;
      }
    }

    a,
    a:visited {
      background-image: linear-gradient(
        338.26deg,
        #8fc1ff -41.31%,
        #bae8f5 51.47%,
        #b8f4f2 123.84%
      );
      color: transparent;
      background-clip: text;

      @media ($media-sm) {
        font: $text-nav-link;
      }
    }
  }

  &__questions {
    max-width: 929px;
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: $gap-14;

    @media ($media-sm) {
      gap: $gap-10;
    }

    @media ($media-sm) {
      margin-top: $spacing-8;
    }

    .accordion__body {
      p {
        max-width: 604px;
      }
    }

    .button {
      max-width: 155px;

      @media ($media-sm) {
        max-width: 147px;
      }
    }
  }
}
</style>
