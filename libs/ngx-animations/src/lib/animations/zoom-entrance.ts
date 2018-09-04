import { AnimationStyleMetadata, AnimationAnimateMetadata, style, animate } from "@angular/animations";

export function zoomIn(time: number): (AnimationStyleMetadata | AnimationAnimateMetadata)[] {
  const t = time;
  return [
    style({  opacity: '0', transform: 'scale3d(0.3, 0.3, 0.3)' }),
    animate(t, style({ opacity: '1', transform: 'scale3d(1, 1, 1)' })),
  ];
}

export function zoomInDown(time: number): (AnimationStyleMetadata | AnimationAnimateMetadata)[] {
  const t = time;
  return [
    style({  opacity: '0', transform: 'scale3d(0.1, 0.1, 0.1) translate3d(0, -1000px, 0)', 'animation-timing-function': 'cubic-bezier(0.55, 0.055, 0.675, 0.19)' }),
    animate(t, style({ opacity: '1', transform: 'scale3d(1, 1, 1) translate3d(0, 0, 0)', 'animation-timing-function': 'cubic-bezier(0.175, 0.885, 0.32, 1)' })),
  ];
}

export function zoomInLeft(time: number): (AnimationStyleMetadata | AnimationAnimateMetadata)[] {
  const t = time;
  return [
    style({  opacity: '0', transform: 'scale3d(0.1, 0.1, 0.1) translate3d(-1000px, 0, 0)', 'animation-timing-function': 'cubic-bezier(0.55, 0.055, 0.675, 0.19)' }),
    animate(t, style({ opacity: '1', transform: 'scale3d(1, 1, 1) translate3d(0, 0, 0)', 'animation-timing-function': 'cubic-bezier(0.175, 0.885, 0.32, 1)' })),
  ];
}

export function zoomInRight(time: number): (AnimationStyleMetadata | AnimationAnimateMetadata)[] {
  const t = time;
  return [
    style({  opacity: '0', transform: 'scale3d(0.1, 0.1, 0.1) translate3d(1000px, 0, 0)', 'animation-timing-function': 'cubic-bezier(0.55, 0.055, 0.675, 0.19)' }),
    animate(t, style({ opacity: '1', transform: 'scale3d(1, 1, 1) translate3d(0, 0, 0)', 'animation-timing-function': 'cubic-bezier(0.175, 0.885, 0.32, 1)' })),
  ];
}

export function zoomInUp(time: number): (AnimationStyleMetadata | AnimationAnimateMetadata)[] {
  const t = time;
  return [
    style({  opacity: '0', transform: 'scale3d(0.1, 0.1, 0.1) translate3d(0, 1000px, 0)', 'animation-timing-function': 'cubic-bezier(0.55, 0.055, 0.675, 0.19)' }),
    animate(t, style({ opacity: '1', transform: 'scale3d(1, 1, 1) translate3d(0, 0, 0)', 'animation-timing-function': 'cubic-bezier(0.175, 0.885, 0.32, 1)' })),
  ];
}
