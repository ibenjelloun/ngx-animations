import { AnimationStyleMetadata, AnimationAnimateMetadata, style, animate } from "@angular/animations";

export function fadeIn(time: number): (AnimationStyleMetadata | AnimationAnimateMetadata)[] {
  return [
    style({ opacity: '0' }),
    animate(time, style({ opacity: '1' }))
  ];
}

export function fadeInDown(time: number): (AnimationStyleMetadata | AnimationAnimateMetadata)[] {
  return [
    style({ opacity: '0', transform: 'translate3d(0, -100%, 0)' }),
    animate(time, style({ opacity: '1', transform: 'translate3d(0, 0, 0)' }))
  ];
}

export function fadeInDownBig(time: number): (AnimationStyleMetadata | AnimationAnimateMetadata)[] {
  return [
    style({ opacity: '0', transform: 'translate3d(0, -2000px, 0)' }),
    animate(time, style({ opacity: '1', transform: 'translate3d(0, 0, 0)' }))
  ];
}

export function fadeInLeft(time: number): (AnimationStyleMetadata | AnimationAnimateMetadata)[] {
  return [
    style({ opacity: '0', transform: 'translate3d(-100%, 0, 0)' }),
    animate(time, style({ opacity: '1', transform: 'translate3d(0, 0, 0)' }))
  ];
}

export function fadeInLeftBig(time: number): (AnimationStyleMetadata | AnimationAnimateMetadata)[] {
  return [
    style({ opacity: '0', transform: 'translate3d(-2000px, 0, 0)' }),
    animate(time, style({ opacity: '1', transform: 'translate3d(0, 0, 0)' }))
  ];
}

export function fadeInRight(time: number): (AnimationStyleMetadata | AnimationAnimateMetadata)[] {
  return [
    style({ opacity: '0', transform: 'translate3d(100%, 0, 0)' }),
    animate(time, style({ opacity: '1', transform: 'translate3d(0, 0, 0)' }))
  ];
}

export function fadeInRightBig(time: number): (AnimationStyleMetadata | AnimationAnimateMetadata)[] {
  return [
    style({ opacity: '0', transform: 'translate3d(2000px, 0, 0)' }),
    animate(time, style({ opacity: '1', transform: 'translate3d(0, 0, 0)' }))
  ];
}

export function fadeInUp(time: number): (AnimationStyleMetadata | AnimationAnimateMetadata)[] {
  return [
    style({ opacity: '0', transform: 'translate3d(0, 100%, 0)' }),
    animate(time, style({ opacity: '1', transform: 'translate3d(0, 0, 0)' }))
  ];
}

export function fadeInUpBig(time: number): (AnimationStyleMetadata | AnimationAnimateMetadata)[] {
  return [
    style({ opacity: '0', transform: 'translate3d(0, 2000px, 0)' }),
    animate(time, style({ opacity: '1', transform: 'translate3d(0, 0, 0)' }))
  ];
}
