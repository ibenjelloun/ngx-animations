import { AnimationDefinition } from '../model/animation-definition';

export const zoomIn: AnimationDefinition = {
  denominator: 1,
  start: { opacity: '0', transform: 'scale3d(0.3, 0.3, 0.3)' },
  steps: [{ opacity: '1', transform: 'scale3d(1, 1, 1)' }]
};

export const zoomInDown: AnimationDefinition = {
  denominator: 1,
  start: {
    opacity: '0',
    transform: 'scale3d(0.1, 0.1, 0.1) translate3d(0, -1000px, 0)',
    'animation-timing-function': 'cubic-bezier(0.55, 0.055, 0.675, 0.19)'
  },
  steps: [
    {
      opacity: '1',
      transform: 'scale3d(1, 1, 1) translate3d(0, 0, 0)',
      'animation-timing-function': 'cubic-bezier(0.175, 0.885, 0.32, 1)'
    }
  ]
};

export const zoomInLeft: AnimationDefinition = {
  denominator: 1,
  start: {
    opacity: '0',
    transform: 'scale3d(0.1, 0.1, 0.1) translate3d(-1000px, 0, 0)',
    'animation-timing-function': 'cubic-bezier(0.55, 0.055, 0.675, 0.19)'
  },
  steps: [
    {
      opacity: '1',
      transform: 'scale3d(1, 1, 1) translate3d(0, 0, 0)',
      'animation-timing-function': 'cubic-bezier(0.175, 0.885, 0.32, 1)'
    }
  ]
};

export const zoomInRight: AnimationDefinition = {
  denominator: 1,
  start: {
    opacity: '0',
    transform: 'scale3d(0.1, 0.1, 0.1) translate3d(1000px, 0, 0)',
    'animation-timing-function': 'cubic-bezier(0.55, 0.055, 0.675, 0.19)'
  },
  steps: [
    {
      opacity: '1',
      transform: 'scale3d(1, 1, 1) translate3d(0, 0, 0)',
      'animation-timing-function': 'cubic-bezier(0.175, 0.885, 0.32, 1)'
    }
  ]
};

export const zoomInUp: AnimationDefinition = {
  denominator: 1,
  start: {
    opacity: '0',
    transform: 'scale3d(0.1, 0.1, 0.1) translate3d(0, 1000px, 0)',
    'animation-timing-function': 'cubic-bezier(0.55, 0.055, 0.675, 0.19)'
  },
  steps: [
    {
      opacity: '1',
      transform: 'scale3d(1, 1, 1) translate3d(0, 0, 0)',
      'animation-timing-function': 'cubic-bezier(0.175, 0.885, 0.32, 1)'
    }
  ]
};
