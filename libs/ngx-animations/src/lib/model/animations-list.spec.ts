import { AnimationDefinition } from './animation-definition';
import { stylesToAnimation } from './animations-list';
import { style } from '@angular/animations';

describe('stylesToAnimation (with spies)', () => {
  it('should correctly transform AnimationDefinition to animation', () => {
    const someAnimation: AnimationDefinition = {
      denominator: 1,
      start: { opacity: '1' },
      steps: [{ opacity: '0', transform: 'translate3d(0, 100%, 0' }]
    };

    const animation = stylesToAnimation(someAnimation)(100);
    expect(animation[0]).toEqual(style({ opacity: '1' }));
  });
});
