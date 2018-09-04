import { AnimationStyleMetadata, AnimationAnimateMetadata, style, animate } from "@angular/animations";

export function fadeOut(time: number): (AnimationStyleMetadata | AnimationAnimateMetadata)[] {
  return [
    style({ opacity: '1' }),
    animate(time, style({ opacity: '0' }))
  ];
}

export function fadeOutDown(time: number): (AnimationStyleMetadata | AnimationAnimateMetadata)[] {
  return [
    style({ opacity: '1' }),
    animate(time, style({ opacity: '0', transform: 'translate3d(0, 100%, 0)' }))
  ];
}

export function fadeOutDownBig(time: number): (AnimationStyleMetadata | AnimationAnimateMetadata)[] {
  return [
    style({ opacity: '1' }),
    animate(time, style({ opacity: '0', transform: 'translate3d(0, 2000px, 0)' }))
  ];
}

export function fadeOutLeft(time: number): (AnimationStyleMetadata | AnimationAnimateMetadata)[] {
  return [
    style({ opacity: '1' }),
    animate(time, style({ opacity: '0', transform: 'translate3d(-100%, 0, 0)' }))
  ];
}

export function fadeOutLeftBig(time: number): (AnimationStyleMetadata | AnimationAnimateMetadata)[] {
  return [
    style({ opacity: '1' }),
    animate(time, style({ opacity: '0', transform: 'translate3d(-2000px, 0, 0)' }))
  ];
}

export function fadeOutRight(time: number): (AnimationStyleMetadata | AnimationAnimateMetadata)[] {
  return [
    style({ opacity: '1' }),
    animate(time, style({ opacity: '0', transform: 'translate3d(100%, 0, 0)' }))
  ];
}

export function fadeOutRightBig(time: number): (AnimationStyleMetadata | AnimationAnimateMetadata)[] {
  return [
    style({ opacity: '1' }),
    animate(time, style({ opacity: '0', transform: 'translate3d(2000px, 0, 0)' }))
  ];
}

export function fadeOutUp(time: number): (AnimationStyleMetadata | AnimationAnimateMetadata)[] {
  return [
    style({ opacity: '1' }),
    animate(time, style({ opacity: '0', transform: 'translate3d(0, -100%, 0)' }))
  ];
}

export function fadeOutUpBig(time: number): (AnimationStyleMetadata | AnimationAnimateMetadata)[] {
  return [
    style({ opacity: '1' }),
    animate(time, style({ opacity: '0', transform: 'translate3d(0, -2000px, 0)' }))
  ];
}
