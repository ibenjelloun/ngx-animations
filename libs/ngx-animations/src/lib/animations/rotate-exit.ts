import { AnimationStyleMetadata, AnimationAnimateMetadata, style, animate } from "@angular/animations";

export function rotateOut(time: number): (AnimationStyleMetadata | AnimationAnimateMetadata)[] {
  const t = time / 2;
  return [
    style({ opacity: '1', 'transform-origin': 'center'}),
    animate(t, style({ opacity: '0', 'transform-origin': 'center', transform: 'rotate3d(0, 0, 1, 200deg)' }))
  ];
}

export function rotateOutDownLeft(time: number): (AnimationStyleMetadata | AnimationAnimateMetadata)[] {
  const t = time / 2;
  return [
    style({ opacity: '1', 'transform-origin': 'left bottom'}),
    animate(t, style({ opacity: '0', 'transform-origin': 'left bottom', transform: 'rotate3d(0, 0, 1, 45deg)' }))
  ];
}

export function rotateOutDownRight(time: number): (AnimationStyleMetadata | AnimationAnimateMetadata)[] {
  const t = time / 2;
  return [
    style({ opacity: '1', 'transform-origin': 'right bottom'}),
    animate(t, style({ opacity: '0', 'transform-origin': 'right bottom', transform: 'rotate3d(0, 0, 1, -45deg)' }))
  ];
}

export function rotateOutUpLeft(time: number): (AnimationStyleMetadata | AnimationAnimateMetadata)[] {
  const t = time / 2;
  return [
    style({ opacity: '1', 'transform-origin': 'left bottom'}),
    animate(t, style({ opacity: '0', 'transform-origin': 'left bottom', transform: 'rotate3d(0, 0, 1, -45deg)' }))
  ];
}

export function rotateOutUpRight(time: number): (AnimationStyleMetadata | AnimationAnimateMetadata)[] {
  const t = time / 2;
  return [
    style({ opacity: '1', 'transform-origin': 'right bottom'}),
    animate(t, style({ opacity: '0', 'transform-origin': 'right bottom', transform: 'rotate3d(0, 0, 1, 90deg)' }))
  ];
}
