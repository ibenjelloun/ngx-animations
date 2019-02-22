import { AnimationDefinition } from '../model/animation-definition';

export const flip: AnimationDefinition = {
  denominator: 4,
  start: {
    transform:
      'perspective(400px) scale3d(1, 1, 1) translate3d(0, 0, 0) rotate3d(0, 1, 0, -360deg)'
  },
  steps: [
    {
      transform:
        'perspective(400px) scale3d(1, 1, 1) translate3d(0, 0, 150px) rotate3d(0, 1, 0, -190deg)'
    },
    {
      transform:
        'perspective(400px) scale3d(1, 1, 1) translate3d(0, 0, 150px) rotate3d(0, 1, 0, -170deg)'
    },
    {
      transform:
        'perspective(400px) scale3d(0.95, 0.95, 0.95) translate3d(0, 0, 0) rotate3d(0, 1, 0, 0deg)'
    },
    {
      transform:
        'perspective(400px) scale3d(1, 1, 1) translate3d(0, 0, 0) rotate3d(0, 1, 0, 0deg)'
    }
  ]
};

export const flipInX: AnimationDefinition = {
  denominator: 4,
  start: { transform: 'perspective(400px) rotate3d(1, 0, 0, 90deg)' },
  steps: [
    { transform: 'perspective(400px) rotate3d(1, 0, 0, -20deg)' },
    { transform: 'perspective(400px) rotate3d(1, 0, 0, 10deg)' },
    { transform: 'perspective(400px) rotate3d(1, 0, 0, -5deg)' },
    { transform: 'perspective(400px)' }
  ]
};

export const flipInY: AnimationDefinition = {
  denominator: 4,
  start: { transform: 'perspective(400px) rotate3d(0, 1, 0, 90deg)' },
  steps: [
    { transform: 'perspective(400px) rotate3d(0, 1, 0, -20deg)' },
    { transform: 'perspective(400px) rotate3d(0, 1, 0, 10deg)' },
    { transform: 'perspective(400px) rotate3d(0, 1, 0, -5deg)' },
    { transform: 'perspective(400px)' }
  ]
};

export const flipOutX: AnimationDefinition = {
  denominator: 2,
  start: { transform: 'perspective(400px)' },
  steps: [
    { transform: 'perspective(400px) rotate3d(1, 0, 0, -20deg)' },
    { opacity: 0, transform: 'perspective(400px) rotate3d(1, 0, 0, 90deg)' }
  ]
};

export const flipOutY: AnimationDefinition = {
  denominator: 2,
  start: { transform: 'perspective(400px)' },
  steps: [
    { transform: 'perspective(400px) rotate3d(0, 1, 0, -15deg)' },
    { opacity: 0, transform: 'perspective(400px) rotate3d(0, 1, 0, 90deg)' }
  ]
};
