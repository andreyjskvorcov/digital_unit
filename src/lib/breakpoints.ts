import { useMediaQuery } from '@vueuse/core';

export const breakpointConfig = {
  xs: 375,
  sm: 768,
  md: 1023,
  lg: 1279,
  xl: 1439,
  '2xl': 1919,
} as const;

export function useBreakpoint(screenSize: keyof typeof breakpointConfig) {
  return useMediaQuery(`(min-width: ${breakpointConfig[screenSize]}px)`);
}

/// examples import { useBreakpoint } from '~/lib/breakpoints'; const isMd = useBreakpoint('md');
