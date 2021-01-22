import { AnimationDefinition } from '../model/animation-definition';

export const backInDown: AnimationDefinition = {
  denominator: 1,
  start: { opacity: '0.7', transform: 'translateY(-1200px) scale(0.7)' },
  steps: [
    { opacity: '0.7', transform: 'translateY(0px) scale(0.7)', offset: 0.8 },
    { opacity: '1', transform: 'scale(1)', offset: 1 }
  ]
};

export const backInLeft: AnimationDefinition = {
  denominator: 1,
  start: { opacity: '0.7', transform: 'translateX(-2000px) scale(0.7)' },
  steps: [
    { opacity: '0.7', transform: 'translateX(0px) scale(0.7)', offset: 0.8 },
    { opacity: '1', transform: 'scale(1)', offset: 1 }
  ]
};

export const backInRight: AnimationDefinition = {
  denominator: 1,
  start: { opacity: '0.7', transform: 'translateX(2000px) scale(0.7)' },
  steps: [
    { opacity: '0.7', transform: 'translateX(0px) scale(0.7)', offset: 0.8 },
    { opacity: '1', transform: 'scale(1)', offset: 1 }
  ]
};

export const backInUp: AnimationDefinition = {
  denominator: 1,
  start: { opacity: '0.7', transform: 'translateY(1200px) scale(0.7)' },
  steps: [
    { opacity: '0.7', transform: 'translateY(0px) scale(0.7)', offset: 0.8 },
    { opacity: '1', transform: 'scale(1)', offset: 1 }
  ]
};
