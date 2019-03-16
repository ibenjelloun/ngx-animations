import { AnimationDefinition } from '../model/animation-definition';

export const fadeOut: AnimationDefinition = {
  denominator: 1,
  start: { opacity: '1' },
  steps: [{ opacity: '0' }]
};

export const fadeOutDown: AnimationDefinition = {
  denominator: 1,
  start: { opacity: '1' },
  steps: [{ opacity: '0', transform: 'translate3d(0, 100%, 0' }]
};

export const fadeOutDownBig: AnimationDefinition = {
  denominator: 1,
  start: { opacity: '1' },
  steps: [{ opacity: '0', transform: 'translate3d(0, 2000px, 0' }]
};

export const fadeOutLeft: AnimationDefinition = {
  denominator: 1,
  start: { opacity: '1' },
  steps: [{ opacity: '0', transform: 'translate3d(-100%, 0, 0' }]
};

export const fadeOutLeftBig: AnimationDefinition = {
  denominator: 1,
  start: { opacity: '1' },
  steps: [{ opacity: '0', transform: 'translate3d(-2000px, 0, 0' }]
};

export const fadeOutRight: AnimationDefinition = {
  denominator: 1,
  start: { opacity: '1' },
  steps: [{ opacity: '0', transform: 'translate3d(100%, 0, 0' }]
};

export const fadeOutRightBig: AnimationDefinition = {
  denominator: 1,
  start: { opacity: '1' },
  steps: [{ opacity: '0', transform: 'translate3d(2000px, 0, 0' }]
};

export const fadeOutUp: AnimationDefinition = {
  denominator: 1,
  start: { opacity: '1' },
  steps: [{ opacity: '0', transform: 'translate3d(0, -100%, 0' }]
};

export const fadeOutUpBig: AnimationDefinition = {
  denominator: 1,
  start: { opacity: '1' },
  steps: [{ opacity: '0', transform: 'translate3d(0, -2000px, 0' }]
};
