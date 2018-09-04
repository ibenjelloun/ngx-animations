import {
  AnimationStyleMetadata,
  AnimationAnimateMetadata,
  style,
  animate
} from '@angular/animations';

export function bounceIn(time: number): (AnimationStyleMetadata | AnimationAnimateMetadata)[] {
  const t = time / 5;
  return [
    style({ opacity: '0', transform: 'scale3d(0.3, 0.3, 0.3)', offset: 0 }),
    animate(t, style({ transform: 'scale3d(1.1, 1.1, 1.1)', offset: .2 })),
    animate(t, style({ transform: 'scale3d(0.9, 0.9, 0.9)', offset: .4 })),
    animate(t, style({ opacity: '1', transform: 'scale3d(1.03, 1.03, 1.03)', offset: .6 })),
    animate(t, style({ transform: 'scale3d(0.97, 0.97, 0.97)', offset: .8 })),
    animate(t, style({ opacity: '1', transform: 'scale3d(1, 1, 1)'}))
  ];
}

export function bounceInDown(time: number): (AnimationStyleMetadata | AnimationAnimateMetadata)[] {
  const t = time / 4;
  return [
    style({ opacity: '0', transform: 'translate3d(0, -3000px, 0)', offset: 0 }),
    animate(t, style({ opacity: '1', transform: 'translate3d(0, 25px, 0)', offset: .6})),
    animate(t, style({ transform: 'translate3d(0, -10px, 0)', offset: .75 })),
    animate(t, style({ transform: 'translate3d(0, 5px, 0)', offset: .9 })),
    animate(time, style({ transform: 'translate3d(0, 0, 0)' }))
  ];
}

export function bounceInLeft(time: number): (AnimationStyleMetadata | AnimationAnimateMetadata)[] {
  const t = time / 4;
  return [
    style({ opacity: '0', transform: 'translate3d(-3000px, 0, 0)', offset: 0 }),
    animate(t, style({ opacity: '1', transform: 'translate3d(25px, 0, 0)', offset: .6})),
    animate(t, style({ transform: 'translate3d(-10px, 0, 0)', offset: .75 })),
    animate(t, style({ transform: 'translate3d(5px, 0, 0)', offset: .9 })),
    animate(t, style({ transform: 'translate3d(0, 0, 0)' }))
  ];
}

export function bounceInRight(time: number): (AnimationStyleMetadata | AnimationAnimateMetadata)[] {
  const t = time / 4;
  return [
    style({ opacity: '0', transform: 'translate3d(3000px, 0, 0)', offset: 0 }),
    animate(t, style({ opacity: '1', transform: 'translate3d(-25px, 0, 0)', offset: .6})),
    animate(t, style({ transform: 'translate3d(10px, 0, 0)', offset: .75 })),
    animate(t, style({ transform: 'translate3d(-5px, 0, 0)', offset: .9 })),
    animate(t, style({ transform: 'translate3d(0, 0, 0)' }))
  ];
}


export function bounceInUp(time: number): (AnimationStyleMetadata | AnimationAnimateMetadata)[] {
  const t = time / 4;
  return [
    style({ opacity: '0', transform: 'translate3d(0, 3000px, 0)', offset: 0 }),
    animate(t, style({ opacity: '1', transform: 'translate3d(0, -25px, 0)', offset: .6})),
    animate(t, style({ transform: 'translate3d(0, 10px, 0)', offset: .75 })),
    animate(t, style({ transform: 'translate3d(0, -5px, 0)', offset: .9 })),
    animate(t, style({ transform: 'translate3d(0, 0, 0)' }))
  ];
}
