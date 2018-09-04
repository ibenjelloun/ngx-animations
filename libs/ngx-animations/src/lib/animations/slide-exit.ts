import { AnimationStyleMetadata, AnimationAnimateMetadata, style, animate } from "@angular/animations";

export function slideOutDown(time: number): (AnimationStyleMetadata | AnimationAnimateMetadata)[] {
  const t = time / 2;
  return [
    style({ transform: 'translate3d(0, 0, 0)' }),
    animate(t, style({ visibility: 'hidden',  transform: 'translate3d(0, 100%, 0)' }))
  ];
}

export function slideOutLeft(time: number): (AnimationStyleMetadata | AnimationAnimateMetadata)[] {
  const t = time / 2;
  return [
    style({ transform: 'translate3d(0, 0, 0)' }),
    animate(t, style({ visibility: 'hidden',  transform: 'translate3d(-100%, 0, 0)' }))
  ];
}

export function slideOutRight(time: number): (AnimationStyleMetadata | AnimationAnimateMetadata)[] {
  const t = time / 2;
  return [
    style({ transform: 'translate3d(0, 0, 0)' }),
    animate(t, style({ visibility: 'hidden',  transform: 'translate3d(100%, 0, 0)' }))
  ];
}

export function slideOutUp(time: number): (AnimationStyleMetadata | AnimationAnimateMetadata)[] {
  const t = time / 2;
  return [
    style({ transform: 'translate3d(0, 0, 0)' }),
    animate(t, style({ visibility: 'hidden',  transform: 'translate3d(0, -100%, 0)' }))
  ];
}
