import { AnimationStyleMetadata, AnimationAnimateMetadata, style, animate } from "@angular/animations";

export function slideInDown(time: number): (AnimationStyleMetadata | AnimationAnimateMetadata)[] {
  const t = time / 2;
  return [
    style({ visibility: 'visible', transform: 'translate3d(0, -100%, 0)' }),
    animate(t, style({ transform: 'translate3d(0, 0, 0)' }))
  ];
}

export function slideInLeft(time: number): (AnimationStyleMetadata | AnimationAnimateMetadata)[] {
  const t = time / 2;
  return [
    style({ visibility: 'visible', transform: 'translate3d(-100%, 0, 0)' }),
    animate(t, style({ transform: 'translate3d(0, 0, 0)' }))
  ];
}

export function slideInRight(time: number): (AnimationStyleMetadata | AnimationAnimateMetadata)[] {
  const t = time / 2;
  return [
    style({ visibility: 'visible', transform: 'translate3d(100%, 0, 0)' }),
    animate(t, style({ transform: 'translate3d(0, 0, 0)' }))
  ];
}

export function slideInUp (time: number): (AnimationStyleMetadata | AnimationAnimateMetadata)[] {
  const t = time / 2;
  return [
    style({ visibility: 'visible', transform: 'translate3d(0, 100%, 0)' }),
    animate(t, style({ transform: 'translate3d(0, 0, 0)' }))
  ];
}
