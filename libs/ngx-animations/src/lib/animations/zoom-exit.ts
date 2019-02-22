import { AnimationDefinition } from '../model/animation-definition';

export const zoomOut: AnimationDefinition = {
  denominator: 1,
  start: { opacity: '1' },
  steps: [
    { opacity: '0', transform: 'scale3d(0.3, 0.3, 0.3)', offset: 0.5 },
    { opacity: '0' }
  ]
};

export const zoomOutDown: AnimationDefinition = {
  denominator: 1,
  start: {},
  steps: [
    {
      opacity: '0.5',
      transform: 'scale3d(0.475, 0.475, 0.475) translate3d(0, 0, 0)',
      'animation-timing-function': 'cubic-bezier(0.55, 0.055, 0.675, 0.19)',
      offset: 0.4
    },
    {
      opacity: '0',
      'transform-origin': 'center bottom',
      transform: 'scale3d(0.1, 0.1, 0.1) translate3d(0, 2000px, 0)',
      'animation-timing-function': 'cubic-bezier(0.175, 0.885, 0.32, 1)'
    }
  ]
};

export const zoomOutLeft: AnimationDefinition = {
  denominator: 1,
  start: {},
  steps: [
    {
      opacity: '0.5',
      transform: 'scale3d(0.475, 0.475, 0.475) translate3d(42px, 0, 0)',
      offset: 0.4
    },
    {
      opacity: '0',
      'transform-origin': 'left center',
      transform: 'scale(0.1) translate3d(-2000px, 0, 0)'
    }
  ]
};

export const zoomOutRight: AnimationDefinition = {
  denominator: 1,
  start: {},
  steps: [
    {
      opacity: '0.5',
      transform: 'scale3d(0.475, 0.475, 0.475) translate3d(-42px, 0, 0)',
      offset: 0.4
    },
    {
      opacity: '0',
      'transform-origin': 'right center',
      transform: 'scale(0.1) translate3d(2000px, 0, 0)'
    }
  ]
};

export const zoomOutUp: AnimationDefinition = {
  denominator: 1,
  start: {},
  steps: [
    {
      opacity: '0.5',
      transform: 'scale3d(0.475, 0.475, 0.475) translate3d(0, 60px, 0)',
      'animation-timing-function': 'cubic-bezier(0.55, 0.055, 0.675, 0.19)',
      offset: 0.4
    },
    {
      opacity: '0',
      'transform-origin': 'center bottom',
      transform: 'scale3d(0.1, 0.1, 0.1) translate3d(0, -2000px, 0)',
      'animation-timing-function': 'cubic-bezier(0.175, 0.885, 0.32, 1)'
    }
  ]
};
