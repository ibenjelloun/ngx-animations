import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'routeAnimation'
})
export class RouteAnimationPipe implements PipeTransform {
  transform(outlet): string {
    return outlet && outlet.activatedRouteData && outlet.activatedRouteData['animation'];
  }
}
