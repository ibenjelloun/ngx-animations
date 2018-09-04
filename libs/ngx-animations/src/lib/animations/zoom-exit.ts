import { AnimationStyleMetadata, AnimationAnimateMetadata, style, animate } from "@angular/animations";

export function zoomOut(time: number): (AnimationStyleMetadata | AnimationAnimateMetadata)[] {
  const t = time;
  return [
    style({  opacity: '1' }),
    animate(t, style({ opacity: '0', transform: 'scale3d(0.3, 0.3, 0.3)', offset: .5 })),
    animate(t, style({ opacity: '0' })),
  ];
}

export function zoomOutDown(time: number): (AnimationStyleMetadata | AnimationAnimateMetadata)[] {
  const t = time;
  return [
    style({ }),
    animate(t, style({ opacity: '0', transform: 'scale3d(0.475, 0.475, 0.475) translate3d(0, -60px, 0)', 'animation-timing-function': 'cubic-bezier(0.55, 0.055, 0.675, 0.19)' , offset: .4 })),
    animate(t, style({ opacity: '0', 'transform-origin': 'center bottom', transform: 'scale3d(0.1, 0.1, 0.1) translate3d(0, 2000px, 0)', 'animation-timing-function': 'cubic-bezier(0.175, 0.885, 0.32, 1)' })),
  ];
}

export function zoomOutLeft(time: number): (AnimationStyleMetadata | AnimationAnimateMetadata)[] {
  const t = time;
  return [
    style({ }),
    animate(t, style({ opacity: '0', transform: 'scale3d(0.475, 0.475, 0.475) translate3d(42px, 0, 0)' , offset: .4 })),
    animate(t, style({ opacity: '0', 'transform-origin': 'left center', transform: 'scale(0.1) translate3d(-2000px, 0, 0)' })),
  ];
}

export function zoomOutRight(time: number): (AnimationStyleMetadata | AnimationAnimateMetadata)[] {
  const t = time;
  return [
    style({ }),
    animate(t, style({ opacity: '0', transform: 'scale3d(0.475, 0.475, 0.475) translate3d(-42px, 0, 0)' , offset: .4 })),
    animate(t, style({ opacity: '0', 'transform-origin': 'right center', transform: 'scale(0.1) translate3d(2000px, 0, 0)' })),
  ];
}

export function zoomOutUp(time: number): (AnimationStyleMetadata | AnimationAnimateMetadata)[] {
  const t = time;
  return [
    style({ }),
    animate(t, style({ opacity: '0', transform: 'scale3d(0.475, 0.475, 0.475) translate3d(0, 60px, 0)', 'animation-timing-function': 'cubic-bezier(0.55, 0.055, 0.675, 0.19)' , offset: .4 })),
    animate(t, style({ opacity: '0', 'transform-origin': 'center bottom', transform: 'scale3d(0.1, 0.1, 0.1) translate3d(0, -2000px, 0)', 'animation-timing-function': 'cubic-bezier(0.175, 0.885, 0.32, 1)' })),
  ];
}
