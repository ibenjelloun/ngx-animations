import { RouteAnimationPipe } from './route-animation.pipe';

describe('RouteAnimationPipe', () => {
  it('create an instance', () => {
    const pipe = new RouteAnimationPipe();
    expect(pipe).toBeTruthy();
  });
  it('should get the animation value', () => {
    const pipe = new RouteAnimationPipe();
    const outlet = { activatedRouteData: { animation: 'HomePage' } };
    expect(pipe.transform(outlet)).toEqual('HomePage');
  });
  it('should be falsy if outlet is undefined', () => {
    const pipe = new RouteAnimationPipe();
    const outlet = undefined;
    expect(pipe.transform(outlet)).toBeFalsy();
  });
  it('should be falsy if activatedRouteData is undefined', () => {
    const pipe = new RouteAnimationPipe();
    const outlet = { activatedRouteData: undefined };
    expect(pipe.transform(outlet)).toBeFalsy();
  });
  it('should be falsy if animation is undefined', () => {
    const pipe = new RouteAnimationPipe();
    const outlet = { activatedRouteData: { animation: undefined } };
    expect(pipe.transform(outlet)).toBeFalsy();
  });
});
