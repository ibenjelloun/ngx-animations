import { AnimationDefinition } from '../model/animation-definition';

export const slideOutDown: AnimationDefinition = {
  denominator: 2,
  start: { transform: 'translate3d(0, 0, 0' },
  steps: [{ visibility: 'hidden', transform: 'translate3d(0, 100%, 0' }]
};

export const slideOutLeft: AnimationDefinition = {
  denominator: 2,
  start: { transform: 'translate3d(0, 0, 0' },
  steps: [{ visibility: 'hidden', transform: 'translate3d(-100%, 0, 0' }]
};

export const slideOutRight: AnimationDefinition = {
  denominator: 2,
  start: { transform: 'translate3d(0, 0, 0' },
  steps: [{ visibility: 'hidden', transform: 'translate3d(100%, 0, 0' }]
};

export const slideOutUp: AnimationDefinition = {
  denominator: 2,
  start: { transform: 'translate3d(0, 0, 0' },
  steps: [{ visibility: 'hidden', transform: 'translate3d(0, -100%, 0' }]
};
