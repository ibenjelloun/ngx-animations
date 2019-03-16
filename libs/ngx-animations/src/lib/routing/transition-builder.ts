import {
  AnimationStyleMetadata,
  AnimationAnimateMetadata,
  transition,
  query,
  style,
  AnimationTransitionMetadata
} from '@angular/animations';
import { animations } from '../model/animations-list';

/*
 * Build route transition that can be used in the @Component animations
 * Usage Example :
 * @Component({
 *   selector: 'my-app',
 *   templateUrl: './app.component.html',
 *   styleUrls: ['./app.component.css'],
 *   animations: [
 *    buildRouteTransition({ stateChangeExpr: '* => *',
 *     enter: animations.bounceIn(200),
 *     leave: animations.bounceOut(200)})
 *   ]
 * })
 */
export function buildRouteTransition(
  options: {
    stateChangeExpr?: string;
    enter?: (AnimationStyleMetadata | AnimationAnimateMetadata)[];
    leave?: (AnimationStyleMetadata | AnimationAnimateMetadata)[];
  } = {}
): AnimationTransitionMetadata {
  return transition(options.stateChangeExpr || '* => *', [
    query(':enter', [style({ opacity: 0, position: 'absolute' })], { optional: true }),
    query(':leave', [style({ position: 'absolute' }), ...(options.leave || animations.bounceOut(200))], {
      optional: true
    }),
    query(':enter', [style({ position: 'absolute' }), ...(options.enter || animations.bounceIn(200))], {
      optional: true
    })
  ]);
}
