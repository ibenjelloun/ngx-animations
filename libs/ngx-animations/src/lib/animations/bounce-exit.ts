import {
  AnimationStyleMetadata,
  AnimationAnimateMetadata,
  style,
  animate
} from '@angular/animations';

export function bounceOut(time: number): (AnimationStyleMetadata | AnimationAnimateMetadata)[] {
  const t = time / 3;
  return [
    style({}),
    animate(t, style({ transform: 'scale3d(0.9, 0.9, 0.9)', offset: .2 })),
    animate(t, style({ opacity: 1, transform: 'scale3d(1.1, 1.1, 1.1)', offset: .55 })),
    animate(t, style({ opacity: 0, transform: 'scale3d(0.3, 0.3, 0.3)' }))
  ];
}

export function bounceOutDown(time: number): (AnimationStyleMetadata | AnimationAnimateMetadata)[] {
  const t = time / 3;
  return [
    style({}),
    animate(t, style({ transform: 'translate3d(0, 10px, 0)', offset: .2 })),
    animate(t, style({ opacity: 1, transform: 'translate3d(0, -20px, 0)', offset: .45 })),
    animate(t, style({ opacity: 0, transform: 'translate3d(0, 2000px, 0)' }))
  ];
}

export function bounceOutLeft(time: number): (AnimationStyleMetadata | AnimationAnimateMetadata)[] {
  const t = time / 2;
  return [
    style({}),
    animate(t, style({ opacity: 1, transform: 'translate3d(20px, 0, 0)', offset: .2 })),
    animate(t, style({ opacity: 0, transform: 'translate3d(-2000px, 0, 0)' }))
  ];
}

export function bounceOutRight(time: number): (AnimationStyleMetadata | AnimationAnimateMetadata)[] {
  const t = time / 2;
  return [
    style({}),
    animate(t, style({ opacity: 1, transform: 'translate3d(-20px, 0, 0)', offset: .2 })),
    animate(t, style({ opacity: 0, transform: 'translate3d(2000px, 0, 0)' }))
  ];
}

export function bounceOutUp(time: number): (AnimationStyleMetadata | AnimationAnimateMetadata)[] {
  const t = time / 3;
  return [
    style({}),
    animate(t, style({ transform: 'translate3d(0, -10px, 0)', offset: .2 })),
    animate(t, style({ opacity: 1, transform: 'translate3d(0, 20px, 0)', offset: .45 })),
    animate(t, style({ opacity: 0, transform: 'translate3d(0, -2000px, 0)' }))
  ];
}
