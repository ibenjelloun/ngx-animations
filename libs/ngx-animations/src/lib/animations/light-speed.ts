import { AnimationDefinition } from '../model/animation-definition';

export const lightSpeedIn: AnimationDefinition = {
  denominator: 4,
  start: { opacity: '0', transform: 'translate3d(100%, 0, 0) skewX(-30deg)' },
  steps: [
    { opacity: '1', transform: 'skewX(20deg)', offset: 0.6 },
    { transform: 'skewX(-5deg)', offset: 0.8 },
    { transform: 'translate3d(0, 0, 0)' }
  ]
};

export const lightSpeedOut: AnimationDefinition = {
  denominator: 4,
  start: { opacity: '1' },
  steps: [{ opacity: '0', transform: 'translate3d(100%, 0, 0) skewX(30deg)' }]
};
