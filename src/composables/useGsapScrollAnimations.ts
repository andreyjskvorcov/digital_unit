import { ref, onMounted } from 'vue';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export function useGsapScrollAnimations(options: Record<string, any> = {}) {
  const elRef = ref<HTMLElement | null>(null);

  onMounted(() => {
    if (elRef.value) {
      gsap.from(elRef.value, {
        opacity: 0,
        duration: 2,
        ...options,
        scrollTrigger: {
          trigger: elRef.value,
          start: 'top 80%',
          toggleActions: 'play none none none',
          ...(options.scrollTrigger || {}),
        },
      });
    }
  });

  return elRef;
}
