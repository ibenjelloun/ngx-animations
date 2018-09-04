import {
  AnimationStyleMetadata,
  AnimationAnimateMetadata,
  style,
  animate
} from '@angular/animations';

export function bounce(
  time: number
): (AnimationStyleMetadata | AnimationAnimateMetadata)[] {
  const t = time / 4;
  return [
    style({}),
    animate(t,
      style({
        transform: 'translate3d(0, -30px, 0)',
        'animation-timing-function': 'cubic-bezier(0.755, 0.05, 0.855, 0.06)',
        offset: .43
      })
    ),
    animate(t,
      style({
        transform: 'translate3d(0, -15px, 0)',
        'animation-timing-function': 'cubic-bezier(0.755, 0.05, 0.855, 0.06)',
        offset: .7
      })
    ),
    animate(t,
      style({
        transform: 'translate3d(0, -4px, 0)',
        offset: .9
      })
    ),
    animate(t,
      style({
        'animation-timing-function': 'cubic-bezier(0.215, 0.61, 0.355, 1)',
        transform: 'translate3d(0, 0, 0)',
        offset: 1
      })
    )
  ];
}

export function flash(time: number): (AnimationStyleMetadata | AnimationAnimateMetadata)[] {
  const t = time / 4;
  return [
    style({ opacity: '1', offset: 0 }),
    animate(t, style({ opacity: '0', offset: .25})),
    animate(t, style({ opacity: '1', offset: .50})),
    animate(t, style({ opacity: '0', offset: .75})),
    animate(t, style({ opacity: '1', offset: 1}))
  ];
}

export function headShake(time: number): (AnimationStyleMetadata | AnimationAnimateMetadata)[] {
  const t = time / 5;
  return [
    style({ transform: 'translateX(0)', offset: 0 }),
    animate(t, style({ transform: 'translateX(-6px) rotateY(-9deg)', offset: .06})),
    animate(t, style({ transform: 'translateX(5px) rotateY(7deg)', offset: .18})),
    animate(t, style({ transform: 'translateX(-3px) rotateY(-5deg)', offset: .31})),
    animate(t, style({ transform: 'translateX(2px) rotateY(3deg)', offset: .43})),
    animate(t, style({ transform: 'translateX(0)', offset: .5}))
  ];
}

export function heartBeat(time: number): (AnimationStyleMetadata | AnimationAnimateMetadata)[] {
  const t = time / 5;
  return [
    style({ transform: 'scale(1)', offset: 0 }),
    animate(t, style({ transform: 'scale(1.3)', offset: .14})),
    animate(t, style({ transform: 'scale(1)', offset: .28})),
    animate(t, style({ transform: 'scale(1.3)', offset: .42})),
    animate(t, style({ transform: 'scale(1)', offset: .7}))
  ];
}

export function jello(time: number): (AnimationStyleMetadata | AnimationAnimateMetadata)[] {
  const t = time / 7;
  return [
    style({ transform: 'translate3d(0, 0, 0)', offset: 0 }),
    animate(t, style({ transform: 'skewX(-12.5deg) skewY(-12.5deg)', offset: .22})),
    animate(t, style({ transform: 'skewX(6.25deg) skewY(6.25deg)', offset: .33})),
    animate(t, style({ transform: 'skewX(-3.125deg) skewY(-3.125deg)', offset: .44})),
    animate(t, style({ transform: 'skewX(1.5625deg) skewY(1.5625deg)', offset: .55})),
    animate(t, style({ transform: 'skewX(-0.78125deg) skewY(-0.78125deg)', offset: .66})),
    animate(t, style({ transform: 'skewX(0.390625deg) skewY(0.390625deg)', offset: .77})),
    animate(t, style({ transform: 'skewX(-0.1953125deg) skewY(-0.1953125deg)', offset: .88}))
  ];
}


export function pulse(time: number): (AnimationStyleMetadata | AnimationAnimateMetadata)[] {
  const t = time / 2;
  return [
    style({ transform: 'scale3d(1, 1, 1)', offset: 0 }),
    animate(t, style({ transform: 'scale3d(1.05, 1.05, 1.05)', offset: .5})),
    animate(t, style({ transform: 'scale3d(1, 1, 1)', offset: 1}))
  ];
}

export function rubberBand(time: number): (AnimationStyleMetadata | AnimationAnimateMetadata)[] {
  const t = time / 6;
  return [
    style({ transform: 'scale3d(1, 1, 1)', offset: 0 }),
    animate(t, style({ transform: 'scale3d(1.25, 0.75, 1)', offset: .3})),
    animate(t, style({ transform: 'scale3d(0.75, 1.25, 1)', offset: .4})),
    animate(t, style({ transform: 'scale3d(1.15, 0.85, 1)', offset: .5})),
    animate(t, style({ transform: 'scale3d(0.95, 1.05, 1)', offset: .65})),
    animate(t, style({ transform: 'scale3d(1.05, 0.95, 1)', offset: .75})),
    animate(t, style({ transform: 'scale3d(1, 1, 1)', offset: 1}))
  ];
}


export function shake(time: number): (AnimationStyleMetadata | AnimationAnimateMetadata)[] {
  const t = time / 10;
  return [
    style({ transform: 'translate3d(0, 0, 0)', offset: 0 }),
    animate(t, style({ transform: 'translate3d(-10px, 0, 0)'})),
    animate(t, style({ transform: 'translate3d( 10px, 0, 0)'})),
    animate(t, style({ transform: 'translate3d(-10px, 0, 0)'})),
    animate(t, style({ transform: 'translate3d( 10px, 0, 0)'})),
    animate(t, style({ transform: 'translate3d(-10px, 0, 0)'})),
    animate(t, style({ transform: 'translate3d( 10px, 0, 0)'})),
    animate(t, style({ transform: 'translate3d(-10px, 0, 0)'})),
    animate(t, style({ transform: 'translate3d( 10px, 0, 0)'})),
    animate(t, style({ transform: 'translate3d(-10px, 0, 0)'})),
    animate(t, style({ transform: 'translate3d(0, 0, 0)'})),
  ];
}

export function swing(time: number): (AnimationStyleMetadata | AnimationAnimateMetadata)[] {
  const t = time / 10;
  return [
    style({}),
    animate(t, style({ transform: 'rotate3d(0, 0, 1, 15deg)'})),
    animate(t, style({ transform: 'rotate3d(0, 0, 1, -10deg)'})),
    animate(t, style({ transform: 'rotate3d(0, 0, 1, 5deg)'})),
    animate(t, style({ transform: 'rotate3d(0, 0, 1, -5deg)'})),
    animate(t, style({ transform: 'rotate3d(0, 0, 1, 0deg)'}))
  ];
}

export function tada(time: number): (AnimationStyleMetadata | AnimationAnimateMetadata)[] {
  const t = time / 10;
  return [
    style({transform: 'scale3d(1, 1, 1)'}),
    animate(t, style({ transform: 'scale3d(0.9, 0.9, 0.9) rotate3d(0, 0, 1, -3deg)'})),
    animate(t, style({ transform: 'scale3d(0.9, 0.9, 0.9) rotate3d(0, 0, 1, -3deg)'})),
    animate(t, style({ transform: 'scale3d(1.1, 1.1, 1.1) rotate3d(0, 0, 1, 3deg)'})),
    animate(t, style({ transform: 'scale3d(1.1, 1.1, 1.1) rotate3d(0, 0, 1, -3deg)'})),
    animate(t, style({ transform: 'scale3d(1.1, 1.1, 1.1) rotate3d(0, 0, 1, 3deg)'})),
    animate(t, style({ transform: 'scale3d(1.1, 1.1, 1.1) rotate3d(0, 0, 1, -3deg)'})),
    animate(t, style({ transform: 'scale3d(1.1, 1.1, 1.1) rotate3d(0, 0, 1, 3deg)'})),
    animate(t, style({ transform: 'scale3d(1.1, 1.1, 1.1) rotate3d(0, 0, 1, -3deg)'})),
    animate(t, style({ transform: 'scale3d(1.1, 1.1, 1.1) rotate3d(0, 0, 1, 3deg)'})),
    animate(t, style({ transform: 'scale3d(1, 1, 1)'}))
  ];
}

export function wobble(time: number): (AnimationStyleMetadata | AnimationAnimateMetadata)[] {
  const t = time / 6;
  return [
    style({transform: 'translate3d(0, 0, 0)'}),
    animate(t, style({ transform: 'translate3d(-25%, 0, 0) rotate3d(0, 0, 1, -5deg)'})),
    animate(t, style({ transform: 'translate3d(20%, 0, 0) rotate3d(0, 0, 1, 3deg)'})),
    animate(t, style({ transform: 'translate3d(-15%, 0, 0) rotate3d(0, 0, 1, -3deg)'})),
    animate(t, style({ transform: 'translate3d(10%, 0, 0) rotate3d(0, 0, 1, 2deg)'})),
    animate(t, style({ transform: 'translate3d(-5%, 0, 0) rotate3d(0, 0, 1, -1deg)'})),
    animate(t, style({ transform: 'translate3d(0, 0, 0)'}))
  ];
}
