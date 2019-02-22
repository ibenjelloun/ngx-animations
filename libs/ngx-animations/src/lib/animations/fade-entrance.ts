import { AnimationDefinition } from '../model/animation-definition';

export const fadeIn: AnimationDefinition = {
  denominator: 1,
  start: { opacity: '0' },
  steps: [{ opacity: '1' }]
};

export const fadeInDown: AnimationDefinition = {
  denominator: 1,
  start: { opacity: '0', transform: 'translate3d(0, -100%, 0' },
  steps: [{ opacity: '1', transform: 'translate3d(0, 0, 0' }]
};

export const fadeInDownBig: AnimationDefinition = {
  denominator: 1,
  start: { opacity: '0', transform: 'translate3d(0, -2000px, 0' },
  steps: [{ opacity: '1', transform: 'translate3d(0, 0, 0' }]
};

export const fadeInLeft: AnimationDefinition = {
  denominator: 1,
  start: { opacity: '0', transform: 'translate3d(-100%, 0, 0' },
  steps: [{ opacity: '1', transform: 'translate3d(0, 0, 0' }]
};

export const fadeInLeftBig: AnimationDefinition = {
  denominator: 1,
  start: { opacity: '0', transform: 'translate3d(-2000px, 0, 0' },
  steps: [{ opacity: '1', transform: 'translate3d(0, 0, 0' }]
};

export const fadeInRight: AnimationDefinition = {
  denominator: 1,
  start: { opacity: '0', transform: 'translate3d(100%, 0, 0' },
  steps: [{ opacity: '1', transform: 'translate3d(0, 0, 0' }]
};

export const fadeInRightBig: AnimationDefinition = {
  denominator: 1,
  start: { opacity: '0', transform: 'translate3d(2000px, 0, 0' },
  steps: [{ opacity: '1', transform: 'translate3d(0, 0, 0' }]
};

export const fadeInUp: AnimationDefinition = {
  denominator: 1,
  start: { opacity: '0', transform: 'translate3d(0, 100%, 0' },
  steps: [{ opacity: '1', transform: 'translate3d(0, 0, 0' }]
};

export const fadeInUpBig: AnimationDefinition = {
  denominator: 1,
  start: { opacity: '0', transform: 'translate3d(0, 2000px, 0' },
  steps: [{ opacity: '1', transform: 'translate3d(0, 0, 0' }]
};
