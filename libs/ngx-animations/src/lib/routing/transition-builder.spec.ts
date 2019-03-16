import { buildRouteTransition } from './transition-builder';
import { animations } from '../model/animations-list';

describe('buildRouteTransition', () => {
  it('should return an AnimationTransitionMetadata with no parameters', () => {
    const routeTransition = buildRouteTransition();
    expect(routeTransition).toBeTruthy();
  });
  it('should return an AnimationTransitionMetadata with parameters', () => {
    const routeTransition = buildRouteTransition({
      stateChangeExpr: '* => *',
      enter: animations.bounceIn(200),
      leave: animations.bounceOut(200)
    });
    expect(routeTransition).toBeTruthy();
  });
});
