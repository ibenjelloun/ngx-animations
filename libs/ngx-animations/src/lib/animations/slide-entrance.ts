import { AnimationDefinition } from '../model/animation-definition';

export const slideInDown: AnimationDefinition = {
  denominator: 2,
  start: { visibility: 'visible', transform: 'translate3d(0, -100%, 0' },
  steps: [{ transform: 'translate3d(0, 0, 0' }]
};

export const slideInLeft = {
  denominator: 2,
  start: { visibility: 'visible', transform: 'translate3d(-100%, 0, 0' },
  steps: [{ transform: 'translate3d(0, 0, 0' }]
};

export const slideInRight = {
  denominator: 2,
  start: { visibility: 'visible', transform: 'translate3d(100%, 0, 0' },
  steps: [{ transform: 'translate3d(0, 0, 0' }]
};

export const slideInUp = {
  denominator: 2,
  start: { visibility: 'visible', transform: 'translate3d(0, 100%, 0' },
  steps: [{ transform: 'translate3d(0, 0, 0' }]
};
