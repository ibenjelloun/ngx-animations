import { AnimationDefinition } from '../model/animation-definition';

export const backOutDown: AnimationDefinition = {
  denominator: 1,
  start: { opacity: '1', transform: 'scale(1)' },
  steps: [
    { opacity: '0.7', transform: 'translateY(0px) scale(0.7)', offset: 0.2 },
    { opacity: '0.7', transform: 'translateY(700px) scale(0.7)', offset: 1 }
  ]
};

export const backOutLeft: AnimationDefinition = {
  denominator: 1,
  start: { opacity: '1', transform: 'scale(1)' },
  steps: [
    { opacity: '0.7', transform: 'translateX(0px) scale(0.7)', offset: 0.2 },
    { opacity: '0.7', transform: 'translateX(-2000px) scale(0.7)', offset: 1 }
  ]
};

export const backOutRight: AnimationDefinition = {
  denominator: 1,
  start: { opacity: '1', transform: 'scale(1)' },
  steps: [
    { opacity: '0.7', transform: 'translateX(0px) scale(0.7)', offset: 0.2 },
    { opacity: '0.7', transform: 'translateX(2000px) scale(0.7)', offset: 1 }
  ]
};

export const backOutUp: AnimationDefinition = {
  denominator: 1,
  start: { opacity: '1', transform: 'scale(1)' },
  steps: [
    { opacity: '0.7', transform: 'translateY(0px) scale(0.7)', offset: 0.2 },
    { opacity: '0.7', transform: 'translateY(-700px) scale(0.7)', offset: 1 }
  ]
};
