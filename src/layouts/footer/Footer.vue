<template>
  <div class="footer">
    <div class="footer__container">
      <div class="footer__top">
        <nav class="footer__nav">
          <ul class="footer__list">
            <li
              class="footer__item"
              v-for="(item, index) in navList"
              :key="index"
            >
              <a :href="`#${item.anchor}`">
                {{ item.label }}
              </a>
            </li>
          </ul>
        </nav>

        <a class="footer__back-to-top" href="#app">Back to Top</a>
      </div>

      <div class="footer__logo"></div>

      <div class="footer__bottom">
        <div class="footer__subscribe">
          <Label>
            Join our newsletter to stay up to date on features and releases
          </Label>

          <Input v-model="subscribeInput" placeholder="Enter your email" />

          <Button type="secondary">Subscribe</Button>

          <p>
            By subscribing you agree to with our Privacy Policy and provide
            consent to receive updates from our company.
          </p>
        </div>

        <div class="footer__socials">
          <Label>Follow us</Label>

          <ul class="footer__socials-list">
            <li
              class="footer__socials-item"
              v-for="item in socialList"
              :key="item.name"
            >
              <a :href="item.link" target="_blank">
                <Icon :image-name="item.icon" />
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div class="footer__copyright">
        <p>Ⓒ 2025 WIVO Finance Inc. All rights reserved.</p>

        <ul>
          <li v-for="item in copyrightList" :key="item.label">
            <a :href="item.link">{{ item.label }}</a>
          </li>
        </ul>

        <div class="footer__apps">
          <a href="/">
            <Icon image-name="google-play.svg" />
          </a>

          <a href="/">
            <Icon image-name="app-store.svg" />
          </a>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { Button, Input, Label, Icon } from '@/components/ui';
import { ref } from 'vue';
import { Anchors } from '@/constants';

const subscribeInput = ref('');

const copyrightList = [
  { label: 'Privacy Policy', link: '/' },
  { label: 'Terms of Service', link: '/' },
  { label: 'Cookies Settings', link: '/' },
];

const navList = ref([
  { label: 'Card', anchor: Anchors.CARD },
  { label: 'App', anchor: Anchors.APP },
  { label: 'Customize', anchor: Anchors.CUSTOMIZE },
  { label: 'FAQs', anchor: Anchors.FAQS },
]);

const socialList = [
  {
    name: 'facebook',
    icon: 'facebook.svg',
    link: '/',
  },
  {
    name: 'linkdn',
    icon: 'linkdn.svg',
    link: '/',
  },
  {
    name: 'instagram',
    icon: 'instagram.svg',
    link: '/',
  },
  {
    name: 'telegram',
    icon: 'telegram.svg',
    link: '/',
  },
  {
    name: 'x',
    icon: 'x.svg',
    link: '/',
  },
];
</script>

<style lang="scss">
.footer {
  background-color: $color-light-gray;

  &__container {
    padding: $spacing-10;
    display: flex;
    flex-direction: column;

    @media ($media-sm) {
      padding: $spacing-4 $spacing-4 $spacing-5;
    }
  }

  &__top {
    display: flex;
    justify-content: space-between;

    @media ($media-sm) {
      margin-top: $spacing-6;
      justify-content: flex-start;
    }
  }

  &__list {
    display: flex;
    text-decoration: none;
    list-style: none;
    gap: $gap-6;
    padding: 0;

    @media ($media-sm) {
      display: none;
    }
  }

  &__item {
    transition: $transition-fast;

    a,
    a:visited {
      color: $color-white;
      cursor: pointer;
      font: $text-nav-link;

      &:hover {
        opacity: 0.7;
      }
    }
  }

  &__back-to-top {
    color: $color-white;
    cursor: pointer;
    font: $text-nav-link;

    &:hover {
      opacity: 0.7;
    }
  }

  &__logo {
    background: url(../../assets/images/icons/logo_mob.svg) no-repeat center /
      contain;
    max-width: 668rem;
    width: 100%;
    height: 182rem;
    margin: 114rem auto 0;

    @media ($media-sm) {
      order: -1;
      margin: 0;
      width: 262rem;
      height: 72rem;
    }
  }

  &__bottom {
    display: flex;
    margin-top: 112rem;
    justify-content: space-between;
    gap: $gap-4;

    @media ($media-sm) {
      margin-top: $spacing-14;
      flex-direction: column-reverse;
      gap: $gap-14;
    }
  }

  &__subscribe {
    max-width: 589rem;
    width: 100%;
    display: flex;
    flex-wrap: wrap;

    .label {
      margin-bottom: $spacing-4;

      @media ($media-sm) {
        margin-bottom: $spacing-6;
      }
    }

    .button {
      width: 142rem;
      margin-left: $spacing-4;

      @media ($media-sm) {
        margin: $spacing-4 0 0;
        order: 1;
      }
    }

    .input {
      width: calc(100% - 158rem);

      @media ($media-sm) {
        width: 100%;
      }
    }

    p {
      font: $text-disclaimer;
      color: $color-white;
      margin-top: $spacing-4;
      max-width: 431rem;
      width: 100%;

      @media ($media-sm) {
        margin-top: $spacing-3;
        font: $text-disclaimer-mobile;
      }
    }
  }

  &__socials {
    max-width: 360rem;

    .label {
      margin-bottom: $spacing-4;

      @media ($media-sm) {
        margin-bottom: $spacing-6;
      }
    }

    &-list {
      display: flex;
      text-decoration: none;
      list-style: none;
      gap: $gap-4;

      @media ($media-sm) {
        gap: 14rem;
      }
    }

    &-item {
      height: 60rem;
      width: 60rem;
      background-color: $color-white-10;
      border-radius: $radius-full;

      @media ($media-sm) {
        height: 52rem;
        width: 52rem;
      }

      a,
      a:visited {
        width: 100%;
        height: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
      }

      .image {
        width: 28rem;
        height: 28rem;

        @media ($media-sm) {
          width: 24rem;
          height: 24rem;
        }
      }
    }
  }

  &__apps {
    display: flex;
    gap: 14rem;
    margin-left: auto;

    @media ($media-sm) {
      margin: 0;
      order: -1;
    }

    a {
      &:first-child {
        width: 154rem;
        height: 48rem;

        @media ($media-sm) {
          width: 134rem;
          height: 43rem;
        }
      }

      &:last-child {
        width: 150rem;
        height: 52rem;

        @media ($media-sm) {
          width: 131rem;
          height: 44re;
        }
      }
    }
  }

  &__copyright {
    display: flex;
    align-items: flex-end;

    @media ($media-sm) {
      flex-direction: column;
      margin-top: 56rem;
      align-items: flex-start;
    }

    p {
      font: $text-link-s;
      color: $color-white;
      padding-bottom: $spacing-2;

      @media ($media-sm) {
        margin-top: $spacing-3;
      }
    }

    ul {
      display: flex;
      text-decoration: none;
      list-style: none;
      gap: $gap-6;
      padding: 0;
      margin-left: $spacing-6;
      padding-bottom: $spacing-2;

      @media ($media-sm) {
        flex-wrap: wrap;
        gap: $gap-3 $gap-4;
        margin: $spacing-1 0 0;
      }

      li {
        a,
        a:visited {
          color: $color-white;
          cursor: pointer;
          font: $text-link-s;

          &:hover {
            opacity: 0.7;
          }
        }
      }
    }
  }
}
</style>
