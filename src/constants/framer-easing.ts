import { cubicBezier } from 'framer-motion';

export const linear = cubicBezier(0.25, 0.25, 0.75, 0.75);

export const ease = cubicBezier(0.25, 0.1, 0.25, 1);
export const easeIn = cubicBezier(0.42, 0, 1, 1);
export const easeOut = cubicBezier(0.0, 0, 0.58, 1);
export const easeInOut = cubicBezier(0.42, 0, 0.58, 1);

export const easeInBack = cubicBezier(0.6, -0.28, 0.735, 0.045);
export const easeOutBack = cubicBezier(0.175, 0.885, 0.32, 1.275);
export const easeInoutBack = cubicBezier(0.68, -0.55, 0.265, 1.55);

export const easeInSine = cubicBezier(0.47, 0, 0.745, 0.715);
export const easeOutSine = cubicBezier(0.39, 0.575, 0.565, 1);
export const easeInOutSine = cubicBezier(0.445, 0.05, 0.55, 0.95);

export const easeInquad = cubicBezier(0.55, 0.085, 0.68, 0.53);
export const easeOutquad = cubicBezier(0.25, 0.46, 0.45, 0.94);
export const easeInoutQuad = cubicBezier(0.455, 0.03, 0.515, 0.955);

export const easeInCubic = cubicBezier(0.55, 0.085, 0.68, 0.53);
export const easeOutCubic = cubicBezier(0.25, 0.46, 0.45, 0.94);
export const easeInOutCubic = cubicBezier(0.455, 0.03, 0.515, 0.955);

export const easeInQuart = cubicBezier(0.55, 0.085, 0.68, 0.53);
export const easeOutQuart = cubicBezier(0.25, 0.46, 0.45, 0.94);
export const easeInOutQuart = cubicBezier(0.455, 0.03, 0.515, 0.955);
