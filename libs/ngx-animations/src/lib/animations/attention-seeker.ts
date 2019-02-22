import { AnimationDefinition } from '../model/animation-definition';

export const bounce: AnimationDefinition = {
  denominator: 4,
  start: {},
  steps: [
    {
      transform: 'translate3d(0, -30px, 0)',
      'animation-timing-function': 'cubic-bezier(0.755, 0.05, 0.855, 0.06)',
      offset: 0.43
    },

    {
      transform: 'translate3d(0, -15px, 0)',
      'animation-timing-function': 'cubic-bezier(0.755, 0.05, 0.855, 0.06)',
      offset: 0.7
    },
    {
      transform: 'translate3d(0, -4px, 0)',
      offset: 0.9
    },
    {
      'animation-timing-function': 'cubic-bezier(0.215, 0.61, 0.355, 1)',
      transform: 'translate3d(0, 0, 0)',
      offset: 1
    }
  ]
};

export const flash: AnimationDefinition = {
  denominator: 4,
  start: { opacity: '1', offset: 0 },
  steps: [
    { opacity: '0', offset: 0.25 },
    { opacity: '1', offset: 0.5 },
    { opacity: '0', offset: 0.75 },
    { opacity: '1', offset: 1 }
  ]
};

export const headShake: AnimationDefinition = {
  denominator: 5,
  start: { transform: 'translateX(0)', offset: 0 },
  steps: [
    { transform: 'translateX(-6px) rotateY(-9deg)', offset: 0.06 },
    { transform: 'translateX(5px) rotateY(7deg)', offset: 0.18 },
    { transform: 'translateX(-3px) rotateY(-5deg)', offset: 0.31 },
    { transform: 'translateX(2px) rotateY(3deg)', offset: 0.43 },
    { transform: 'translateX(0)', offset: 0.5 }
  ]
};

export const heartBeat: AnimationDefinition = {
  denominator: 5,
  start: { transform: 'scale(1)', offset: 0 },
  steps: [
    { transform: 'scale(1.3)', offset: 0.14 },
    { transform: 'scale(1)', offset: 0.28 },
    { transform: 'scale(1.3)', offset: 0.42 },
    { transform: 'scale(1)', offset: 0.7 }
  ]
};

export const jello: AnimationDefinition = {
  denominator: 7,
  start: { transform: 'translate3d(0, 0, 0)', offset: 0 },
  steps: [
    { transform: 'skewX(-12.5deg) skewY(-12.5deg)', offset: 0.22 },
    { transform: 'skewX(6.25deg) skewY(6.25deg)', offset: 0.33 },
    { transform: 'skewX(-3.125deg) skewY(-3.125deg)', offset: 0.44 },
    { transform: 'skewX(1.5625deg) skewY(1.5625deg)', offset: 0.55 },
    {
      transform: 'skewX(-0.78125deg) skewY(-0.78125deg)',
      offset: 0.66
    },
    {
      transform: 'skewX(0.390625deg) skewY(0.390625deg)',
      offset: 0.77
    },
    {
      transform: 'skewX(-0.1953125deg) skewY(-0.1953125deg)',
      offset: 0.88
    }
  ]
};

export const pulse: AnimationDefinition = {
  denominator: 2,
  start: { transform: 'scale3d(1, 1, 1)', offset: 0 },
  steps: [
    { transform: 'scale3d(1.05, 1.05, 1.05)', offset: 0.5 },
    { transform: 'scale3d(1, 1, 1)', offset: 1 }
  ]
};

export const rubberBand: AnimationDefinition = {
  denominator: 6,
  start: { transform: 'scale3d(1, 1, 1)', offset: 0 },
  steps: [
    { transform: 'scale3d(1.25, 0.75, 1)', offset: 0.3 },
    { transform: 'scale3d(0.75, 1.25, 1)', offset: 0.4 },
    { transform: 'scale3d(1.15, 0.85, 1)', offset: 0.5 },
    { transform: 'scale3d(0.95, 1.05, 1)', offset: 0.65 },
    { transform: 'scale3d(1.05, 0.95, 1)', offset: 0.75 },
    { transform: 'scale3d(1, 1, 1)', offset: 1 }
  ]
};

export const shake: AnimationDefinition = {
  denominator: 10,
  start: { transform: 'translate3d(0, 0, 0)', offset: 0 },
  steps: [
    { transform: 'translate3d(-10px, 0, 0)' },
    { transform: 'translate3d( 10px, 0, 0)' },
    { transform: 'translate3d(-10px, 0, 0)' },
    { transform: 'translate3d( 10px, 0, 0)' },
    { transform: 'translate3d(-10px, 0, 0)' },
    { transform: 'translate3d( 10px, 0, 0)' },
    { transform: 'translate3d(-10px, 0, 0)' },
    { transform: 'translate3d( 10px, 0, 0)' },
    { transform: 'translate3d(-10px, 0, 0)' },
    { transform: 'translate3d(0, 0, 0)' }
  ]
};

export const swing: AnimationDefinition = {
  denominator: 10,
  start: {},
  steps: [
    { transform: 'rotate3d(0, 0, 1, 15deg)' },
    { transform: 'rotate3d(0, 0, 1, -10deg)' },
    { transform: 'rotate3d(0, 0, 1, 5deg)' },
    { transform: 'rotate3d(0, 0, 1, -5deg)' },
    { transform: 'rotate3d(0, 0, 1, 0deg)' }
  ]
};

export const tada: AnimationDefinition = {
  denominator: 10,
  start: { transform: 'scale3d(1, 1, 1)' },
  steps: [
    { transform: 'scale3d(0.9, 0.9, 0.9) rotate3d(0, 0, 1, -3deg)' },
    { transform: 'scale3d(0.9, 0.9, 0.9) rotate3d(0, 0, 1, -3deg)' },
    { transform: 'scale3d(1.1, 1.1, 1.1) rotate3d(0, 0, 1, 3deg)' },
    { transform: 'scale3d(1.1, 1.1, 1.1) rotate3d(0, 0, 1, -3deg)' },
    { transform: 'scale3d(1.1, 1.1, 1.1) rotate3d(0, 0, 1, 3deg)' },
    { transform: 'scale3d(1.1, 1.1, 1.1) rotate3d(0, 0, 1, -3deg)' },
    { transform: 'scale3d(1.1, 1.1, 1.1) rotate3d(0, 0, 1, 3deg)' },
    { transform: 'scale3d(1.1, 1.1, 1.1) rotate3d(0, 0, 1, -3deg)' },
    { transform: 'scale3d(1.1, 1.1, 1.1) rotate3d(0, 0, 1, 3deg)' },
    { transform: 'scale3d(1, 1, 1)' }
  ]
};

export const wobble: AnimationDefinition = {
  denominator: 6,
  start: { transform: 'translate3d(0, 0, 0)' },
  steps: [
    { transform: 'translate3d(-25%, 0, 0) rotate3d(0, 0, 1, -5deg)' },
    { transform: 'translate3d(20%, 0, 0) rotate3d(0, 0, 1, 3deg)' },
    { transform: 'translate3d(-15%, 0, 0) rotate3d(0, 0, 1, -3deg)' },
    { transform: 'translate3d(10%, 0, 0) rotate3d(0, 0, 1, 2deg)' },
    { transform: 'translate3d(-5%, 0, 0) rotate3d(0, 0, 1, -1deg)' },
    { transform: 'translate3d(0, 0, 0)' }
  ]
};
