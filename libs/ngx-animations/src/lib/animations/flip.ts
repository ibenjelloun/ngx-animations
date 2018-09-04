import { AnimationStyleMetadata, AnimationAnimateMetadata, style, animate } from "@angular/animations";

export function flip(time: number): (AnimationStyleMetadata | AnimationAnimateMetadata)[] {
  const t = time / 4;
  return [
    style({ transform: 'perspective(400px) scale3d(1, 1, 1) translate3d(0, 0, 0) rotate3d(0, 1, 0, -360deg)' }),
    animate(t, style({ transform: 'perspective(400px) scale3d(1, 1, 1) translate3d(0, 0, 150px) rotate3d(0, 1, 0, -190deg)' })),
    animate(t, style({ transform: 'perspective(400px) scale3d(1, 1, 1) translate3d(0, 0, 150px) rotate3d(0, 1, 0, -170deg)' })),
    animate(t, style({ transform: 'perspective(400px) scale3d(0.95, 0.95, 0.95) translate3d(0, 0, 0) rotate3d(0, 1, 0, 0deg)' })),
    animate(t, style({ transform: 'perspective(400px) scale3d(1, 1, 1) translate3d(0, 0, 0) rotate3d(0, 1, 0, 0deg)' })),
  ];
}

export function flipInX(time: number): (AnimationStyleMetadata | AnimationAnimateMetadata)[] {
  const t = time / 4;
  return [
    style({ transform: 'perspective(400px) rotate3d(1, 0, 0, 90deg)' }),
    animate(t, style({ transform: 'perspective(400px) rotate3d(1, 0, 0, -20deg)' })),
    animate(t, style({ transform: 'perspective(400px) rotate3d(1, 0, 0, 10deg)' })),
    animate(t, style({ transform: 'perspective(400px) rotate3d(1, 0, 0, -5deg)' })),
    animate(t, style({ transform: 'perspective(400px)' })),
  ];
}

export function flipInY(time: number): (AnimationStyleMetadata | AnimationAnimateMetadata)[] {
  const t = time / 4;
  return [
    style({ transform: 'perspective(400px) rotate3d(0, 1, 0, 90deg)' }),
    animate(t, style({ transform: 'perspective(400px) rotate3d(0, 1, 0, -20deg)' })),
    animate(t, style({ transform: 'perspective(400px) rotate3d(0, 1, 0, 10deg)' })),
    animate(t, style({ transform: 'perspective(400px) rotate3d(0, 1, 0, -5deg)' })),
    animate(t, style({ transform: 'perspective(400px)' })),
  ];
}

export function flipOutX(time: number): (AnimationStyleMetadata | AnimationAnimateMetadata)[] {
  const t = time / 2;
  return [
    style({ transform: 'perspective(400px)' }),
    animate(t, style({ transform: 'perspective(400px) rotate3d(1, 0, 0, -20deg)' })),
    animate(t, style({opacity: 0, transform: 'perspective(400px) rotate3d(1, 0, 0, 90deg)' }))
  ];
}

export function flipOutY(time: number): (AnimationStyleMetadata | AnimationAnimateMetadata)[] {
  const t = time / 2;
  return [
    style({ transform: 'perspective(400px)' }),
    animate(t, style({ transform: 'perspective(400px) rotate3d(0, 1, 0, -15deg)' })),
    animate(t, style({opacity: 0, transform: 'perspective(400px) rotate3d(0, 1, 0, 90deg)' }))
  ];
}
