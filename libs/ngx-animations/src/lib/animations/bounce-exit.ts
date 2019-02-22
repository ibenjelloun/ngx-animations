import { AnimationDefinition } from '../model/animation-definition';

export const bounceOut: AnimationDefinition = {
  denominator: 3,
  start: {},
  steps: [
    { transform: 'scale3d(0.9, 0.9, 0.9', offset: 0.2 },
    { opacity: 1, transform: 'scale3d(1.1, 1.1, 1.1', offset: 0.55 },
    { opacity: 0, transform: 'scale3d(0.3, 0.3, 0.3' }
  ]
};

export const bounceOutDown: AnimationDefinition = {
  denominator: 3,
  start: {},
  steps: [
    { transform: 'translate3d(0, 10px, 0', offset: 0.2 },
    { opacity: 1, transform: 'translate3d(0, -20px, 0', offset: 0.45 },
    { opacity: 0, transform: 'translate3d(0, 2000px, 0' }
  ]
};

export const bounceOutLeft: AnimationDefinition = {
  denominator: 2,
  start: {},
  steps: [
    { opacity: 1, transform: 'translate3d(20px, 0, 0', offset: 0.2 },
    { opacity: 0, transform: 'translate3d(-2000px, 0, 0' }
  ]
};

export const bounceOutRight: AnimationDefinition = {
  denominator: 2,
  start: {},
  steps: [
    { opacity: 1, transform: 'translate3d(-20px, 0, 0', offset: 0.2 },
    { opacity: 0, transform: 'translate3d(2000px, 0, 0' }
  ]
};

export const bounceOutUp: AnimationDefinition = {
  denominator: 3,
  start: {},
  steps: [
    { transform: 'translate3d(0, -10px, 0', offset: 0.2 },
    { opacity: 1, transform: 'translate3d(0, 20px, 0', offset: 0.45 },
    { opacity: 0, transform: 'translate3d(0, -2000px, 0' }
  ]
};
