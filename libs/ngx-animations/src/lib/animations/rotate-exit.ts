import { AnimationDefinition } from '../model/animation-definition';

export const rotateOut: AnimationDefinition = {
  denominator: 2,
  start: { opacity: '1', 'transform-origin': 'center' },
  steps: [
    {
      opacity: '0',
      'transform-origin': 'center',
      transform: 'rotate3d(0, 0, 1, 200deg'
    }
  ]
};

export const rotateOutDownLeft: AnimationDefinition = {
  denominator: 2,
  start: { opacity: '1', 'transform-origin': 'left bottom' },
  steps: [
    {
      opacity: '0',
      'transform-origin': 'left bottom',
      transform: 'rotate3d(0, 0, 1, 45deg'
    }
  ]
};

export const rotateOutDownRight: AnimationDefinition = {
  denominator: 2,
  start: { opacity: '1', 'transform-origin': 'right bottom' },
  steps: [
    {
      opacity: '0',
      'transform-origin': 'right bottom',
      transform: 'rotate3d(0, 0, 1, -45deg'
    }
  ]
};

export const rotateOutUpLeft: AnimationDefinition = {
  denominator: 2,
  start: { opacity: '1', 'transform-origin': 'left bottom' },
  steps: [
    {
      opacity: '0',
      'transform-origin': 'left bottom',
      transform: 'rotate3d(0, 0, 1, -45deg'
    }
  ]
};

export const rotateOutUpRight: AnimationDefinition = {
  denominator: 2,
  start: { opacity: '1', 'transform-origin': 'right bottom' },
  steps: [
    {
      opacity: '0',
      'transform-origin': 'right bottom',
      transform: 'rotate3d(0, 0, 1, 90deg'
    }
  ]
};
