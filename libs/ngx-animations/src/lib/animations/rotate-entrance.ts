import { AnimationDefinition } from '../model/animation-definition';

export const rotateIn: AnimationDefinition = {
  denominator: 2,
  start: {
    opacity: '0',
    'transform-origin': 'center',
    transform: 'rotate3d(0, 0, 1, -200deg)'
  },
  steps: [
    {
      opacity: '1',
      'transform-origin': 'center',
      transform: 'translate3d(0, 0, 0)'
    }
  ]
};

export const rotateInDownLeft: AnimationDefinition = {
  denominator: 2,
  start: {
    opacity: '0',
    'transform-origin': 'left bottom',
    transform: 'rotate3d(0, 0, 1, -45deg)'
  },
  steps: [
    {
      opacity: '1',
      'transform-origin': 'left bottom',
      transform: 'translate3d(0, 0, 0)'
    }
  ]
};

export const rotateInDownRight: AnimationDefinition = {
  denominator: 2,
  start: {
    opacity: '0',
    'transform-origin': 'right bottom',
    transform: 'rotate3d(0, 0, 1, 45deg)'
  },
  steps: [
    {
      opacity: '1',
      'transform-origin': 'right bottom',
      transform: 'translate3d(0, 0, 0)'
    }
  ]
};

export const rotateInUpLeft: AnimationDefinition = {
  denominator: 2,
  start: {
    opacity: '0',
    'transform-origin': 'left bottom',
    transform: 'rotate3d(0, 0, 1, 45deg)'
  },
  steps: [
    {
      opacity: '1',
      'transform-origin': 'left bottom',
      transform: 'translate3d(0, 0, 0)'
    }
  ]
};

export const rotateInUpRight: AnimationDefinition = {
  denominator: 2,
  start: {
    opacity: '0',
    'transform-origin': 'right bottom',
    transform: 'rotate3d(0, 0, 1, -90deg)'
  },
  steps: [
    {
      opacity: '1',
      'transform-origin': 'right bottom',
      transform: 'translate3d(0, 0, 0)'
    }
  ]
};
