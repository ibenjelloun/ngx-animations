import { AnimationDefinition } from '../model/animation-definition';

export const bounceIn: AnimationDefinition = {
  denominator: 5,
  start: { opacity: '0', transform: 'scale3d(0.3, 0.3, 0.3)', offset: 0 },
  steps: [
    { transform: 'scale3d(1.1, 1.1, 1.1)', offset: 0.2 },
    { transform: 'scale3d(0.9, 0.9, 0.9)', offset: 0.4 },
    { opacity: '1', transform: 'scale3d(1.03, 1.03, 1.03)', offset: 0.6 },
    { transform: 'scale3d(0.97, 0.97, 0.97)', offset: 0.8 },
    { opacity: '1', transform: 'scale3d(1, 1, 1)' }
  ]
};

export const bounceInDown: AnimationDefinition = {
  denominator: 4,
  start: { opacity: '0', transform: 'translate3d(0, -3000px, 0)', offset: 0 },
  steps: [
    { opacity: '1', transform: 'translate3d(0, 25px, 0)', offset: 0.6 },
    { transform: 'translate3d(0, -10px, 0)', offset: 0.75 },
    { transform: 'translate3d(0, 5px, 0)', offset: 0.9 },
    { transform: 'translate3d(0, 0, 0)' }
  ]
};

export const bounceInLeft: AnimationDefinition = {
  denominator: 4,
  start: { opacity: '0', transform: 'translate3d(-3000px, 0, 0)', offset: 0 },
  steps: [
    { opacity: '1', transform: 'translate3d(25px, 0, 0)', offset: 0.6 },
    { transform: 'translate3d(-10px, 0, 0)', offset: 0.75 },
    { transform: 'translate3d(5px, 0, 0)', offset: 0.9 },
    { transform: 'translate3d(0, 0, 0)' }
  ]
};

export const bounceInRight: AnimationDefinition = {
  denominator: 4,
  start: { opacity: '0', transform: 'translate3d(3000px, 0, 0)', offset: 0 },
  steps: [
    { opacity: '1', transform: 'translate3d(-25px, 0, 0)', offset: 0.6 },
    { transform: 'translate3d(10px, 0, 0)', offset: 0.75 },
    { transform: 'translate3d(-5px, 0, 0)', offset: 0.9 },
    { transform: 'translate3d(0, 0, 0)' }
  ]
};

export const bounceInUp: AnimationDefinition = {
  denominator: 4,
  start: { opacity: '0', transform: 'translate3d(0, 3000px, 0)', offset: 0 },
  steps: [
    { opacity: '1', transform: 'translate3d(0, -25px, 0)', offset: 0.6 },
    { transform: 'translate3d(0, 10px, 0)', offset: 0.75 },
    { transform: 'translate3d(0, -5px, 0)', offset: 0.9 },
    { transform: 'translate3d(0, 0, 0)' }
  ]
};
