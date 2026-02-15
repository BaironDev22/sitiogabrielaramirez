/**
 * Utilidades para animaciones Motion (inView)
 * Uso: Importar en componentes y llamar initMotion() en el script client-side
 */

import { inView, animate, stagger } from 'motion';

export interface MotionOptions {
  threshold?: number;
  duration?: number;
  delay?: number;
}

/**
 * Inicializa animaciones fade up para elementos con data-animate
 */
export function initFadeUp(selector = '[data-animate="fade-up"]', options: MotionOptions = {}) {
  const {
    threshold = 0.2,
    duration = 0.6,
    delay = 0,
  } = options;

  const elements = document.querySelectorAll(selector);
  
  elements.forEach((el) => {
    inView(
      el,
      () => {
        animate(
          el as HTMLElement,
          { opacity: [0, 1], y: [40, 0] } as any,
          { duration, delay } as any
        );
      },
      { amount: threshold }
    );
  });
}

/**
 * Inicializa animaciones fade in para elementos con data-animate
 */
export function initFadeIn(selector = '[data-animate="fade-in"]', options: MotionOptions = {}) {
  const {
    threshold = 0.2,
    duration = 0.8,
    delay = 0,
  } = options;

  const elements = document.querySelectorAll(selector);
  
  elements.forEach((el) => {
    inView(
      el,
      () => {
        animate(
          el as HTMLElement,
          { opacity: [0, 1] } as any,
          { duration, delay } as any
        );
      },
      { amount: threshold }
    );
  });
}

/**
 * Inicializa animaciones stagger para grupos de elementos
 * Los hijos directos se animan secuencialmente
 */
export function initStagger(selector = '[data-animate="stagger"]', options: MotionOptions = {}) {
  const {
    threshold = 0.2,
    duration = 0.5,
  } = options;

  const containers = document.querySelectorAll(selector);
  
  containers.forEach((container) => {
    const children = Array.from(container.children);
    
    inView(
      container,
      () => {
        animate(
          children as HTMLElement[],
          { opacity: [0, 1], y: [30, 0] } as any,
          {
            duration,
            delay: stagger(0.1),
          } as any
        );
      },
      { amount: threshold }
    );
  });
}

/**
 * Inicializa animaciones slide desde la izquierda
 */
export function initSlideLeft(selector = '[data-animate="slide-left"]', options: MotionOptions = {}) {
  const {
    threshold = 0.2,
    duration = 0.7,
    delay = 0,
  } = options;

  const elements = document.querySelectorAll(selector);
  
  elements.forEach((el) => {
    inView(
      el,
      () => {
        animate(
          el as HTMLElement,
          { opacity: [0, 1], x: [-60, 0] } as any,
          { duration, delay } as any
        );
      },
      { amount: threshold }
    );
  });
}

/**
 * Inicializa animaciones slide desde la derecha
 */
export function initSlideRight(selector = '[data-animate="slide-right"]', options: MotionOptions = {}) {
  const {
    threshold = 0.2,
    duration = 0.7,
    delay = 0,
  } = options;

  const elements = document.querySelectorAll(selector);
  
  elements.forEach((el) => {
    inView(
      el,
      () => {
        animate(
          el as HTMLElement,
          { opacity: [0, 1], x: [60, 0] } as any,
          { duration, delay } as any
        );
      },
      { amount: threshold }
    );
  });
}

/**
 * Inicializa animación scale (zoom in)
 */
export function initScale(selector = '[data-animate="scale"]', options: MotionOptions = {}) {
  const {
    threshold = 0.2,
    duration = 0.6,
    delay = 0,
  } = options;

  const elements = document.querySelectorAll(selector);
  
  elements.forEach((el) => {
    inView(
      el,
      () => {
        animate(
          el as HTMLElement,
          { opacity: [0, 1], scale: [0.8, 1] } as any,
          { duration, delay } as any
        );
      },
      { amount: threshold }
    );
  });
}

/**
 * Función principal que inicializa todas las animaciones
 */
export function initAllMotions() {
  initFadeUp();
  initFadeIn();
  initStagger();
  initSlideLeft();
  initSlideRight();
  initScale();
}
