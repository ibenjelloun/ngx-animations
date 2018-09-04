import { AnimationStyleMetadata, AnimationAnimateMetadata, style, animate } from "@angular/animations";

export function rotateIn(time: number): (AnimationStyleMetadata | AnimationAnimateMetadata)[] {
  const t = time / 2;
  return [
    style({ opacity: '0', 'transform-origin': 'center', transform: 'rotate3d(0, 0, 1, -200deg)' }),
    animate(t, style({ opacity: '1', 'transform-origin': 'center', transform: 'translate3d(0, 0, 0)' }))
  ];
}

export function rotateInDownLeft(time: number): (AnimationStyleMetadata | AnimationAnimateMetadata)[] {
  const t = time / 2;
  return [
    style({ opacity: '0', 'transform-origin': 'left bottom', transform: 'rotate3d(0, 0, 1, -45deg)' }),
    animate(t, style({ opacity: '1', 'transform-origin': 'left bottom', transform: 'translate3d(0, 0, 0)' }))
  ];
}

export function rotateInDownRight(time: number): (AnimationStyleMetadata | AnimationAnimateMetadata)[] {
  const t = time / 2;
  return [
    style({ opacity: '0', 'transform-origin': 'right bottom', transform: 'rotate3d(0, 0, 1, 45deg)' }),
    animate(t, style({ opacity: '1', 'transform-origin': 'right bottom', transform: 'translate3d(0, 0, 0)' }))
  ];
}

export function rotateInUpLeft(time: number): (AnimationStyleMetadata | AnimationAnimateMetadata)[] {
  const t = time / 2;
  return [
    style({ opacity: '0', 'transform-origin': 'left bottom', transform: 'rotate3d(0, 0, 1, 45deg)' }),
    animate(t, style({ opacity: '1', 'transform-origin': 'left bottom', transform: 'translate3d(0, 0, 0)' }))
  ];
}

export function rotateInUpRight(time: number): (AnimationStyleMetadata | AnimationAnimateMetadata)[] {
  const t = time / 2;
  return [
    style({ opacity: '0', 'transform-origin': 'right bottom', transform: 'rotate3d(0, 0, 1, -90deg)' }),
    animate(t, style({ opacity: '1', 'transform-origin': 'right bottom', transform: 'translate3d(0, 0, 0)' }))
  ];
}
