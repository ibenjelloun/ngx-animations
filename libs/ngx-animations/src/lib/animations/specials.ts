import { AnimationDefinition } from '../model/animation-definition';

export const hinge: AnimationDefinition = {
  denominator: 3,
  start: {
    'transform-origin': 'top left',
    'animation-timing-function': 'ease-in-out'
  },
  steps: [
    {
      'transform-origin': 'top left',
      'animation-timing-function': 'ease-in-out',
      transform: 'rotate3d(0, 0, 1, 80deg)'
    },
    {
      opacity: '1',
      'transform-origin': 'top left',
      'animation-timing-function': 'ease-in-out',
      transform: 'rotate3d(0, 0, 1, 60deg)'
    },
    {
      opacity: '0',
      'transform-origin': 'top left',
      'animation-timing-function': 'ease-in-out',
      transform: 'translate3d(0, 700px, 0)'
    }
  ]
};

export const jackInTheBox: AnimationDefinition = {
  denominator: 3,
  start: {
    opacity: '0',
    'transform-origin': 'center bottom',
    transform: 'scale(0.1) rotate(30deg)'
  },
  steps: [
    { transform: 'rotate(-10deg)' },
    { transform: 'rotate(3deg)' },
    { opacity: '1', transform: 'scale(1)' }
  ]
};

export const rollIn: AnimationDefinition = {
  denominator: 1,
  start: {
    opacity: '0',
    transform: 'translate3d(-100%, 0, 0) rotate3d(0, 0, 1, -120deg)'
  },
  steps: [{ opacity: '1', transform: 'translate3d(0, 0, 0)' }]
};

export const rollOut: AnimationDefinition = {
  denominator: 1,
  start: { opacity: '1' },
  steps: [
    {
      opacity: '0',
      transform: 'translate3d(100%, 0, 0) rotate3d(0, 0, 1, 120deg)'
    }
  ]
};
