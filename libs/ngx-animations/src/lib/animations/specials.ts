import { AnimationStyleMetadata, AnimationAnimateMetadata, style, animate } from "@angular/animations";

export function hinge(time: number = 2000): (AnimationStyleMetadata | AnimationAnimateMetadata)[] {
  const t = time / 3;
  return [
    style({ 'transform-origin': 'top left', 'animation-timing-function': 'ease-in-out' }),
    animate(t, style({ 'transform-origin': 'top left', 'animation-timing-function': 'ease-in-out', transform: 'rotate3d(0, 0, 1, 80deg)' })),
    animate(t, style({ opacity: '1', 'transform-origin': 'top left', 'animation-timing-function': 'ease-in-out', transform: 'rotate3d(0, 0, 1, 60deg)' })),
    animate(t, style({ opacity: '0', 'transform-origin': 'top left', 'animation-timing-function': 'ease-in-out', transform: 'translate3d(0, 700px, 0)' })),
  ];
}

export function jackInTheBox(time: number = 2000): (AnimationStyleMetadata | AnimationAnimateMetadata)[] {
  const t = time / 3;
  return [
    style({ opacity: '0', 'transform-origin': 'center bottom', transform: 'scale(0.1) rotate(30deg)' }),
    animate(t, style({ transform: 'rotate(-10deg)' })),
    animate(t, style({ transform: 'rotate(3deg)' })),
    animate(t, style({ opacity: '1', transform: 'scale(1)' })),
  ];
}


export function rollIn(time: number): (AnimationStyleMetadata | AnimationAnimateMetadata)[] {
  const t = time;
  return [
    style({ opacity: '0', transform: 'translate3d(-100%, 0, 0) rotate3d(0, 0, 1, -120deg)' }),
    animate(t, style({ opacity: '1', transform: 'translate3d(0, 0, 0)' })),
  ];
}

export function rollOut(time: number): (AnimationStyleMetadata | AnimationAnimateMetadata)[] {
  const t = time;
  return [
    style({ opacity: '1' }),
    animate(t, style({ opacity: '0', transform: 'translate3d(100%, 0, 0) rotate3d(0, 0, 1, 120deg)' })),
  ];
}
